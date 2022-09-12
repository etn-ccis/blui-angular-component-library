// When adding items, updating navigation.component.ts & md.routing.ts

export type NavItem = {
    title: string;
    route: string;
    icon?: string;
    children?: any;
};

const appBar: NavItem = {
    title: 'App Bar',
    route: 'components/app-bar',
};
const channelValue: NavItem = {
    title: 'Channel Value',
    route: 'components/channel-value',
};
const hero: NavItem = {
    title: 'Hero',
    route: 'components/hero',
};
const userMenu: NavItem = {
    title: 'User Menu',
    route: 'components/user-menu',
};
const mobileStepper: NavItem = {
    title: 'Mobile Stepper',
    route: 'components/mobile-stepper',
};
const emptyState: NavItem = {
    title: 'Empty State',
    route: 'components/empty-state',
};
const listItemTag: NavItem = {
    title: 'List Item Tag',
    route: 'components/list-item-tag',
};
const drawerDrawer: NavItem = {
    title: 'Drawer',
    route: 'components/drawer',
};
const drawerLayout: NavItem = {
    title: 'Drawer Layout',
    route: 'components/drawer/layout',
};
const drawerHeader: NavItem = {
    title: 'Drawer Header',
    route: 'components/drawer/header',
};
const drawerSubheader: NavItem = {
    title: 'Drawer Subheader',
    route: 'components/drawer/subheader',
};
const drawerBody: NavItem = {
    title: 'Drawer Body',
    route: 'components/drawer/body',
};
const drawerNavGroup: NavItem = {
    title: 'Drawer Nav Group',
    route: 'components/drawer/nav-group',
};
const drawerNavItem: NavItem = {
    title: 'Drawer Nav Item',
    route: 'components/drawer/nav-item',
};
const drawerFooter: NavItem = {
    title: 'Drawer Footer',
    route: 'components/drawer/footer',
};
const drawer = {
    title: 'Drawer',
    route: 'components/drawer',
    children: [
        drawerLayout,
        drawerDrawer,
        drawerHeader,
        drawerSubheader,
        drawerBody,
        drawerNavGroup,
        drawerNavItem,
        drawerFooter,
    ],
};

const home: NavItem = {
    title: 'Home',
    route: 'home',
    icon: 'home',
};

export const COMPONENT_NAV_ITEMS = {
    appBar,
    channelValue,
    drawer,
    emptyState,
    hero,
    listItemTag,
    mobileStepper,
    userMenu,
};
export const DRAWER_NAV_ITEMS = {
    drawerLayout,
    drawerDrawer,
    drawerNavItem,
    drawerHeader,
    drawerSubheader,
    drawerBody,
    drawerFooter,
    drawerNavGroup,
};
export const APP_NAV_ITEMS = {
    home,
};
