import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {DrawerService} from '../../service/drawer.service';
import {StateListener} from '../../state-listener.component';

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
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-nav-item.component.scss'],
    template: `
        <div class="pxb-drawer-nav-item">
            <pxb-info-list-item
                    (click)="selectItem()"
                    [dense]="true"
                    [statusColor]="statusColor"
                    [chevron]="chevron"
                    [divider]="divider ? 'full' : undefined"
                    [class.pxb-info-list-item-active]="selected"
                    [class.hide-padding]="hidePadding"
                    [class.round]="activeItemBackgroundShape === 'round'"
                    [class.square]="activeItemBackgroundShape === 'square' || !drawerOpen"
                    matRipple
                    [matRippleDisabled]="!ripple"
            >
                <div class="pxb-drawer-nav-item-icon-wrapper" icon>
                    <ng-content select="[icon]"></ng-content>
                </div>
                <div title>{{ title }}</div>
                <div subtitle>{{ subtitle }}</div>
                <mat-icon rightContent *ngIf="hasChildren" 
                          class="pxb-drawer-nav-item-expand-icon" [class.expanded]="expanded">expand_more</mat-icon>  
            </pxb-info-list-item>
        </div>
        <!-- Nested Nav Items -->
        <mat-accordion displayMode="flat" class="pxb-drawer-nested-nav-item">
            <mat-expansion-panel [(expanded)]="expanded && drawerOpen">
                <ng-content select="pxb-drawer-nav-item"></ng-content>
            </mat-expansion-panel>
        </mat-accordion>
    `,
})
export class DrawerNavItemComponent extends StateListener implements Omit<DrawerNavItem, 'items'> {
    @Input() activeItemBackgroundShape: ActiveItemBackgroundShape = 'round';
    @Input() chevron: boolean;
    @Input() divider: boolean;
    @Input() hidePadding = true;
    @Input() ripple = true;
    @Input() selected: string;
    @Input() statusColor: string;
    @Input() subtitle: string;
    @Input() title: string;
    @Input() expanded = false;
    @Output() select: EventEmitter<string> = new EventEmitter<string>();

    isNestedItem: boolean;
    drawerOpen: boolean;
    hasChildren: boolean;

    @ContentChildren(DrawerNavItemComponent) nestedNavItems;

    constructor(drawerService: DrawerService, private readonly changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    ngAfterContentInit(): void {
        this.hasChildren = this.nestedNavItems.length > 1; // ContentChildren is self-inclusive; the first result is this DrawerNavItem, not the nested DrawerNavItems.
        for (const nestedItem of this.nestedNavItems._results.slice(1)) {
            nestedItem.setNestedDrawerDefaults();
        }
    };

    setNavItemDefaults(): void {
        if (this.divider === undefined)  this.divider = true;
    }

    setNestedDrawerDefaults(): void {
        this.isNestedItem = true;
        if (this.divider === undefined) this.divider = false;
    }

    selectItem(): void {
        this.drawerService.select();
        if (this.hasChildren) {
            this.toggleNestedNavItems();
        }
        this.select.emit();
    }

    toggleNestedNavItems(): void {
        this.expanded = !this.expanded;
    }
}
