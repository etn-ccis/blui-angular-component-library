import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withBasicConfig = (): any => ({
    template: ` 
        <pxb-mobile-stepper [steps]="steps" [activeIndex]="0" 
            (next)="next()" (back)="back()"></pxb-mobile-stepper>
    `,
    props: {
        steps: number('steps', 4, { range: true, min: 2, max: 6, step: 1 }),
        back: action('Back Button Selected'),
        next: action('Next Button Selected'),
    },
});
