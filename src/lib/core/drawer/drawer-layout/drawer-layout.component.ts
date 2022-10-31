import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    ViewChild,
    ViewEncapsulation,
    SimpleChanges,
    ContentChild,
} from '@angular/core';
import { DrawerStateManagerService, StateListener } from '../state-listener.component';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';
import { DrawerComponent } from '../drawer.component';

export type DrawerLayoutVariantType = 'permanent' | 'persistent' | 'temporary' | 'rail';

/**
 * [DrawerLayout Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-drawer--readme)
 *
 * The `<blui-drawer-layout>` component is a wrapper around the [Angular Material Sidenav](https://material.angular.io/components/sidenav/overview) that adds specific Brightlayer UI functionality and styling.
 * The `<blui-drawer-layout>` component is used to provide the appropriate resizing behavior for your main application content when used in conjunction with a Brightlayer UI `<blui-drawer>`.
 * It accepts a drawer and content as child elements;
 */
@Component({
    selector: 'blui-drawer-layout',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-layout.component.scss'],
    template: `
        <mat-sidenav-container class="blui-drawer-layout-content" (backdropClick)="closeDrawer()" autosize="false">
            <mat-sidenav
                class="blui-drawer-layout-sidenav"
                [fixedInViewport]="false"
                [class.blui-drawer-layout-smooth]="variant !== 'temporary'"
                [class.mat-elevation-z6]="!hasSideBorder()"
                [style.width.rem]="isCollapsed() ? getCollapsedWidth() : toRem(width)"
                [mode]="getMode()"
                [disableClose]="true"
                [opened]="isDrawerVisible()"
            >
                <ng-content select="[blui-drawer]"></ng-content>
            </mat-sidenav>
            <div
                class="blui-drawer-layout-nav-content"
                [class.blui-drawer-layout-smooth]="variant !== 'temporary'"
                [style.marginRight.rem]="isRtl ? getContentMargin() : 0"
                [style.marginLeft.rem]="isRtl ? 0 : getContentMargin()"
            >
                <ng-content select="[blui-content]"></ng-content>
            </div>
            <div style="display:none; font-size: 1rem" #remElement></div>
        </mat-sidenav-container>
    `,
    host: {
        class: 'blui-drawer-layout',
    },
})
export class DrawerLayoutComponent extends StateListener implements AfterViewInit, OnChanges {
    /** Controls how the Drawer behaves and appears on the screen.  Can be `permanent` | `peristent` | `temporary` | `rail`.
     *
     * `permanent` - `Drawer` appears on the side of the screen and cannot be dismissed.
     *
     * `persistent` - `Drawer` appears on the side of the screen and responds to the `open` @Input. When closed, only shows each `NavItem` icon.
     *
     * `temporary` - `Drawer` slides in from the side of the screen and appears as an overlay.
     *
     * `rail` - `Drawer` appears on the side of the screen as a slim element, supporting icons and text.
     *
     * @default temporary
     * */
    @Input() variant: DrawerLayoutVariantType = 'temporary';
    /** Drawer pixel width
     *
     * @default 350
     * */
    @Input() width = 350;
    /** Event triggered on 'temporary' variant backdrop click */
    @Output() backdropClick: EventEmitter<void> = new EventEmitter();
    @ViewChild('remElement') remElement: ElementRef;

    isRtl = false;

    /** This is true whenever the drawer is in a collapsed state & its variant has been transitioned to temporary. */
    hasCollapsedTransitionToTemporary = false;

    remSizePx: number;
    dirChangeSubscription = Subscription.EMPTY;

    /** This is the immediate drawer child. */
    @ContentChild(DrawerComponent) drawer: DrawerComponent;

    /** Whenever there is not an immediate drawer child (nested content), listen for new state instance created. */
    drawerInstanceCreatedListener: Subscription;

    content: HTMLElement;

    constructor(
        stateManagerService: DrawerStateManagerService,
        changeDetectorRef: ChangeDetectorRef,
        private readonly _dir: Directionality
    ) {
        // The DrawerState that is created by the DrawerStateManagerService is temporary & replaced by the DrawerState found by its Drawer child.
        super(stateManagerService, changeDetectorRef, true);
        this.drawerInstanceCreatedListener = stateManagerService.newStateInstanceSubject.subscribe((drawerState) => {
            // If there is no immediate drawer child, listen for a drawer state creation event and use that state.
            if (!this.drawer) {
                this.drawerState = drawerState;
                this.drawerState.setDrawerVariant(this.variant);
                this.drawerInstanceCreatedListener.unsubscribe();
            }
        });
        this.dirChangeSubscription = _dir.change.subscribe((direction: Direction) => {
            this.isRtl = direction === 'rtl';
            changeDetectorRef.detectChanges();
        });
    }

    ngAfterViewInit(): void {
        this.isRtl = this._dir.value === 'rtl';
        // Drawer Layout attempts to get its DrawerState instance from its immediate DrawerComponent child.
        if (this.drawer) {
            this.drawerState = this.drawer.drawerState;
            this.drawerState.setDrawerVariant(this.variant);
            this.changeDetector.detectChanges();
        }
    }

    ngOnChanges(simpleChanges: SimpleChanges): void {
        if (this.drawerState) {
            this.drawerState.setDrawerVariant(this.variant);
        }

        // Whenever a drawer has transitioned from a closed persistent drawer to a temporary variant,
        // this edge case prevents the drawer from being redrawn at an opened size before it dismissed.
        if (simpleChanges && simpleChanges.variant) {
            const variant = simpleChanges.variant;
            if (
                variant.currentValue === 'temporary' &&
                (variant.previousValue === 'rail' || (variant.previousValue === 'persistent' && !this.isOpen()))
            ) {
                this.hasCollapsedTransitionToTemporary = true;
                setTimeout(() => {
                    this.hasCollapsedTransitionToTemporary = false;
                }, 500);
            }
        }

        this.changeDetector.detectChanges();
    }

    ngOnDestroy(): void {
        this.unsubscribeListeners();
        this.dirChangeSubscription.unsubscribe();
        if (this.drawerInstanceCreatedListener) {
            this.drawerInstanceCreatedListener.unsubscribe();
        }
    }

    getMode(): MatDrawerMode {
        return this.variant === 'temporary' ? 'over' : 'side';
    }

    toRem(px: number): number {
        if (this.remElement && this.remElement.nativeElement) {
            const style = getComputedStyle(this.remElement.nativeElement);
            this.remSizePx = Number(style.fontSize.split('px')[0]);
        }
        return px / (this.remSizePx || 16);
    }

    hasSideBorder(): boolean {
        return this.drawerState.hasSideBorder();
    }

    closeDrawer(): void {
        this.drawerState.setDrawerOpen(false);
        this.backdropClick.emit();
    }

    // Is the drawer seen on the screen and expanded.
    isDrawerVisible(): boolean {
        if (this.variant === 'temporary') return this.isOpen();
        return true;
    }

    getContentMargin(): number {
        if (this.variant === 'temporary') {
            return 0;
        }
        return this.isCollapsed() ? this.getCollapsedWidth() : this.toRem(this.width);
    }

    getCollapsedWidth(): number {
        return this.variant === 'rail' && !this.drawerState.isRailCondensed()
            ? 3.5 + this.toRem(16) // Rail (default)
            : 1.5 + this.toRem(32); //  Rail (condensed) || closed persistent
    }

    // Is the drawer condensed.
    isCollapsed(): boolean {
        if (this.variant === 'rail') return true; // Rail is always collapsed.
        if (this.variant === 'persistent') return !this.isOpen();
        if (this.hasCollapsedTransitionToTemporary) return true;
        return false;
    }
}
