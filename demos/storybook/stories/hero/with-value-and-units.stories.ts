import { text } from '@storybook/addon-knobs';

export const withValueUnits = (): any => ({
    template: `
        <pxb-hero [label]="'Efficiency'" [value]="value" [units]="units">
            <i pxb-primary class="pxb-grade_b"></i>
        </pxb-hero>
    `,
    props: {
        value: text('value', '88'),
        units: text('units', '%'),
    },
});
