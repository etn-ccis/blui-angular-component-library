import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Input,
    OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import { DrawerNavItem, DrawerNavItemComponent } from '../nav-item/drawer-nav-item.component';
import { DrawerStateManagerService, StateListener } from '../../state-listener.component';
import { Subscription } from 'rxjs';

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
            <ng-content select="[blui-title-content]"></ng-content>
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
    implements Omit<DrawerNavGroup, 'items'>, AfterViewInit, OnDestroy
{
    /** Whether to show a dividing line below the title */
    @Input() divider = false;
    /** Component to render a group title */
    @Input() title: string;
    @ContentChildren(DrawerNavItemComponent) navItems;

    navItemLifeCycleListener: Subscription;

    constructor(stateManagerService: DrawerStateManagerService, changeDetectorRef: ChangeDetectorRef) {
        super(stateManagerService, changeDetectorRef);
    }

    /** Whenever a new navigation item is created async or conditionally,
     * re-iterate through the navigation tree to assign the correct depth and top-level or nested state defaults to it. */
    ngAfterViewInit(): void {
        this._initializeNavItemDefaults(0, this.navItems);

        // This is only called for async or conditionally loaded items.
        this.navItemLifeCycleListener = this.drawerState.drawerNewNavItemCreated().subscribe(() => {
            setTimeout(() => {
                this._initializeNavItemDefaults(0, this.navItems);
            });
        });
    }

    ngOnDestroy(): void {
        if (this.navItemLifeCycleListener) {
            this.navItemLifeCycleListener.unsubscribe();
        }
    }

    private _initializeNavItemDefaults(depth: number, navItems: DrawerNavItemComponent[]): void {
        for (const item of navItems) {
            if (item && !item.changeDetectorRef['destroyed']) {
                item.incrementDepth(depth);
                this._initializeNavItemDefaults(depth + 1, item.nestedNavItems);
            }
        }
    }
}
