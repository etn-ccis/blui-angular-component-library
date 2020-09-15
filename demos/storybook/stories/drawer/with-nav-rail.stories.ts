import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';
import { boolean } from '@storybook/addon-knobs';
const headerImg = require('../../assets/eaton-condensed.png');

export const navItems: DrawerNavItem[] = [
    {
        title: 'Identity',
        icon: 'perm_identity',
        onSelect: action('Selected: Identity'),
    },
    {
        title: 'Calendar',
        icon: 'today',
        onSelect: action('Selected: Calendar'),
    },
    {
        title: 'Accessible',
        icon: 'accessibility',
        onSelect: action('Selected: Accessible'),
    },
    {
        title: 'Alarms',
        icon: 'notifications_active',
        onSelect: action('Selected: Alarms'),
    },
];

export const withNavRail = (): any => ({
    template: `
        <pxb-drawer-layout variant="rail">
            <pxb-drawer pxb-drawer [condensed]="condensed">
                <pxb-drawer-header>
                    <div pxb-title-content style="height: 100%; display: flex; align-items: center; background: white">
                        <img [src]="headerImg" width="100%"/>
                    </div>
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
        </pxb-drawer-layout>
      `,
    props: {
        navItems: navItems,
        headerImg: headerImg,
        condensed: boolean('condensed', false),
    },
});
