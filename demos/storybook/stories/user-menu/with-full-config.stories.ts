import { menuGroups } from './with-basic-config.stories';
import { UserMenuGroup } from '@pxblue/angular-components';

import { text } from '@storybook/addon-knobs';

export const withFullConfig = (): any => ({
    template: `
        <pxb-user-menu 
            [menuGroups]="mergeProps(menuGroups, groupTitle)" 
            [value]="value" 
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle"></pxb-user-menu> 
    `,
    props: {
        menuGroups: [...menuGroups],
        value: text('value', 'AV'),
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
        groupTitle: text('menuGroups[0].title', 'Account Management'),
        mergeProps: (items, title): UserMenuGroup[] => {
            items[0].title = title;
            return items;
        }
    },
});
