import { menuGroups } from './with-basic-config.stories';
import { text } from '@storybook/addon-knobs';

export const withMenuHeader = (): any => ({
    template: `
        <pxb-user-menu 
            [menuGroups]="menuGroups" 
            [avatarValue]="avatarValue" 
            [menuTitle]="menuTitle" 
            [menuSubtitle]="menuSubtitle"></pxb-user-menu> 
    `,
    props: {
        menuGroups: menuGroups,
        avatarValue: text('avatarValue', 'AV'),
        menuTitle: text('menuTitle', 'Sample Title'),
        menuSubtitle: text('menuSubtitle', 'Sample subtitle'),
    },
});
