import { Component, ViewEncapsulation } from '@angular/core';
import * as PXBColors from '@pxblue/colors';
import { DrawerNavItem, DrawerNavGroup } from '@pxblue/angular-components';

@Component({
    selector: 'showcase-drawer',
    template: `
        <pxb-drawer>
            <pxb-drawer-header
                title="PX Blue Drawer"
                subtitle="Organize your menu items here"
                class="test-background-image"
            >
                <button
                    mat-icon-button
                    icon
                    style="margin-right: 24px; margin-left: -8px;"
                >
                    <mat-icon>menu</mat-icon>
                </button>
            </pxb-drawer-header>

            <pxb-drawer-subheader>
                Subheader goes here
            </pxb-drawer-subheader>

            <pxb-drawer-body>
                <pxb-drawer-nav-group *ngFor="let navGroup of navGroups" [title]="navGroup.title">
                    <pxb-drawer-nav-item
                        *ngFor="let navItem of navGroup.items"
                        [title]="navItem.title"
                        [subtitle]="navItem.subtitle"
                        [statusColor]="navItem.statusColor"
                    >
                        <mat-icon icon>{{ navItem.icon }}</mat-icon>
                        <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items" [title]="nestedItem.title"></pxb-drawer-nav-item>
                    </pxb-drawer-nav-item>
                </pxb-drawer-nav-group>
            </pxb-drawer-body>

            <pxb-drawer-footer>
                Footer Goes Here
            </pxb-drawer-footer>
        </pxb-drawer>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent {
    colors = PXBColors;


  nestedItems: DrawerNavItem[] = [
    { title: 'Sub 1' },
    { title: 'Sub 2' }
  ];

    navGroup1: DrawerNavItem[] = [
        { title: 'DrawerNavItem 1', subtitle: 'Subtitle 1', statusColor: PXBColors.red[500], icon: 'home', items: this.nestedItems },
        { title: 'DrawerNavItem 2', subtitle: 'Subtitle 2', statusColor: PXBColors.blue[500], icon: 'help' },
    ];

    navGroup2: DrawerNavItem[] = [
        { title: 'DrawerNavItem 3', subtitle: 'Subtitle 3', statusColor: PXBColors.green[500], icon: 'work' },
        { title: 'DrawerNavItem 4', subtitle: 'Subtitle 4', statusColor: PXBColors.gray[500], icon: 'work' },
    ];

    navGroups: DrawerNavGroup[] = [
        {
            title: 'First NavGroup',
            items: this.navGroup1,
        },
        { title: 'Second NavGroup', items: this.navGroup2 },
    ];
}
