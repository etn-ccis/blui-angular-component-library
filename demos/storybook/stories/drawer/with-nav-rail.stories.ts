import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';
import { boolean } from '@storybook/addon-knobs';

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
        /* Remove content background color for demo. */
        `::ng-deep .pxb-blue .mat-drawer-content,
         ::ng-deep .pxb-blue .mat-drawer-container {
          background-color: unset!important;
       }
         ::ng-deep .pxb-blue-dark .mat-drawer-content, 
         ::ng-deep .pxb-blue-dark .mat-drawer-container {
          background-color: unset!important;
       }`,
    ],
    template: `
        <pxb-drawer-layout variant="rail">
            <pxb-drawer pxb-drawer [condensed]="condensed" [sideBorder]="sideBorder">
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
                    <div style="height: 56px; display: flex; align-items: center; justify-content: center">
                        <i class="pxb-eaton" style="font-size: 14px;"></i>
                    </div>
                </pxb-drawer-footer>
            </pxb-drawer>
            <div pxb-content class="with-nav-rail-content" [style.width.px]="24"></div>
        </pxb-drawer-layout>
      `,
    props: {
        navItems: navItems,
        condensed: boolean('condensed', true),
        divider: boolean('divider', false),
        sideBorder: boolean('sideBorder', false),
    },
});
