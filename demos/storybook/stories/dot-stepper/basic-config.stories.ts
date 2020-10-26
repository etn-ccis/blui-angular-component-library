import { number } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: ` 
        <pxb-dot-stepper [steps]="steps" [activeIndex]="0" style="padding: 16px"></pxb-dot-stepper>
    `,
    props: {
        steps: number('steps', 4, { range: true, min: 2, max: 6, step: 1 }),
    },
});
