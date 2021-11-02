import { text } from '@storybook/addon-knobs';

export const withSubtitle = (): any => ({
    template: `
        <blui-info-list-item>
            <span blui-title>{{title}}</span>
            <span blui-subtitle>{{subtitle}}</span>
        </blui-info-list-item>
    `,
    props: {
        title: text('title', 'Info List Item'),
        subtitle: text('subtitle', 'this is a subtitle within an InfoListItem'),
    },
});
