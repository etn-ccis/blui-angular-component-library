import {
    AfterContentChecked,
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
 * [DrawerNavGroup Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-drawer--readme)
 *
 * A `<blui-drawer-nav-group>` is used inside of the `<blui-drawer-body>` to organize links and content.
 * Each group consists of an (optional) group title and a series of NavItems.
 */
@Component({
    selector: 'blui-drawer-nav-group',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .blui-drawer-nav-group-content .mat-list-base {
                font-weight: 600;
                padding-top: 0;
            }
            .blui-drawer-nav-group-content .blui-drawer-nav-group-title {
                font-weight: 600;
                height: 3rem;
                line-height: 3rem;
                padding: 0 16px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block;
            }
            .blui-drawer-nav-group-content .blui-drawer-nav-group-title-closed {
                visibility: hidden;
            }
        `,
    ],
    template: `
        <div class="blui-drawer-nav-group-content">
            <div
                *ngIf="title"
                class="blui-drawer-nav-group-title mat-overline"
                [class.blui-drawer-nav-group-title-closed]="!isOpen()"
            >
                {{ title }}
            </div>
            <ng-content select="blui-title-content"></ng-content>
            <mat-divider *ngIf="divider"></mat-divider>
            <mat-nav-list>
                <ng-content select="blui-drawer-nav-item"></ng-content>
            </mat-nav-list>
        </div>
    `,
    host: {
        class: 'blui-drawer-nav-group',
    },
})
export class DrawerNavGroupComponent
    extends StateListener
    implements Omit<DrawerNavGroup, 'items'>, AfterContentChecked
{
    /** Whether to show a dividing line below the title */
    @Input() divider = false;
    /** Component to render a group title */
    @Input() title: string;
    @ContentChildren(DrawerNavItemComponent) navItems;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    /** Iterates through top-level NavItem children and sets defaults.
     *  This is ran AfterContentChecked instead of AfterContentInit to account for asynchronously added navigation items.
     * */
    ngAfterContentChecked(): void {
        for (const navItem of this.navItems) {
            if (navItem.depth === undefined) {
                navItem.setNavItemDefaults();
            }
        }
    }
}
