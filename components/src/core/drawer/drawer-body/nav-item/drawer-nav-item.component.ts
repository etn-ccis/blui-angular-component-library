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
import {MatExpansionPanel} from "@angular/material/expansion";

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

/**
 * [DrawerNavItem Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-drawer--readme)
 *
 * The `<blui-drawer-nav-item>` is a wrapper to the `<blui-info-list-item>` that is meant to be used within a `<blui-nav-group>`.
 */
@Component({
    selector: 'blui-drawer-nav-item',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-nav-item.component.scss'],
    template: `
        <ng-container *ngIf="!hidden">
            <ng-template #navIcon><ng-content select="[blui-icon]"></ng-content></ng-template>
            <div
                class="blui-drawer-nav-item-content"
                #navItem
                matRipple
                [class.blui-drawer-nav-item-active]="selected"
                [class.blui-drawer-nav-item-compact]="false"
            >
                <div
                    [class.blui-drawer-nav-item-active-highlight]="selected"
                    [class.blui-drawer-nav-item-active-round]="
                        activeItemBackgroundShape === 'round' && isOpen() && !isRail()
                    "
                    [class.blui-drawer-nav-item-active-square]="
                        activeItemBackgroundShape === 'square' || !isOpen() || isRail()
                    "
                ></div>
                <blui-info-list-item
                    *ngIf="!isRail()"
                    (click)="selectItem()"
                    [dense]="true"
                    [statusColor]="statusColor"
                    [chevron]="chevron && isOpen()"
                    [hidePadding]="hidePadding"
                    [divider]="divider ? 'full' : undefined"
                    [class.blui-drawer-nav-item-no-icon-closed]="isEmpty(iconEl) && !isOpen()"
                    [matTooltip]="title"
                    [matTooltipDisabled]="isOpen() || isOpenOnHover() || !showTooltipOnRailHover()"
                    matTooltipPosition="right"
                >
                    <ng-container blui-icon #icon>
                        <ng-container *ngTemplateOutlet="navIcon"></ng-container>
                    </ng-container>
                    <div
                        blui-title
                        [class.blui-drawer-nav-item-depth-1]="depth === 1"
                        [class.blui-drawer-nav-item-depth-2]="depth === 2"
                        [class.blui-drawer-nav-item-depth-3]="depth === 3"
                    >
                        {{ title }}
                    </div>
                    <div blui-subtitle>{{ subtitle }}</div>
                    <div blui-right-content *ngIf="hasChildren && isOpen()">
                        <div #expandIcon *ngIf="!expanded">
                            <ng-content select="[blui-expand-icon]"></ng-content>
                        </div>
                        <div #collapseIcon *ngIf="expanded">
                            <ng-content select="[blui-collapse-icon]"></ng-content>
                        </div>
                        <mat-icon
                            *ngIf="isEmpty(collapseIconEl) && isEmpty(expandIconEl)"
                            class="blui-drawer-nav-item-expand-icon"
                            [class.blui-drawer-nav-item-expanded]="expanded"
                            >{{ depth > 1 ? 'arrow_drop_down' : 'expand_more' }}</mat-icon
                        >
                    </div>
                </blui-info-list-item>
                <div class="blui-drawer-nav-item-rail-container" *ngIf="isRail()">
                    <div
                        (click)="selectItem()"
                        class="blui-drawer-nav-item-rail"
                        [matTooltip]="showTooltipOnRailHover() ? title : ''"
                        [matTooltipDisabled]="!isRailCondensed()"
                        matTooltipPosition="right"
                    >
                        <ng-container *ngTemplateOutlet="navIcon"></ng-container>
                        <div class="blui-drawer-nav-item-rail-text">{{ title }}</div>
                    </div>
                    <mat-divider *ngIf="divider"></mat-divider>
                </div>
            </div>
            <!-- Nested Nav Items -->
            <mat-accordion displayMode="flat" class="blui-drawer-nested-nav-item" *ngIf="!isRail()">
                <mat-expansion-panel #matExpansionPanel>
                    <ng-content select="blui-drawer-nav-item"></ng-content>
                </mat-expansion-panel>
            </mat-accordion>
        </ng-container>
    `,
    host: {
        class: 'blui-drawer-nav-item',
    },
})
export class DrawerNavItemComponent extends StateListener implements Omit<DrawerNavItem, 'items'> {
    /** Sets the active item background shape
     *
     * `square` - Background shape takes the entire height of width of the NavItem.
     * `round` - Background shape has a rounded corner towards the end of the NavItem.
     *
     * @default square
     * */
    @Input() activeItemBackgroundShape: ActiveItemBackgroundShape = 'square';
    /** Sets whether to show a chevron icon on the left side of a `NavItem`
     *
     * @default false
     * */
    @Input() chevron = false;
    /** Whether to show a dividing line below each NavItem
     *
     * @default false
     * */
    @Input() divider = false;
    /** Sets whether to show nested nav items
     *
     * @default false
     * */
    @Input() expanded = false;
    /** Sets whether to show/hide padding whenever a NavItem does not have an icon */
    @Input() hidePadding: boolean;
    /** Sets whether to hide the nav item
     *
     * @default false
     * */
    @Input() hidden = false;
    /** Sets whether to show/hide Angular ripple animation effect onClick
     *
     * @default true
     * */
    @Input() ripple = true;
    /** Sets whether an item is selected.  A selected item will have the `activeBackgroundShape` applied to it and appear different from all other NavItems.*/
    @Input() selected: boolean;
    /** Left border color */
    @Input() statusColor: string;
    /** Text to display as a subtitle */
    @Input() subtitle: string;
    /** Text to display as a title */
    @Input() title: string;

    /** Event triggered on nav item select */
    @Output() select: EventEmitter<string> = new EventEmitter<string>();

    @ContentChildren(DrawerNavItemComponent, { descendants: false }) nestedNavItems;
    @ViewChild('expandIcon') expandIconEl: ElementRef;
    @ViewChild('icon') iconEl: ElementRef;
    @ViewChild('collapseIcon') collapseIconEl: ElementRef;
    @ViewChild('navItem') navItemEl: ElementRef;
    @ViewChild('matExpansionPanel') matExpansionPanel: MatExpansionPanel;

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
        if (changes.expanded !== undefined && !changes.expanded.isFirstChange() && this.matExpansionPanel) {
            this.handleExpand();
        }
    }

    ngAfterViewInit(): void {
        this.handleExpand();
    }

    handleExpand(): void {
        console.log('clad');
        setTimeout(() => {
            this.changeDetector.detectChanges();
            console.log(this.expanded);
            this.expanded ?  this.matExpansionPanel.open() : this.matExpansionPanel.close();
            this.changeDetector.detectChanges();
        });
    }

    isRail(): boolean {
        return this.drawerService.getDrawerVariant() === 'rail';
    }

    isRailCondensed(): boolean {
        return this.drawerService.isRailCondensed();
    }

    showTooltipOnRailHover(): boolean {
        return !this.drawerService.isDisableRailTooltip();
    }

    /** Whenever the selected item in the drawer state changes, we need to check to see we should apply a hierarchical highlight. */
    manageActiveItemTreeHighlight(): void {
        if (!this.navItemEl) {
            return;
        }

        this.navItemEl.nativeElement.classList.remove('blui-drawer-nav-item-active-tree');

        if (this.drawerService.hasDisableActiveItemParentStyles()) {
            return;
        }

        // Add tree highlighting for selected items
        if (this.selected && this.depth > 1) {
            let parent = this.navItemEl.nativeElement.parentNode;
            while (parent.parentNode) {
                parent = parent.parentNode;
                const navItem = parent.firstElementChild;
                if (navItem.classList.contains('blui-drawer-nav-item-content')) {
                    navItem.classList.add('blui-drawer-nav-item-active-tree');
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

    /** Sets default state values for non-nested nav items. */
    setNavItemDefaults(): void {
        if (this.divider === undefined) this.divider = true;
        if (this.hidePadding === undefined) this.hidePadding = true;
        this.incrementDepth(0);
    }

    /** Sets default state values for nested nav items. */
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
        this.handleExpand();
    }
}
