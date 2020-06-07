import { navItems } from './basic-config.stories';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const navItems2 = [
    {
        title: 'Contact',
        itemID: 'group2_item1',
        onSelect: action('Contact'),
    },
    {
        title: 'Favorites',
        itemID: 'group2_item2',
        onSelect: action('Selected: Favorites'),
    },
];

export const withMultiNavGroups = (): any => ({
    template: `
        <pxb-drawer [open]="state.open">
           <pxb-drawer-header title="PX Blue Drawer" subtitle="with multiple Nav Groups">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </pxb-drawer-header>
           <pxb-drawer-body>
              <pxb-drawer-nav-group [title]="groupTitle1">
                 <pxb-drawer-nav-item *ngFor="let navItem of navItems1"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon icon>{{ navItem.icon }}</mat-icon>
                 </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
              <pxb-spacer *ngIf="spacer"></pxb-spacer> 
              <pxb-drawer-nav-group [title]="groupTitle2">
                 <pxb-drawer-nav-item *ngFor="let navItem of navItems2"
                    [title]="navItem.title"
                    [hidePadding]="true"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                 </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
           </pxb-drawer-body>
        </pxb-drawer>
      `,
    props: {
        navItems1: navItems,
        navItems2: navItems2,
        groupTitle1: text('NavGroup 1 title', 'Group 1 (with icons)'),
        groupTitle2: text('NavGroup 2 title', 'Group 2 (no icons)'),
        spacer: boolean('Add Spacer', false),
    },
});
