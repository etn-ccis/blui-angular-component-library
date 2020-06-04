import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { DrawerNavItem } from '../nav-item/drawer-nav-item.component';
import { DrawerService } from '../../service/drawer.service';
import {StateListener} from "../../state-listener.component";

@Component({
    selector: 'pxb-drawer-nav-group',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .pxb-drawer-nav-group .mat-list-base {
                height: 48px;
                line-height: 3rem;
                font-weight: 600;
                padding-top: 0;
            }
        `,
    ],
    template: `
        <div class="pxb-drawer-nav-group">
            <mat-list>
                <mat-list-item class="pxb-drawer-nav-group-title" *ngIf="drawerOpen">{{ title }}</mat-list-item>
            </mat-list>
            <mat-divider></mat-divider>
            <ng-content select="pxb-drawer-nav-item"></ng-content>
        </div>
    `,
})
export class DrawerNavGroupComponent extends StateListener {
    @Input() title: string;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}

export type DrawerNavGroup = {
    title: string;
    items: DrawerNavItem[];
};
