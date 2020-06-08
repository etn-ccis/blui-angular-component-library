import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';

export const nestedNavGroup: DrawerNavItem[] = [
    {
        title: 'Identity Management',
        icon: 'perm_identity',
        onSelect: action('Selected: Identity Management'),
        items: [
            {
                title: 'History',
                onSelect: action('Selected: History'),
            },
            {
                title: 'Permissions',
                onSelect: action('Selected: Permissions'),
                items: [
                    {
                        title: 'View',
                        onSelect: action('Selected: View'),
                    },
                    {
                        title: 'Request',
                        onSelect: action('Selected: Request'),
                    },
                ],
            },
            {
                title: 'Settings',
                onSelect: action('Selected: Settings'),
            },
        ],
    },
    {
        title: 'Notifications',
        icon: 'notifications_active',
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
              <pxb-drawer-nav-group>
                  <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                     [title]="navItem.title"
                     [selected]="state.selected === navItem.title"
                     (select)="navItem.onSelect(); setActive(navItem, state);">
                     <mat-icon icon>{{ navItem.icon }}</mat-icon>
                     <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items"
                       [title]="nestedItem.title"
                       [selected]="state.selected === nestedItem.title"
                       (select)="nestedItem.onSelect(); setActive(nestedItem, state);">
                        <pxb-drawer-nav-item *ngFor="let deepItem of nestedItem.items"
                           [title]="deepItem.title"
                           [selected]="state.selected === deepItem.title"
                           (select)="deepItem.onSelect(); setActive(deepItem, state);">
                         </pxb-drawer-nav-item>
                     </pxb-drawer-nav-item>
                  </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
           </pxb-drawer-body>
        </pxb-drawer>
      `,
    props: {
        navItems: nestedNavGroup,
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            if (!item.items) {
                // Only selects items that do not have nested nav items.
                state.selected = item.title;
            }
        },
    },
});
