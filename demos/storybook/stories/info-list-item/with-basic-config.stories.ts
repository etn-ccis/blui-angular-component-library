import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <pxb-info-list-item>
            <span title>{{title}}</span>
        </pxb-info-list-item>
    `,
    props: {
        title: text('title', 'Info List Item'),
    },
});
