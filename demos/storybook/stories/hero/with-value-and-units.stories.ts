import { text } from '@storybook/addon-knobs';

export const withValueUnits = (): any => ({
    template: `
        <blui-hero [label]="'Efficiency'" [value]="value" [units]="units">
            <i blui-primary style="transform: none" class="blui-grade_b"></i>
        </blui-hero>
    `,
    props: {
        value: text('value', '88'),
        units: text('units', '%'),
    },
});
