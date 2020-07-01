import { text } from '@storybook/addon-knobs';

export const withSubtitle = (): any => ({
    template: `
        <pxb-info-list-item>
            <span pxb-title>{{title}}</span>
            <span pxb-subtitle>{{subtitle}}</span>
        </pxb-info-list-item>
    `,
    props: {
        title: text('title', 'Info List Item'),
        subtitle: text('subtitle', 'this is a subtitle within an InfoListItem'),
    },
});
