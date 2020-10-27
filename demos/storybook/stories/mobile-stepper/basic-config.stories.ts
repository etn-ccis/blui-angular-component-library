import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withBasicConfig = (): any => ({
    template: ` 
        <pxb-mobile-stepper [steps]="steps" [activeIndex]="activeIndex">
            <button pxb-back-button mat-stroked-button color="primary" 
                [disabled]="activeIndex === 0" 
                (click)="activeIndex = activeIndex - 1; goBack();">Back</button>
            <button pxb-next-button mat-flat-button color="primary" 
                [disabled]="activeIndex === steps - 1" 
                (click)="activeIndex = activeIndex + 1; goNext();"> Next</button>
        </pxb-mobile-stepper>
    `,
    props: {
        activeIndex: 0,
        steps: number('steps', 4, { range: true, min: 2, max: 6, step: 1 }),
        goBack: action('Back Button Clicked'),
        goNext: action('Next Button Clicked'),
    },
});
