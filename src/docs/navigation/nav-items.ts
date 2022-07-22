// When adding items, updating navigation.component.ts & md.routing.ts

export type NavItem = {
    title: string;
    route: string;
    icon?: string;
    children?: any;
};

const emptyState: NavItem = {
    title: 'Empty State',
    route: 'components/empty-state',
};
const listItemTag: NavItem = {
    title: 'List Item Tag',
    route: 'components/list-item-tag',
};
const drawerNavGroup: NavItem = {
    title: 'Drawer Nav Group',
    route: 'components/drawer/nav-group',
};
const drawerHeader: NavItem = {
    title: 'Drawer Header',
    route: 'components/drawer/header',
};
const drawerFooter: NavItem = {
    title: 'Drawer Footer',
    route: 'components/drawer/footer',
};
const drawerNavItem: NavItem = {
    title: 'Drawer Nav Item',
    route: 'components/drawer/nav-item',
};
const drawer = {
    title: 'Drawer',
    route: 'components/drawer',
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
