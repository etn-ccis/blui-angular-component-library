import {ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core';
import {DrawerService} from '../service/drawer.service';
import {StateListener} from '../state-listener.component';

export type DrawerLayoutVariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer-layout',
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-sidenav-container class="pxb-drawer-layout" (backdropClick)="closeDrawer()" autosize>
            <mat-sidenav [mode]="getMode()" [opened]="isOpen()" [class.pxb-drawer-layout-collapse]="!drawerOpen">
                <ng-content select="pxb-drawer"></ng-content>
            </mat-sidenav>
            <mat-sidenav-content>
                <ng-content select="[content]"></ng-content>
            </mat-sidenav-content>
        </mat-sidenav-container>
        <!--
        <div class="pxb-drawer-layout">
            <mat-sidenav-container class="pxb-side-nav-container" (backdropClick)="closeDrawer()" autosize>
                <mat-sidenav
                    [mode]="variant === 'temporary' ? 'over' : 'side'"
                    class="px-blue-side-nav"
                    [class.pxb-drawer-permanent]="variant === 'permanent'"
                    [class.pxb-drawer-persistent]="variant === 'persistent'"
                    [class.pxb-drawer-temporary]="variant === 'temporary'"
                    [ngClass]="[isOpen() ? 'pxb-drawer-open' : 'pxb-drawer-closed']"
                    [opened]="isOpen()"
                >
                    <ng-content select="[drawer]"></ng-content>
                </mat-sidenav>
                <mat-sidenav-content class="pxb-nav-content">
                    <ng-content select="[content]"></ng-content>
                </mat-sidenav-content>
            </mat-sidenav-container>
        </div>
        -->
    `,
    styleUrls: ['./drawer-layout.component.scss'],
})
export class DrawerLayoutComponent extends StateListener {
    @Input() variant: DrawerLayoutVariantType;
    drawerOpen: boolean;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    getMode(): string {
        if (this.variant === 'temporary') {
            return 'push';
        } else {
            return 'side';
        }
    }

    closeDrawer(): void {
        this.drawerService.setDrawerOpen(false);
    }

    isOpen(): boolean {
        return this.variant === 'permanent' || (this.variant === 'temporary' ? this.drawerOpen : true);
    }
}
