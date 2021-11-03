import { text } from '@storybook/addon-knobs';

export const withUnits = (): any => ({
    template: `
        <blui-channel-value [value]="'123'" [units]="units"></blui-channel-value>
    `,
    props: {
        units: text('units', 'hz'),
    },
});
