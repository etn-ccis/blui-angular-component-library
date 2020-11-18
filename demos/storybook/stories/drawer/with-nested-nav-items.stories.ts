import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';
import { boolean } from '@storybook/addon-knobs';

export const nestedNavGroup: DrawerNavItem[] = [
    {
        title: 'Identity',
        icon: 'perm_identity',
        onSelect: action('Selected: Identity'),
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
        title: 'Alerts',
        icon: 'notifications_active',
        onSelect: action('Selected: Alerts'),
    },
];

export const withNestedNavItems = (): any => ({
    template: `
        <pxb-drawer [open]="state.open" [disableActiveItemParentStyles]="disableActiveItemParentStyles">
           <pxb-drawer-header title="PX Blue Drawer" subtitle="with nested nav items">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </pxb-drawer-header>
           <pxb-drawer-body>
              <pxb-drawer-nav-group>
                  <pxb-drawer-nav-item *ngFor="let navItem of navItems"
                     [title]="navItem.title"
                     [divider]="divider"
                     [hidePadding]="hidePadding"
                     [selected]="state.selected === navItem.title"
                     (select)="navItem.onSelect(); setActive(navItem, state);">
                     <mat-icon *ngIf="showIcon" pxb-icon>{{ navItem.icon }}</mat-icon>
                     <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items"
                       [title]="nestedItem.title"
                       [divider]="dividerNested"
                       [hidePadding]="hidePaddingNested"
                       [selected]="state.selected === nestedItem.title"
                       (select)="nestedItem.onSelect(); setActive(nestedItem, state);">
                        <pxb-drawer-nav-item *ngFor="let deepItem of nestedItem.items"
                           [title]="deepItem.title"                    
                           [divider]="dividerNested"
                           [hidePadding]="hidePaddingNested"
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
        showIcon: boolean('Show Icon', true),
        divider: boolean('divider (top)', false),
        dividerNested: boolean('divider (nested)', false),
        hidePadding: boolean('hidePadding (top)', false),
        hidePaddingNested: boolean('hidePadding (nested)', false),
        disableActiveItemParentStyles: boolean('disableActiveItemParentStyles', false),
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            if (!item.items) {
                // Only selects items that do not have nested nav items.
                state.selected = item.title;
            }
        },
    },
});
