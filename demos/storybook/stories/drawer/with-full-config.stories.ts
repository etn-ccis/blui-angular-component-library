import { boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DrawerNavItem } from '@pxblue/angular-components';
import * as Colors from '@pxblue/colors';
const footerImage = require('../../assets/EatonLogo.svg');
const headerImage = require('../../assets/topology_40.png');

const drawer = 'Drawer';
const header = 'DrawerHeader';
const navGroup = 'DrawerNavGroup';
const navItem = 'DrawerNavItem';
const footer = 'DrawerFooter';

export const navItems1: DrawerNavItem[] = [
    {
        title: 'Overview',
        subtitle: 'Learn more about us',
        statusColor: Colors.green[500],
        icon: 'dashboard',
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
        title: 'Timeline',
        icon: 'toc',
        onSelect: action('Selected: Timeline'),
    },
    {
        title: 'Locations',
        icon: 'pin_drop',
        onSelect: action('Selected: Locations'),
    },
    {
        title: 'Devices',
        subtitle: '4 new warnings',
        statusColor: Colors.yellow[500],
        icon: 'devices',
        onSelect: action('Selected: Devices'),
    },
    {
        title: 'Photos',
        icon: 'add_a_photo',
        onSelect: action('Selected: Photos'),
    },
    {
        title: 'Schedule',
        icon: 'airport_shuttle',
        onSelect: action('Selected: Schedule'),
    },
];

export const navItems2 = [
    {
        title: 'User Guide',
        icon: 'move_to_inbox',
        onSelect: action('User Guide'),
    },
    {
        title: 'License Agreement',
        subtitle: 'For Eaton employees only',
        icon: 'fact_check',
        onSelect: action('License Agreement'),
    },
    {
        title: 'Accessibility',
        icon: 'accessibility',
        onSelect: action('Selected: Accessibility'),
        items: [
            {
                title: 'Color Contrast Guide',
                onSelect: action('Selected: Color Contrast Guide'),
            },
            {
                title: 'Screen Reader',
                onSelect: action('Selected: Screen Reader'),
            },
        ],
    },
    {
        title: 'Notifications',
        icon: 'notifications',
        onSelect: action('Selected: Notifications'),
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
        `::ng-deep .show-header-image .pxb-drawer-header-background {
          background-image: url(${headerImage});
          width: 360px;
        }
       `,
    ],
    template: `
        <pxb-drawer 
            [open]="state.open" 
            [openOnHoverDelay]="openOnHoverDelay"
            [sideBorder]="sideBorder"
            [disableActiveItemParentStyles]="disableActiveItemParentStyles" 
            [openOnHover]="openOnHover"
            [class.show-header-image]="showHeaderImage">
           <pxb-drawer-header [title]="title" [subtitle]="subtitle" [divider]="showHeaderDivider" [color]="color">
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
                        <mat-icon *ngIf="showNavItemIcon" pxb-icon>{{ navItem.icon }}</mat-icon>
                        <mat-icon *ngIf="customExpandIcon" pxb-expand-icon>add</mat-icon>
                        <mat-icon *ngIf="customExpandIcon" pxb-collapse-icon>remove</mat-icon>
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
           <pxb-drawer-footer *ngIf="showFooter" [divider]="footerDivider" [hideContentOnCollapse]="hideContentOnCollapse">
             <img [src]="footerImage" width="170" style="align-self: center; padding: 16px" />
           </pxb-drawer-footer>
        </pxb-drawer>
      `,
    props: {
        navItems1: navItems1,
        navItems2: navItems2,
        footerImage: footerImage,
        headerImage: headerImage,
        openOnHover: boolean('openOnHover', true, drawer),
        openOnHoverDelay: number(
            'openOnHoverDelay',
            500,
            {
                range: true,
                min: 100,
                max: 2000,
                step: 100,
            },
            drawer
        ),
        sideBorder: boolean('sideBorder', true, drawer),
        disableActiveItemParentStyles: boolean('disableActiveItemParentStyles', false, drawer),
        title: text('title', 'PX Blue Drawer', header),
        subtitle: text('subtitle', 'with full config', header),
        showHeaderImage: boolean('Show Background Image', true, header),
        showHeaderDivider: boolean('divider', true, header),
        color: select('color', ['primary', 'accent', 'warn', ''], 'primary', header),
        groupTitle1: text('NavGroup 1 title', 'Group 1', navGroup),
        groupTitle2: text('NavGroup 2 title', 'Group 2', navGroup),
        groupDivider: boolean('divider', true, navGroup),
        spacer: boolean('Add Spacer', false, navGroup),
        itemsLength1: number(
            'Group 1 Items',
            4,
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
            4,
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
        itemDivider: boolean('divider', false, navItem),
        showNavItemIcon: boolean('Show Icon', true, navItem),
        customExpandIcon: boolean('Custom Expand/Collapse Icons', false, navItem),
        activeItemBackgroundShape: select('activeItemBackgroundShape', ['round', 'square'], 'square', navItem),
        showFooter: boolean('Show Footer', true, footer),
        footerDivider: boolean('divider', true, footer),
        hideContentOnCollapse: boolean('hideContentOnCollapse', true, footer),
        setActive: (item: DrawerNavItem, state: { selected: string }): void => {
            if (!item.items) {
                // Only selects items that do not have nested nav items.
                state.selected = item.title;
            }
        },
    },
});
