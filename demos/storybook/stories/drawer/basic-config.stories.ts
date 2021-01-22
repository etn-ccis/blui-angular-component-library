import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';

export const navItems: DrawerNavItem[] = [
    {
        title: 'Identity Management',
        icon: 'person',
        onSelect: action('Selected: Identity Management'),
    },
    {
        title: 'Calendar',
        icon: 'today',
        onSelect: action('Selected: Calendar'),
    },
    {
        title: 'Accessibility',
        icon: 'accessibility',
        onSelect: action('Selected: Accessibility'),
    },
    {
        title: 'Notifications',
        icon: 'notifications_active',
        onSelect: action('Selected: Notifications'),
    },
];

export const withBasicConfig = (): any => ({
    template: `
        <pxb-drawer [open]="state.open">
           <pxb-drawer-header [title]="drawerTitle">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </pxb-drawer-header>
           <pxb-drawer-body>
              <pxb-drawer-nav-group>
                   <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                  </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
           </pxb-drawer-body>
        </pxb-drawer>
      `,
    props: {
        drawerTitle: text('title', 'Simple Drawer'),
        navItems: navItems,
    },
});
