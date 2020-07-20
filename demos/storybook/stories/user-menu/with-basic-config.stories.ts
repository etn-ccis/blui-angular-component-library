import { UserMenuItem } from '@pxblue/angular-components';
import { text } from '@storybook/addon-knobs';

export const menuItems: UserMenuItem[] = [
    {
        title: 'Account',
        icon: 'settings',
    },
    {
        title: 'Contact Us',
        icon: 'mail',
    },
    {
        title: 'Log Out',
        icon: 'logout',
    },
];

export const withBasicConfig = (): any => ({
    template: `
        <pxb-user-menu [items]="menuItems" [value]="value"></pxb-user-menu> 
    `,
    props: {
        menuItems: menuItems,
        value: text('value', 'AV'),
    },
});
