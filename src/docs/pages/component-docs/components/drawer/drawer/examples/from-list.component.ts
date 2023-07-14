import { Component } from '@angular/core';
import { DrawerNavItem } from 'src/lib/core';
import * as Colors from '@brightlayer-ui/colors';

export const FROM_LIST = `<blui-drawer style="width: 300px; height: 620px; overflow: auto">
    <blui-drawer-header title="Brightlayer UI" subtitle="Drawer Component">
        <button mat-icon-button blui-icon>
            <mat-icon>menu</mat-icon>
        </button>
    </blui-drawer-header>
    <blui-drawer-body>
        <ng-container *ngFor="let navGroup of [group1, group2]; let first = first;">
            <blui-drawer-nav-group [title]="navGroup.title" [divider]="true">
                <blui-drawer-nav-item *ngFor="let navItem of navGroup.items"
                    [title]="navItem.title"
                    [subtitle]="navItem.subtitle"
                    [statusColor]="navItem.statusColor"
                    [selected]="selectedItem === navItem.title"
                    [divider]="true"
                    (select)="setActive(navItem)">
                    <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                    <blui-drawer-nav-item *ngFor="let nestedItem of navItem.items"
                        [title]="nestedItem.title"
                        [selected]="selectedItem === nestedItem.title"
                        (select)="setActive(nestedItem);">       
                    </blui-drawer-nav-item>
                </blui-drawer-nav-item>
             </blui-drawer-nav-group>
            <blui-spacer *ngIf="first"></blui-spacer>
        </ng-container>
    </blui-drawer-body>
</blui-drawer>
`;

type Group = {
    title: string;
    items: DrawerNavItem[];
};

@Component({
    selector: 'app-from-list-drawer-demo',
    template: FROM_LIST,
})
export class FromListComponent {
    selectedItem: string;

    Colors = Colors;

    group1: Group = {
        title: 'Group 1',
        items: [
            {
                title: 'Overview',
                subtitle: 'Learn more about us',
                statusColor: Colors.green[500],
                icon: 'dashboard',
                items: [
                    {
                        title: 'Monthly Report',
                    },
                    {
                        title: 'Annual Report',
                    },
                ],
            },
            {
                title: 'Timeline',
                icon: 'toc',
            },
            {
                title: 'Devices',
                subtitle: '4 new warnings',
                statusColor: Colors.yellow[500],
                icon: 'devices',
            },
            {
                title: 'Schedule',
                icon: 'airport_shuttle',
            },
        ],
    };

    group2 = {
        title: 'Group 2',
        items: [
            {
                title: 'User Guide',
                icon: 'move_to_inbox',
            },
            {
                title: 'License Agreement',
                subtitle: 'For Eaton employees only',
                icon: 'fact_check',
            },
            {
                title: 'Accessibility',
                icon: 'accessibility',
                items: [
                    {
                        title: 'Color Contrast Guide',
                    },
                    {
                        title: 'Screen Reader',
                    },
                ],
            },
            {
                title: 'Notifications',
                icon: 'notifications',
            },
        ],
    };

    setActive(navItem: DrawerNavItem): void {
        this.selectedItem = navItem.title;
    }
}
