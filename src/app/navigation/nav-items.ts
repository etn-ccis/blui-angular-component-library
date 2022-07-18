export type NavItem = {
    title: string;
    route: string;
    icon: string;
};

const homeNavItem: NavItem = {
    title: 'Home',
    route: 'home',
    icon: 'home',
};

const pageOneNavItem: NavItem = {
    title: 'Page 1',
    route: 'page-one',
    icon: 'looks_one',
};

const pageTwoNavItem: NavItem = {
    title: 'Page 2',
    route: 'page-two',
    icon: 'looks_two',
};

export const APP_NAV_ITEMS = {
    home: homeNavItem,
    page1: pageOneNavItem,
    page2: pageTwoNavItem,
};
