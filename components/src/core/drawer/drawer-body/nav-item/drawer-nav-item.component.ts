import {
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
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
    hidden?: boolean;
};

export type ActiveItemBackgroundShape = 'round' | 'square';

@Component({
    selector: 'pxb-drawer-nav-item',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-nav-item.component.scss'],
    template: `
        <ng-container *ngIf="!hidden">
            <ng-template #navIcon><ng-content select="[pxb-icon]"></ng-content></ng-template>
            <div
                class="pxb-drawer-nav-item-content"
                #navItem
                matRipple
                [class.pxb-drawer-nav-item-active]="selected"
                [class.pxb-drawer-nav-item-compact]="compact"
            >
                <div
                    [class.pxb-drawer-nav-item-active-highlight]="selected"
                    [class.pxb-drawer-nav-item-active-round]="
                        activeItemBackgroundShape === 'round' && isOpen() && !isRail()
                    "
                    [class.pxb-drawer-nav-item-active-square]="
                        activeItemBackgroundShape === 'square' || !isOpen() || isRail()
                    "
                ></div>
                <pxb-info-list-item
                    *ngIf="!isRail()"
                    (click)="selectItem()"
                    [dense]="true"
                    [statusColor]="statusColor"
                    [chevron]="chevron && isOpen()"
                    [hidePadding]="hidePadding"
                    [divider]="divider ? 'full' : undefined"
                    [class.pxb-drawer-nav-item-no-icon-closed]="isEmpty(iconEl) && !isOpen()"
                >
                    <ng-container pxb-icon #icon>
                        <ng-container *ngTemplateOutlet="navIcon"></ng-container>
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
                    <div pxb-right-content *ngIf="hasChildren && isOpen()">
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
                <div class="pxb-drawer-nav-item-rail-container" *ngIf="isRail()">
                    <div
                        (click)="selectItem()"
                        class="pxb-drawer-nav-item-rail"
                        [matTooltip]="title"
                        [matTooltipDisabled]="!isRailCondensed()"
                        matTooltipPosition="right"
                    >
                        <ng-container *ngTemplateOutlet="navIcon"></ng-container>
                        <div class="pxb-drawer-nav-item-rail-text">{{ title }}</div>
                    </div>
                    <mat-divider *ngIf="divider"></mat-divider>
                </div> 
            </div>
            <!-- Nested Nav Items -->
            <mat-accordion displayMode="flat" class="pxb-drawer-nested-nav-item" *ngIf="!isRail()">
                <mat-expansion-panel [expanded]="expanded && isOpen()">
                    <ng-content select="pxb-drawer-nav-item"></ng-content>
                </mat-expansion-panel>
            </mat-accordion>
        </ng-container>
    `,
    host: {
        class: 'pxb-drawer-nav-item',
    },
})
export class DrawerNavItemComponent extends StateListener implements Omit<DrawerNavItem, 'items'> {
    @Input() activeItemBackgroundShape: ActiveItemBackgroundShape = 'square';
    @Input() chevron: boolean;
    @Input() divider = false;
    @Input() expanded = false;
    @Input() hidePadding: boolean;
    @Input() ripple = true;
    @Input() selected: boolean;
    @Input() statusColor: string;
    @Input() subtitle: string;
    @Input() title: string;
    @Input() hidden = false;
    @Input() compact = false;

    @Output() select: EventEmitter<string> = new EventEmitter<string>();

    @ContentChildren(DrawerNavItemComponent, { descendants: false }) nestedNavItems;
    @ViewChild('expandIcon') expandIconEl: ElementRef;
    @ViewChild('icon') iconEl: ElementRef;
    @ViewChild('collapseIcon') collapseIconEl: ElementRef;
    @ViewChild('navItem') navItemEl: ElementRef;

    isEmpty = (el: ElementRef): boolean => isEmptyView(el);
    isNestedItem: boolean;
    hasChildren = false;
    depth: number;
    id: number;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
        this.id = drawerService.createNavItemID();
        this.drawerService.drawerActiveItemChanges().subscribe(() => {
            if (this.navItemEl) {
                this.manageActiveItemTreeHighlight();
            }
        });
    }

    ngAfterContentInit(): void {
        if (!this.nestedNavItems) {
            return;
        }

        // If ContentChildren is self-inclusive (ng version < 9), filter self out using service-generated NavItem ID.
        this.nestedNavItems = this.nestedNavItems.filter((item: DrawerNavItemComponent) => item.id !== this.id);
        if (!this.nestedNavItems) {
            return;
        }

        this.hasChildren = this.nestedNavItems.length >= 1;
        for (const nestedItem of this.nestedNavItems) {
            nestedItem.setNestedDrawerDefaults();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selected) {
            this.drawerService.emitChangeActiveItemEvent();
        }
    }

    isRail(): boolean {
        return this.drawerService.getDrawerVariant() === 'rail';
    }

    isRailCondensed(): boolean {
        return this.drawerService.isRailCondensed();
    }

    manageActiveItemTreeHighlight(): void {
        this.navItemEl.nativeElement.classList.remove('pxb-drawer-nav-item-active-tree');

        if (!this.navItemEl) {
            return;
        }

        // Add tree highlighting for selected items
        if (this.selected && this.depth > 1) {
            let parent = this.navItemEl.nativeElement.parentNode;
            while (parent.parentNode) {
                parent = parent.parentNode;
                const navItem = parent.firstElementChild;
                if (navItem.classList.contains('pxb-drawer-nav-item-content')) {
                    navItem.classList.add('pxb-drawer-nav-item-active-tree');
                }
            }
        }
    }

    listenForDrawerChanges(): void {
        this.drawerOpenListener = this.drawerService.drawerOpenChanges().subscribe(() => {
            // Two detections are required to get the custom icons to work.
            // First tick causes the icons to container to reappear.
            // Second tick handles isEmpty function calls.
            this.changeDetector.detectChanges();
            this.changeDetector.detectChanges();
        });
    }

    incrementDepth(parentDepth: number): void {
        this.depth = parentDepth + 1;
        this.changeDetector.detectChanges();
        if (this.nestedNavItems) {
            for (const nestedItem of this.nestedNavItems) {
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
            this.changeDetector.detectChanges();
        }
    }

    toggleNestedNavItems(): void {
        this.expanded = !this.expanded;
    }
}
