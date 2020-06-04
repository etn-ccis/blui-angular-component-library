import {boolean, text} from '@storybook/addon-knobs';
import {action} from "@storybook/addon-actions";

export const navItems = [
  { title: 'Identity Management', icon: 'perm_identity', itemID: '1', onClick: action('Selected: Identity Management') },
  { title: 'Calender', icon: 'today', itemID: '2', onClick: action('Selected: Calendar') },
  { title: 'Accessibility', icon: 'accessibility', itemID: '3', onClick: action('Selected: Accessibility') },
  { title: 'Notifications', icon: 'notifications_active', itemID: '4', onClick: action('Selected: Notifications') }
];

export const withBasicConfig = (): any => ({
  template: `
        <pxb-drawer [open]="state.open">
          <pxb-drawer-header [title]="drawerTitle">
          <button pxb-icon mat-icon-button style="margin-right: 32px;" (click)="toggleDrawer(state)">
            <mat-icon>menu</mat-icon>
          </button>
          </pxb-drawer-header>
          <pxb-drawer-body>
              <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                [title]="navItem.title"
                [selected]="state.selected === navItem.itemID"
                (click)="navItem.onClick(); setActive(navItem.itemID, state);">
                <mat-icon icon>{{ navItem.icon }}</mat-icon>
              </pxb-drawer-nav-item>
            </pxb-drawer-body>
        </pxb-drawer>
      `,
  props: {
    drawerTitle: text('title', 'Simple Drawer'),
    navItems: navItems,
  },
});




