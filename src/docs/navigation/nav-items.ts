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
const drawerNavItem: NavItem = {
    title: 'Drawer Nav Item',
    route: 'drawer/nav-item',
};
const drawer = {
    title: 'Drawer',
    route: 'drawer',
    children: [drawerNavItem],
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
};
export const APP_NAV_ITEMS = {
    home,
};
