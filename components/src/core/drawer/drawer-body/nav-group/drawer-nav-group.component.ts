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

export type DrawerNavGroup = {
    divider?: boolean;
    title?: string;
    items: DrawerNavItem[];
};

/**
 * A `<pxb-drawer-nav-group>` is used inside of the `<pxb-drawer-body>` to organize links and content.
 * Each group consists of an (optional) group title and a series of NavItems.
 */
@Component({
    selector: 'pxb-drawer-nav-group',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .pxb-drawer-nav-group-content .mat-list-base {
                font-weight: 600;
                padding-top: 0;
            }
            .pxb-drawer-nav-group-content .pxb-drawer-nav-group-title {
                font-weight: 600;
                height: 3rem;
                line-height: 3rem;
                padding: 0 16px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
            }
            .pxb-drawer-nav-group-content .pxb-drawer-nav-group-title-closed {
                visibility: hidden;
            }
        `,
    ],
    template: `
        <div class="pxb-drawer-nav-group-content">
            <div
                *ngIf="title"
                class="pxb-drawer-nav-group-title mat-overline"
                [class.pxb-drawer-nav-group-title-closed]="!isOpen()"
            >
                {{ title }}
            </div>
            <ng-content select="pxb-title-content"></ng-content>
            <mat-divider *ngIf="divider"></mat-divider>
            <mat-nav-list>
                <ng-content select="pxb-drawer-nav-item"></ng-content>
            </mat-nav-list>
        </div>
    `,
    host: {
        class: 'pxb-drawer-nav-group',
    },
})
export class DrawerNavGroupComponent extends StateListener implements Omit<DrawerNavGroup, 'items'> {
    /** Whether to show a dividing line below the title */
    @Input() divider = false;
    /** Component to render a group title */
    @Input() title: string;
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
