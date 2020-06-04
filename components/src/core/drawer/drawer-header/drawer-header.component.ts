import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import {StateListener} from "../state-listener.component";

@Component({
    selector: 'pxb-drawer-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar class="pxb-drawer-header">
            <div class="pxb-drawer-header-background"></div>
            <div class="pxb-drawer-header-content">
                <div class="pxb-drawer-header-icon-wrapper">
                    <ng-content select="[pxb-icon]"></ng-content>
                </div>
                <div *ngIf="drawerOpen && title" class="pxb-drawer-header-title-wrapper">
                    <div class="pxb-drawer-header-title">{{ title }}</div>
                    <div *ngIf="subtitle" class="pxb-drawer-header-subtitle mat-subheading-2">{{ subtitle }}</div>
                </div>
                <ng-content *ngIf="drawerOpen" select="[titleContent]"></ng-content>
            </div>
        </mat-toolbar>
        <mat-divider></mat-divider>
    `,
    styleUrls: ['./drawer-header.component.scss'],
})
export class DrawerHeaderComponent extends StateListener {
    @Input() subtitle: string;
    @Input() title: string;
    drawerOpen: boolean;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
