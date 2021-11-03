import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <blui-channel-value [value]="value"></blui-channel-value>
    `,
    props: {
        value: text('value', '123'),
    },
});
