import { text } from '@storybook/addon-knobs';

export const withUnits = (): any => ({
    template: `
        <pxb-channel-value [value]="'123'" [units]="units"></pxb-channel-value>
    `,
    props: {
        units: text('units', 'hz'),
    },
});
