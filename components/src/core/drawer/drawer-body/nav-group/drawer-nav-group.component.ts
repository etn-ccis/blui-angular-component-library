import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import { DrawerNavItem, DrawerNavItemComponent } from '../nav-item/drawer-nav-item.component';
import { DrawerService } from '../../service/drawer.service';
import { StateListener } from '../../state-listener.component';

@Component({
    selector: 'pxb-drawer-nav-group',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .pxb-drawer-nav-group .mat-list-base {
                font-weight: 600;
                padding-top: 0;
            }
            .pxb-drawer-nav-group .pxb-drawer-nav-group-title {
                font-weight: 600;
                height: 48px;
                line-height: 48px;
                padding: 0 16px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
            }
            .pxb-drawer-nav-group .pxb-drawer-nav-group-title-closed {
                visibility: hidden;
            }
        `,
    ],
    template: `
        <div class="pxb-drawer-nav-group">
            <div *ngIf="title" class="pxb-drawer-nav-group-title" [class.pxb-drawer-nav-group-title-closed]="!isOpen()">
                {{ title }}
            </div>
            <ng-content select="pxb-title-content"></ng-content>
            <mat-divider *ngIf="divider"></mat-divider>
            <mat-nav-list>
                <ng-content select="pxb-drawer-nav-item"></ng-content>
            </mat-nav-list>
        </div>
    `,
})
export class DrawerNavGroupComponent extends StateListener implements Omit<DrawerNavGroup, 'items'> {
    @Input() title: string;
    @Input() divider = false;
    @ContentChildren(DrawerNavItemComponent) navItems;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    ngAfterContentInit(): void {
        for (const navItem of this.navItems) {
            navItem.setNavItemDefaults();
        }
    }
}

export type DrawerNavGroup = {
    divider?: boolean;
    title?: string;
    items: DrawerNavItem[];
};
