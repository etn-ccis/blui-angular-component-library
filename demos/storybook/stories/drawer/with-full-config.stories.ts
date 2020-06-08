import {boolean, number, text} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';
const bgImage = require('../../assets/EatonLogo.svg');

const header = 'DrawerHeader';
const navGroup = 'DrawerNavGroup';
const navItem = 'DrawerNavItem';

export const navItems1: DrawerNavItem[] = [
    {
        title: 'Identity Management',
        icon: 'perm_identity',
        onSelect: action('Selected: Identity Management'),
    },
    {
        title: 'Calender',
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
    {
        title: 'Backups',
        icon: 'backup',
        onSelect: action('Selected: Backups'),
    },

];

export const navItems2 = [
    {
        title: 'Contacts',
        icon: 'account_circle',
        onSelect: action('Contact'),
    },
    {
        title: 'Favorites',
        icon: 'star',
        onSelect: action('Selected: Favorites'),
    },
    {
        title: 'History',
        icon: 'history',
        onSelect: action('Selected: History'),
    },
    {
        title: 'Events',
        icon: 'event',
        onSelect: action('Selected: Events')
    },
    {
        title: 'Checklist',
        icon: 'done_outline',
        onSelect: action('Selected: Checklist')
    },
];

export const withFullConfig = (): any => ({
    template: `
        <pxb-drawer [open]="state.open">
           <pxb-drawer-header [title]="title" [subtitle]="subtitle">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)" *ngIf="headerIcon">
               <mat-icon>menu</mat-icon>
             </button>
           </pxb-drawer-header>
           <pxb-drawer-body>
              <pxb-drawer-nav-group [title]="groupTitle1">
                 <pxb-drawer-nav-item *ngFor="let navItem of navItems1.slice(0, itemsLength1)"
                    [title]="navItem.title"
                    [selected]="state.selected === navItem.title"
                    [chevron]="chevron"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon *ngIf="showNavItemIcon" icon>{{ navItem.icon }}</mat-icon>
                 </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
              <pxb-spacer *ngIf="spacer"></pxb-spacer> 
              <pxb-drawer-nav-group [title]="groupTitle2">
                 <pxb-drawer-nav-item *ngFor="let navItem of navItems2.slice(0, itemsLength2)"
                    [title]="navItem.title"
                    [hidePadding]="true"
                    [chevron]="chevron"
                    [selected]="state.selected === navItem.title"
                    (select)="navItem.onSelect(); setActive(navItem.title, state);">
                    <mat-icon *ngIf="showNavItemIcon" icon>{{ navItem.icon }}</mat-icon>
                 </pxb-drawer-nav-item>
              </pxb-drawer-nav-group>
           </pxb-drawer-body>
           <pxb-drawer-footer *ngIf="showFooter">
             <mat-divider></mat-divider>
             <img [src]="bgImage" width="170" style="align-self: center; padding: 16px" />
           </pxb-drawer-footer>
        </pxb-drawer>
      `,
    props: {
        navItems1: navItems1,
        navItems2: navItems2,
        headerIcon: boolean('Show Icon', true, header),
        title: text('title', 'PX Blue Drawer', header),
        subtitle: text('subtitle', 'with full config', header),
        groupTitle1: text('NavGroup 1 title', 'Group 1', navGroup),
        groupTitle2: text('NavGroup 2 title', 'Group 2', navGroup),
        itemsLength1: number('Group 1 Items', 3, {
            range: true,
            min: 0,
            max: navItems1.length,
            step: 1,
        }, navGroup),
        itemsLength2: number('Group 2 Items', 3, {
            range: true,
            min: 0,
            max: navItems2.length,
            step: 1,
        }, navGroup),
        showNavItemIcon: boolean('Show Icon', true, navItem),
        spacer: boolean('Add Spacer', false, navGroup),
        showFooter: boolean('Show Footer', true, 'DrawerFooter'),
        chevron: boolean('chevron', false, navItem),
        bgImage: bgImage,
    },
});
