import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';

export type DrawerLayoutVariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer-layout',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-layout.component.scss'],
    template: `
        <mat-sidenav-container class="pxb-drawer-layout" (backdropClick)="closeDrawer()">
            <mat-sidenav
                class="pxb-drawer-layout-sidenav"
                [fixedInViewport]="true"
                [class.smooth]="variant !== 'temporary'"
                [style.width.px]="isCollapsed() ? 56 : width"
                [mode]="getMode()"
                [opened]="isDrawerVisible()"
            >
                <ng-content select="[pxb-drawer]"></ng-content>
            </mat-sidenav>
            <mat-sidenav-content
                class="pxb-drawer-layout-nav-content"
                [class.smooth]="variant !== 'temporary'"
                [style.marginRight.px]="isRtl ? getContentMargin() : 0"
                [style.marginLeft.px]="isRtl ? 0 : getContentMargin()"
            >
                <ng-content select="[pxb-content]"></ng-content>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
})
export class DrawerLayoutComponent extends StateListener implements AfterViewInit {
    @Input() variant: DrawerLayoutVariantType;
    @Input() width = 350;
    @Output() backdropClick: EventEmitter<void> = new EventEmitter();

    isRtl = false;
    dirChangeSubscription = Subscription.EMPTY;

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
    }

    ngOnDestroy(): void {
        this.unsubscribeListeners();
        this.dirChangeSubscription.unsubscribe();
    }

    getMode(): string {
        return this.variant === 'temporary' ? 'over' : 'side';
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
        return this.isCollapsed() ? 56 : this.width;
    }

    // Is the drawer condensed.
    isCollapsed(): boolean {
        if (this.variant === 'persistent') return !this.isOpen();
        return false;
    }
}
