import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { DrawerService } from '../../service/drawer.service';
import { StateListener } from '../../state-listener.component';
import { isEmptyView } from '../../../../utils/utils';

export type DrawerNavItem = {
    statusColor?: string;
    title: string;
    subtitle?: string;
    chevron?: boolean;
    divider?: boolean;
    items?: Array<Omit<DrawerNavItem, 'icon'>>;
    onSelect?: any;
    icon?: string;
    hasChildren?: boolean;
    ripple?: boolean;
    expanded?: boolean;
    hidePadding?: boolean;
};

export type ActiveItemBackgroundShape = 'round' | 'square';

@Component({
    selector: 'pxb-drawer-nav-item',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./drawer-nav-item.component.scss'],
    template: `
        <div class="pxb-drawer-nav-item">
            <pxb-info-list-item
                (click)="selectItem()"
                [dense]="true"
                [statusColor]="statusColor"
                [chevron]="chevron && drawerOpen"
                [hidePadding]="hidePadding"
                [divider]="divider ? 'full' : undefined"
                [class.pxb-info-list-item-active]="selected"
                [class.round]="activeItemBackgroundShape === 'round'"
                [class.square]="activeItemBackgroundShape === 'square' || !drawerOpen"
                [matRippleDisabled]="!ripple"
                matRipple
            >
                <ng-container pxb-icon #icon>
                    <ng-content select="[pxb-icon]"></ng-content>
                </ng-container>
                <div
                    pxb-title
                    [class.pxb-drawer-nav-item-depth-1]="depth === 1"
                    [class.pxb-drawer-nav-item-depth-2]="depth === 2"
                    [class.pxb-drawer-nav-item-depth-3]="depth === 3"
                >
                    {{ title }}
                </div>
                <div pxb-subtitle>{{ subtitle }}</div>
                <div pxb-right-content *ngIf="hasChildren && drawerOpen">
                    <div #expandIcon *ngIf="!expanded">
                        <ng-content select="[pxb-expand-icon]"></ng-content>
                    </div>
                    <div #collapseIcon *ngIf="expanded">
                        <ng-content select="[pxb-collapse-icon]"></ng-content>
                    </div>
                    <mat-icon
                        *ngIf="isEmpty(collapseIconEl) && isEmpty(expandIconEl)"
                        class="pxb-drawer-nav-item-expand-icon"
                        [class.expanded]="expanded"
                        >{{ depth > 1 ? 'arrow_drop_down' : 'expand_more' }}</mat-icon
                    >
                </div>
            </pxb-info-list-item>
        </div>
        <!-- Nested Nav Items -->
        <mat-accordion displayMode="flat" class="pxb-drawer-nested-nav-item">
            <mat-expansion-panel [expanded]="expanded && drawerOpen">
                <ng-content select="pxb-drawer-nav-item"></ng-content>
            </mat-expansion-panel>
        </mat-accordion>
    `,
})
export class DrawerNavItemComponent extends StateListener implements Omit<DrawerNavItem, 'items'> {
    @Input() activeItemBackgroundShape: ActiveItemBackgroundShape = 'round';
    @Input() chevron: boolean;
    @Input() divider: boolean;
    @Input() expanded = false;
    @Input() hidePadding: boolean;
    @Input() ripple = true;
    @Input() selected: boolean;
    @Input() statusColor: string;
    @Input() subtitle: string;
    @Input() title: string;

    @Output() select: EventEmitter<string> = new EventEmitter<string>();

    @ContentChildren(DrawerNavItemComponent, { descendants: false }) nestedNavItems;
    @ViewChild('expandIcon', { static: false }) expandIconEl: ElementRef;
    @ViewChild('collapseIcon', { static: false }) collapseIconEl: ElementRef;

    isEmpty = (el): boolean => isEmptyView(el);
    isNestedItem: boolean;
    drawerOpen: boolean;
    hasChildren = false;
    depth: number;
    id: number;

    constructor(drawerService: DrawerService, private readonly changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
        this.id = drawerService.createNavItemID();
    }

    ngAfterContentInit(): void {
        if (!this.nestedNavItems) {
            return;
        }

        // If ContentChildren is self-inclusive (ng version < 9), filter self out using service-generated NavItem ID.
        this.nestedNavItems = this.nestedNavItems.filter((item: DrawerNavItemComponent) =>  item.id !== this.id);
        if (!this.nestedNavItems) {
            return;
        }

        this.hasChildren = this.nestedNavItems.length >= 1;
        for (const nestedItem of this.nestedNavItems) {
            nestedItem.setNestedDrawerDefaults();
        }
    }

    listenForDrawerChanges(): void {
        this.drawerOpenListener = this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
            this.drawerOpen = res;
            // Two detections are required to get the custom icons to work.
            // First tick causes the icons to container to reappear.
            // Second tick handles isEmpty function calls.
            this.changeDetector.detectChanges();
            this.changeDetector.detectChanges();
        });
    }

    incrementDepth(parentDepth: number): void {
        this.depth = parentDepth + 1;
        if (this.nestedNavItems._results) {
            for (const nestedItem of this.nestedNavItems._results) {
                nestedItem.incrementDepth(this.depth);
            }
        }
    }

    setNavItemDefaults(): void {
        if (this.divider === undefined) this.divider = true;
        if (this.hidePadding === undefined) this.hidePadding = true;
        this.incrementDepth(0);
    }

    setNestedDrawerDefaults(): void {
        this.isNestedItem = true;
        if (this.divider === undefined) this.divider = false;
        if (this.hidePadding === undefined) this.hidePadding = false;
    }

    selectItem(): void {
        this.drawerService.select(this.hasChildren);
        this.select.emit();
        if (this.hasChildren) {
            this.toggleNestedNavItems();
        }
    }

    toggleNestedNavItems(): void {
        this.expanded = !this.expanded;
    }
}
