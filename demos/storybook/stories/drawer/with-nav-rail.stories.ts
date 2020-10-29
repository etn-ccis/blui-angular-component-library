import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';
import { boolean } from '@storybook/addon-knobs';
const headerImg = require('../../assets/eaton-condensed.png');

export const navItems: DrawerNavItem[] = [
    {
        title: 'Overview',
        icon: 'home',
        onSelect: action('Selected: Overview'),
    },
    {
        title: 'Alarms',
        icon: 'notifications_active',
        onSelect: action('Selected: Alarms'),
    },
    {
        title: 'Settings',
        icon: 'settings',
        onSelect: action('Selected: Settings'),
    },
    {
        title: 'Device Settings',
        icon: 'settings_applications',
        onSelect: action('Selected: Device Settings'),
    },
];

export const withNavRail = (): any => ({
    styles: [
        `::ng-deep .pxb-drawer .pxb-drawer-header {
          background-color: unset!important;
       }`,
    ],
    template: `
        <pxb-drawer-layout variant="rail">
            <pxb-drawer pxb-drawer [condensed]="condensed">
               <pxb-drawer-body>
                  <pxb-drawer-nav-group>
                       <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                        [title]="navItem.title"
                        [divider]="divider"
                        [selected]="state.selected === navItem.title"
                        (select)="navItem.onSelect(); setActive(navItem.title, state);">
                        <mat-icon pxb-icon>{{ navItem.icon }}</mat-icon>
                      </pxb-drawer-nav-item>
                  </pxb-drawer-nav-group>
               </pxb-drawer-body>
                <pxb-drawer-footer>
                    <div style="height: 56px; display: flex; align-items: center;">
                        <img [src]="headerImg" width="100%"/>
                    </div>
                </pxb-drawer-footer>
            </pxb-drawer>
        </pxb-drawer-layout>
      `,
    props: {
        navItems: navItems,
        headerImg: headerImg,
        condensed: boolean('condensed', false),
        divider: boolean('divider', false)
    },
});
