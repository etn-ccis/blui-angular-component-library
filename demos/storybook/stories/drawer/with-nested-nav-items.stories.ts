import {action} from "@storybook/addon-actions";
import { DrawerNavItem } from '@pxblue/angular-components';


export const nestedNavGroup: DrawerNavItem[] = [
    {
        title: 'Identity Management',
        icon: 'perm_identity',
        itemID: 'group1_item1',
        onSelect: action('Selected: Identity Management'),
        items: [
            {
                title: 'History',
                itemID: 'nested_item1',
                onSelect: action('Selected: History'),
            },
            {
                title: 'Permissions',
                itemID: 'nested_item2',
                onSelect: action('Selected: Permissions'),
            },
            {
                title: 'Settings',
                itemID: 'nested_item3',
                onSelect: action('Selected: Settings'),
            }
        ]
    },
    {
        title: 'Notifications',
        icon: 'notifications_active',
        itemID: 'group1_item4',
        onSelect: action('Selected: Notifications'),
    },
];

export const withNestedNavItems = (): any => ({
    template: `
        <pxb-drawer [open]="state.open">
           <pxb-drawer-header title="PX Blue Drawer" subtitle="with nested nav items">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </pxb-drawer-header>
           <pxb-drawer-body>
              <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                [title]="navItem.title"
                [itemID]="navItem.itemID"
                [selected]="state.selected === navItem.itemID"
                (select)="navItem.onSelect(); setActive(navItem, state);">
                <mat-icon icon>{{ navItem.icon }}</mat-icon>
                    <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items"
                    [title]="nestedItem.title"
                    [itemID]="nestedItem.itemID"
                    [selected]="state.selected === nestedItem.itemID"
                    (select)="nestedItem.onSelect(); setActive(nestedItem, state);">
                </pxb-drawer-nav-item>
              </pxb-drawer-nav-item>
           </pxb-drawer-body>
        </pxb-drawer>
      `,
    props: {
        navItems: nestedNavGroup,
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            if (!item.items) { // Only selects items that do not have nested nav items.
                state.selected = item.itemID;
            }
        },
    },
});
