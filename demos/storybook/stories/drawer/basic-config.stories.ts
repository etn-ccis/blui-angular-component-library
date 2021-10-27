import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@brightlayer-ui/angular-components';

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
        <blui-drawer [open]="state.open">
           <blui-drawer-header [title]="drawerTitle">
             <button blui-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </blui-drawer-header>
           <blui-drawer-body>
              <blui-drawer-nav-group>
                   <blui-drawer-nav-item *ngFor="let navItem of navItems"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                  </blui-drawer-nav-item>
              </blui-drawer-nav-group>
           </blui-drawer-body>
        </blui-drawer>
      `,
    props: {
        drawerTitle: text('title', 'Simple Drawer'),
        navItems: navItems,
    },
});
