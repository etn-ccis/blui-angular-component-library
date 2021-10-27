import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@brightlayer-ui/angular-components';
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
        `::ng-deep .blui-blue .mat-drawer-content,
         ::ng-deep .blui-blue .mat-drawer-container {
          background-color: unset!important;
       }
         ::ng-deep .blui-blue-dark .mat-drawer-content, 
         ::ng-deep .blui-blue-dark .mat-drawer-container {
          background-color: unset!important;
       }`,
    ],
    template: `
        <blui-drawer-layout variant="rail">
            <blui-drawer blui-drawer [condensed]="condensed" [sideBorder]="sideBorder">
               <blui-drawer-body>
                  <blui-drawer-nav-group>
                       <blui-drawer-nav-item *ngFor="let navItem of navItems"
                        [title]="navItem.title"
                        [divider]="divider"
                        [selected]="state.selected === navItem.title"
                        (select)="navItem.onSelect(); setActive(navItem.title, state);">
                        <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                      </blui-drawer-nav-item>
                  </blui-drawer-nav-group>
               </blui-drawer-body>
                <blui-drawer-footer>
                    <div style="height: 56px; display: flex; align-items: center; justify-content: center">
                        <i class="blui-eaton" style="font-size: 14px;"></i>
                    </div>
                </blui-drawer-footer>
            </blui-drawer>
            <div blui-content class="with-nav-rail-content" [style.width.px]="24"></div>
        </blui-drawer-layout>
      `,
    props: {
        navItems: navItems,
        condensed: boolean('condensed', true),
        divider: boolean('divider', false),
        sideBorder: boolean('sideBorder', false),
    },
});
