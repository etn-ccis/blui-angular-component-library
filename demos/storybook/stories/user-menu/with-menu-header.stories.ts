import { menuItems } from './with-basic-config.stories';
import { text } from '@storybook/addon-knobs';

export const withMenuHeader = (): any => ({
    template: `
        <pxb-user-menu [items]="menuItems" [value]="value" [title]="title" [subtitle]="subtitle"></pxb-user-menu> 
    `,
    props: {
        menuItems: menuItems,
        value: text('value', 'AV'),
        title: text('title', 'Sample Title'),
        subtitle: text('subtitle', 'Sample subtitle'),
    },
});
