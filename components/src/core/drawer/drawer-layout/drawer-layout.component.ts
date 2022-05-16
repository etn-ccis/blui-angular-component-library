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
} from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';
import {MatDrawerMode} from "@angular/material/sidenav";

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
    remSizePx: number;
    dirChangeSubscription = Subscription.EMPTY;

    content: HTMLElement;

    constructor(
        drawerService: DrawerService,
        changeDetectorRef: ChangeDetectorRef,
        private readonly _dir: Directionality
    ) {
        super(drawerService, changeDetectorRef);
        this.dirChangeSubscription = _dir.change.subscribe((direction: Direction) => {
            this.isRtl = direction === 'rtl';
            changeDetectorRef.detectChanges();
        });
    }

    ngAfterViewInit(): void {
        this.isRtl = this._dir.value === 'rtl';
    }

    ngOnChanges(): void {
        this.drawerService.setDrawerVariant(this.variant);
        this.changeDetector.detectChanges();
    }

    ngOnDestroy(): void {
        this.unsubscribeListeners();
        this.dirChangeSubscription.unsubscribe();
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
        return this.drawerService.hasSideBorder();
    }

    closeDrawer(): void {
        this.drawerService.setDrawerOpen(false);
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
        return this.variant === 'rail' && !this.drawerService.isRailCondensed()
            ? 3.5 + this.toRem(16) // Rail (default)
            : 1.5 + this.toRem(32); //  Rail (condensed) || closed persistent
    }

    // Is the drawer condensed.
    isCollapsed(): boolean {
        if (this.variant === 'rail') return true; // Rail is always collapsed.
        if (this.variant === 'persistent') return !this.isOpen();
        return false;
    }
}
