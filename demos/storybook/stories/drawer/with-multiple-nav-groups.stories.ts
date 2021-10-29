import { navItems } from './basic-config.stories';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const navItems2 = [
    {
        title: 'Settings',
        itemID: 'group2_item1',
        icon: 'settings',
        onSelect: action('Settings'),
    },
    {
        title: 'Legal',
        itemID: 'group2_item2',
        icon: 'gavel',
        onSelect: action('Selected: Legal'),
    },
];

export const withMultiNavGroups = (): any => ({
    template: `
        <blui-drawer [open]="state.open">
           <blui-drawer-header title="Brightlayer UI Drawer" subtitle="with multiple Nav Groups">
             <button blui-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </blui-drawer-header>
           <blui-drawer-body>
              <blui-drawer-nav-group [title]="groupTitle1" [divider]="true">
                 <blui-drawer-nav-item *ngFor="let navItem of navItems1"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                 </blui-drawer-nav-item>
              </blui-drawer-nav-group>
              <blui-spacer *ngIf="spacer"></blui-spacer> 
              <blui-drawer-nav-group [title]="groupTitle2" [divider]="true">
                 <blui-drawer-nav-item *ngFor="let navItem of navItems2"
                    [title]="navItem.title"
                    [hidePadding]="true"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon blui-icon>{{ navItem.icon }}</mat-icon>
                 </blui-drawer-nav-item>
              </blui-drawer-nav-group>
           </blui-drawer-body>
        </blui-drawer>
      `,
    props: {
        navItems1: navItems,
        navItems2: navItems2,
        groupTitle1: text('NavGroup 1 title', 'Group 1'),
        groupTitle2: text('NavGroup 2 title', 'Group 2'),
        spacer: boolean('Add Spacer', true),
    },
});
