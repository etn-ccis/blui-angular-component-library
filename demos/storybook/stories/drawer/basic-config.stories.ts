import * as Colors from '@pxblue/colors';
import { boolean, text } from '@storybook/addon-knobs';

let active: string;

const testClick = (str: string): void => {
  // eslint-disable-next-line no-console
  console.log(str, 'clicked...');
};

const navItems = [
  { title: 'Identity Management', icon: 'perm_identity', itemID: '1', onClick: (): void => testClick('Identity Management') },
  { title: 'Calender', icon: 'today', itemID: '2', onClick: (): void => testClick('Calendar') },
  { title: 'Accessibility', icon: 'accessibility', itemID: '3', onClick: (): void => testClick('Accessibility') },
  { title: 'Notifications', icon: 'notifications_active', itemID: '4', onClick: (): void => testClick('Notifications') }
];

const setActive = (id: string): void => {
  active = id;
}

export const withBasicConfig = (): any => ({
  styles: [
    `
        ::ng-deep .pxb-drawer {
            width: 350px !important;
            background-color: #ffffff !important;
        }

        ::ng-deep pxb-drawer-header .pxb-drawer-header {
            background-color: ${Colors.blue[500]}!important;
            color: #ffffff !important;
        }
    `,
  ],
  template: `
        <pxb-drawer variant="persistent" [drawerOpen]=drawerOpen>
          <pxb-drawer-header [title]="drawerTitle" [drawerOpen]="drawerOpen">
            <mat-icon icon style="display: flex; padding-right: 32px;">menu</mat-icon>
          </pxb-drawer-header>
          <pxb-drawer-body>
              <pxb-drawer-nav-item
                *ngFor="let navItem of navItems;"
                [title]="navItem.title"
                [selected]="active === navItem.itemID"
                (click)="navItem.onClick(); setActive(navItem.itemID);"
                >
                <mat-icon icon>{{ navItem.icon }}</mat-icon>
              </pxb-drawer-nav-item>
            </pxb-drawer-body>
        </pxb-drawer>
      `,
  props: {
    drawerOpen: boolean('open', true),
    drawerTitle: text('title', 'Simple Drawer'),
    navItems: navItems,
    setActive: setActive,
    active: active
  },
});




