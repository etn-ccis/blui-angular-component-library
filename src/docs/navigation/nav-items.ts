// When adding items, updating navigation.component.ts & md.routing.ts

export type NavItem = {
    title: string;
    route: string;
    icon: string;
};

const emptyState = {
    title: 'Empty State',
    route: 'empty-state',
};
const listItemTag = {
    title: 'List Item Tag',
    route: 'list-item-tag',
};
export const COMPONENT_NAV_ITEMS = {
    emptyState,
    listItemTag,
};

const home: NavItem = {
    title: 'Home',
    route: 'home',
    icon: 'home',
};
export const APP_NAV_ITEMS = {
    home,
};
