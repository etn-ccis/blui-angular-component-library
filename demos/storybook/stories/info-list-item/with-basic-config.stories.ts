import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <blui-info-list-item>
            <span blui-title>{{title}}</span>
        </blui-info-list-item>
    `,
    props: {
        title: text('title', 'Info List Item'),
    },
});
