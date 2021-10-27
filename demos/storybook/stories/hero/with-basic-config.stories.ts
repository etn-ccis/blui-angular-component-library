import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
        <blui-hero [label]="label">
            <i blui-primary class="blui-grade_a"></i>
        </blui-hero>
    `,
    props: {
        label: text('label', 'Efficiency'),
    },
});
