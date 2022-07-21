// When adding items, updating navigation.component.ts & md.routing.ts

export type NavItem = {
    title: string;
    route: string;
    icon?: string;
    children?: any;
};

const emptyState: NavItem = {
    title: 'Empty State',
    route: 'empty-state',
};
const listItemTag: NavItem = {
    title: 'List Item Tag',
    route: 'list-item-tag',
};
const drawerNavGroup: NavItem = {
    title: 'Drawer Nav Group',
    route: 'drawer/nav-group',
};
const drawerHeader: NavItem = {
    title: 'Drawer Header',
    route: 'drawer/header',
};
const drawerFooter: NavItem = {
    title: 'Drawer Footer',
    route: 'drawer/footer',
};
const drawerNavItem: NavItem = {
    title: 'Drawer Nav Item',
    route: 'drawer/nav-item',
};
const drawer = {
    title: 'Drawer',
    route: 'drawer',
    children: [drawerHeader, drawerNavGroup, drawerNavItem, drawerFooter],
};

const home: NavItem = {
    title: 'Home',
    route: 'home',
    icon: 'home',
};

export const COMPONENT_NAV_ITEMS = {
    drawer,
    emptyState,
    listItemTag,
};
export const DRAWER_NAV_ITEMS = {
    drawerNavItem,
    drawerHeader,
    drawerFooter,
    drawerNavGroup,
};
export const APP_NAV_ITEMS = {
    home,
};
