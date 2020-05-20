import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { DrawerNavItem } from '../drawer-nav-item/public-api';
import { DrawerService } from '../drawer.service';

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
export class DrawerNavGroupComponent implements OnInit {
    @Input() title: string;
    drawerOpen: boolean;

    constructor(public drawerService: DrawerService, private readonly changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.drawerOpen = this.drawerService.getDrawerOpen();
        this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
            this.drawerOpen = res;
            this.changeDetector.detectChanges();
        });
    }
}

export type DrawerNavGroup = {
    title: string;
    items: DrawerNavItem[];
};
