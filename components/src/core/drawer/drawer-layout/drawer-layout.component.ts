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

export type DrawerLayoutVariantType = 'permanent' | 'persistent' | 'temporary' | 'rail';

@Component({
    selector: 'pxb-drawer-layout',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-layout.component.scss'],
    template: `
        <mat-sidenav-container class="pxb-drawer-layout-content" (backdropClick)="closeDrawer()" autosize="false">
            <mat-sidenav
                class="pxb-drawer-layout-sidenav"
                [fixedInViewport]="false"
                [class.pxb-drawer-layout-smooth]="variant !== 'temporary'"
                [class.pxb-drawer-layout-shadow]="!hasSideBorder()"
                [style.width.rem]="isCollapsed() ? getCollapsedWidth() : toRem(width)"
                [mode]="getMode()"
                [opened]="isDrawerVisible()"
            >
                <ng-content select="[pxb-drawer]"></ng-content>
            </mat-sidenav>
            <div
                class="pxb-drawer-layout-nav-content"
                [class.pxb-drawer-layout-smooth]="variant !== 'temporary'"
                [style.marginRight.rem]="isRtl ? getContentMargin() : 0"
                [style.marginLeft.rem]="isRtl ? 0 : getContentMargin()"
            >
                <ng-content select="[pxb-content]"></ng-content>
            </div>
            <div style="display:none; font-size: 1rem" #remElement></div>
        </mat-sidenav-container>
    `,
    host: {
        class: 'pxb-drawer-layout',
    },
})
export class DrawerLayoutComponent extends StateListener implements AfterViewInit, OnChanges {
    @Input() variant: DrawerLayoutVariantType;
    @Input() width = 350;
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

    getMode(): string {
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
        return this.variant === 'rail' && !this.drawerService.isRailCondensed() ?
            3.5 + this.toRem(16) : // Rail (default)
            1.5 + this.toRem(32); //  Rail (condensed) || closed persistent
    }

    // Is the drawer condensed.
    isCollapsed(): boolean {
        if (this.variant === 'rail') return true; // Rail is always collapsed.
        if (this.variant === 'persistent') return !this.isOpen();
        return false;
    }
}
