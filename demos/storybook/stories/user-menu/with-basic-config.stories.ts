import { UserMenuGroup } from '@pxblue/angular-components';
import { text } from '@storybook/addon-knobs';

export const menuGroups: UserMenuGroup[] = [
    {
        items: [
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
        ],
    },
];

export const withBasicConfig = (): any => ({
    template: `
        <pxb-user-menu [menuGroups]="menuGroups" [avatarValue]="avatarValue"></pxb-user-menu> 
    `,
    props: {
        menuGroups: menuGroups,
        avatarValue: text('avatarValue', 'AV'),
    },
});
