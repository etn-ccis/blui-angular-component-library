import { UserMenuGroup } from '@pxblue/angular-components';

import { text } from '@storybook/addon-knobs';

const groups: UserMenuGroup[] = [
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

export const withFullConfig = (): any => ({
    template: `
        <pxb-user-menu 
            [menuGroups]="mergeProps(menuGroups, groupTitle)" 
            [avatarValue]="avatarValue" 
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle"></pxb-user-menu> 
    `,
    props: {
        menuGroups: groups,
        avatarValue: text('avatarValue', 'AV'),
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
        groupTitle: text('menuGroups[0].title', 'Account Management'),
        mergeProps: (items, title): UserMenuGroup[] => {
            items[0].title = title;
            return items;
        },
    },
});
