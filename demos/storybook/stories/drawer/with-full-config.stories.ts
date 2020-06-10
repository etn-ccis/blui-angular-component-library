import { boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';
import * as Colors from '@pxblue/colors';
const footerImage = require('../../assets/EatonLogo.svg');
const headerImage = require('../../assets/topology_40.png');

const header = 'DrawerHeader';
const navGroup = 'DrawerNavGroup';
const navItem = 'DrawerNavItem';
const footer = 'DrawerFooter';

export const navItems1: DrawerNavItem[] = [
    {
        title: 'Overview',
        subtitle: 'Learn more about us',
        statusColor: Colors.green[500],
        icon: 'perm_identity',
        onSelect: action('Selected: Overview'),
        items: [
            {
                title: 'Monthly Report',
                onSelect: action('Selected: Monthly Report'),
            },
            {
                title: 'Annual Report',
                onSelect: action('Selected: Annual Report'),
            },
        ],
    },
    {
        title: 'Calender',
        icon: 'today',
        onSelect: action('Selected: Calendar'),
    },
    {
        title: 'Alarms',
        subtitle: '4 new warnings',
        statusColor: Colors.yellow[500],
        icon: 'notifications_active',
        onSelect: action('Selected: Alarms'),
    },
    {
        title: 'Accessibility',
        icon: 'accessibility',
        onSelect: action('Selected: Accessibility'),
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
        onSelect: action('Selected: Events'),
    },
    {
        title: 'Checklist',
        icon: 'done_outline',
        onSelect: action('Selected: Checklist'),
    },
];

export const withFullConfig = (): any => ({
    styles: [
        `::ng-deep .pxb-drawer .pxb-drawer-header {
          background-color: ${Colors.orange[500]};
       }
       ::ng-deep .show-header-image .pxb-drawer .pxb-drawer-header-background {
          background-image: url(${headerImage});
          width: 360px;
        }
       `,
    ],
    template: `
        <pxb-drawer [open]="state.open" [class.show-header-image]="showHeaderImage">
           <pxb-drawer-header [title]="title" [subtitle]="subtitle">
             <button pxb-icon mat-icon-button (click)="toggleDrawer(state)">
               <mat-icon>menu</mat-icon>
             </button>
           </pxb-drawer-header>
           <pxb-drawer-body>
              <ng-container *ngFor="let navGroup of [navItems1, navItems2]; let first = first;">
                 <pxb-drawer-nav-group [title]="first ? groupTitle1 : groupTitle2" [divider]="groupDivider">
                    <pxb-drawer-nav-item *ngFor="let navItem of navGroup.slice(0, first ? itemsLength1 : itemsLength2)"
                      [title]="navItem.title"
                      [subtitle]="navItem.subtitle"
                      [selected]="state.selected === navItem.title"
                      [chevron]="chevron"
                      [statusColor]="navItem.statusColor"
                      [hidePadding]="hidePadding"
                      [divider]="itemDivider"
                      [activeItemBackgroundShape]="activeItemBackgroundShape"
                      (select)="navItem.onSelect(); setActive(navItem, state);">
                        <mat-icon *ngIf="showNavItemIcon" icon>{{ navItem.icon }}</mat-icon>
                        <mat-icon *ngIf="customExpandIcon" expandIcon>add</mat-icon>
                        <mat-icon *ngIf="customExpandIcon" collapseIcon>remove</mat-icon>
                        <pxb-drawer-nav-item *ngFor="let nestedItem of navItem.items"
                           [title]="nestedItem.title"
                           [hidePadding]="hidePaddingNested"
                           [selected]="state.selected === nestedItem.title"
                           [activeItemBackgroundShape]="activeItemBackgroundShape"
                           (select)="nestedItem.onSelect(); setActive(nestedItem, state);">                             
                        </pxb-drawer-nav-item>
                    </pxb-drawer-nav-item>
                 </pxb-drawer-nav-group>
                <pxb-spacer *ngIf="first && spacer"></pxb-spacer>
              </ng-container>
           </pxb-drawer-body>
           <pxb-drawer-footer *ngIf="showFooter" [divider]="footerDivider">
             <img [src]="footerImage" width="170" style="align-self: center; padding: 16px" />
           </pxb-drawer-footer>
        </pxb-drawer>
      `,
    props: {
        navItems1: navItems1,
        navItems2: navItems2,
        footerImage: footerImage,
        headerImage: headerImage,
        title: text('title', 'PX Blue Drawer', header),
        subtitle: text('subtitle', 'with full config', header),
        showHeaderImage: boolean('Show Background Image', true, header),
        groupTitle1: text('NavGroup 1 title', 'Group 1', navGroup),
        groupTitle2: text('NavGroup 2 title', 'Group 2', navGroup),
        groupDivider: boolean('divider', true, navGroup),
        spacer: boolean('Add Spacer', false, navGroup),
        itemsLength1: number(
            'Group 1 Items',
            3,
            {
                range: true,
                min: 0,
                max: navItems1.length,
                step: 1,
            },
            navGroup
        ),
        itemsLength2: number(
            'Group 2 Items',
            3,
            {
                range: true,
                min: 0,
                max: navItems2.length,
                step: 1,
            },
            navGroup
        ),
        chevron: boolean('chevron', false, navItem),
        hidePadding: boolean('hidePadding', true, navItem),
        hidePaddingNested: boolean('hidePadding (nested)', false, navItem),
        itemDivider: boolean('divider', true, navItem),
        showNavItemIcon: boolean('Show Icon', true, navItem),
        customExpandIcon: boolean('Custom Expand/Collapse Icons', false, navItem),
        activeItemBackgroundShape: select('activeItemBackgroundShape', ['round', 'square'], 'round', navItem),
        showFooter: boolean('Show Footer', true, footer),
        footerDivider: boolean('divider', true, footer),
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            if (!item.items) {
                // Only selects items that do not have nested nav items.
                state.selected = item.title;
            }
        },
    },
});
