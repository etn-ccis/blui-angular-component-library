import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { DrawerStateManagerService, StateListener } from './state-listener.component';
import { Subscription } from 'rxjs';

/**
 * [Drawer Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-drawer--readme)
 *
 * The `<blui-drawer>` is used to organize content (typically navigation links) within a `<blui-drawer-layout>`.
 * The `<blui-drawer>` includes helper components for `<blui-drawer-header>`, `<blui-drawer-subheader>`, `<blui-drawer-body>`, `<blui-drawer-nav-group>`, `<blui-drawer-footer>`, and `<blui-drawer-layout>` to help organize the content.
 */
@Component({
    selector: 'blui-drawer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div
            class="blui-drawer-content"
            [class.blui-drawer-side-border]="sideBorder"
            [class.mat-elevation-z6]="!sideBorder"
            [class.blui-drawer-condensed-rail]="condensed"
            [class.blui-drawer-collapse]="!isOpen()"
            [class.blui-drawer-temp-variant]="isTemporaryVariant()"
        >
            <!-- Drawer is responsible for managing the styles between the 4 subsections -->
            <ng-content select="blui-drawer-header"></ng-content>
            <div class="blui-drawer-hover-area" (mouseenter)="hoverDrawer()" (mouseleave)="unhoverDrawer()">
                <ng-content select="blui-drawer-subheader"></ng-content>
                <ng-content select="blui-drawer-body"></ng-content>
                <ng-content select="blui-drawer-footer"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer.component.scss'],
    host: {
        class: 'blui-drawer',
    },
})
export class DrawerComponent extends StateListener implements OnInit, OnChanges {
    /** Enables a condensed view for the `rail` variant which removes NavItem labels and shows tooltips instead
     *
     * @default false
     * */
    @Input() condensed = false;
    /** Hides tooltips on hover for the `rail` variant
     *
     * @default false
     * */
    @Input() disableRailTooltip = false;
    /** If true, NavItems will not have a bold title when a child NavItem is selected
     *
     * @default false
     * */
    @Input() disableActiveItemParentStyles = false;
    /** State for the drawer */
    @Input() open = true;
    /** Automatically open the drawer on hover when closed (persistent variant only) */
    @Input() openOnHover = true;
    /** Delay in milliseconds before a hover event opens the drawer (persistent variant only)
     *
     * @default 500
     * */
    @Input() openOnHoverDelay = 500;
    /** Toggle a side border instead of shadow
     *
     * @default false
     * */
    @Input() sideBorder = false;

    hoverDelayTimeout: any;
    drawerSelectionListener: Subscription;

    /** Drawer component instantiates a new DrawerState object when it is constructed. */
    constructor(stateManagerService: DrawerStateManagerService, changeDetectorRef: ChangeDetectorRef) {
        super(stateManagerService, changeDetectorRef, true);
    }

    ngOnInit(): void {
        this.drawerState.setDrawerOpen(this.open);
        this.listenForDrawerChanges();
        this.listenForDrawerSelection();
    }

    // This broadcasts changes to all of the drawer state listeners.
    ngOnChanges(): void {
        this.drawerState.setSideBorder(this.sideBorder);
        this.drawerState.setDrawerOpen(this.open);
        this.drawerState.setIsCondensed(this.condensed);
        this.drawerState.setDisableRailTooltip(this.disableRailTooltip);
        this.drawerState.setDisableActiveItemParentStyles(this.disableActiveItemParentStyles);
        this.drawerState.setOpenOnHover(this.openOnHover);
    }

    hoverDrawer(): void {
        if (!this.open && this.openOnHover) {
            this.hoverDelayTimeout = setTimeout(() => {
                this.drawerState.setDrawerTempOpen(true);
                this.changeDetector.detectChanges();
            }, this.openOnHoverDelay);
        }
    }

    unhoverDrawer(): void {
        if (this.openOnHover) {
            clearTimeout(this.hoverDelayTimeout);
            if (this.drawerState.isTempOpen()) {
                this.drawerState.setDrawerTempOpen(false);
                this.changeDetector.detectChanges();
            }
        }
    }

    // Close drawer on selection if drawer is only temporarily opened.
    // Expanding nested navitems when temporarily opened will not close the drawer.
    listenForDrawerSelection(): void {
        this.drawerSelectionListener = this.drawerState.drawerSelectionChanges().subscribe((hasChildren) => {
            if (this.drawerState.isTempOpen() && !hasChildren) {
                this.drawerState.setDrawerTempOpen(false);
                this.changeDetector.detectChanges();
            }
        });
    }

    isTemporaryVariant(): boolean {
        return this.drawerState.getDrawerVariant() === 'temporary';
    }
}
