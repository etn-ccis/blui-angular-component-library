import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withBasicConfig = (): any => ({
    template: ` 
        <pxb-mobile-stepper [steps]="steps" [activeStep]="activeStep">
            <button pxb-back-button mat-stroked-button color="primary" 
                [disabled]="activeStep === 0" 
                (click)="activeStep = activeStep - 1; goBack();">Back</button>
            <button pxb-next-button mat-flat-button color="primary" 
                [disabled]="activeStep === steps - 1" 
                (click)="activeStep = activeStep + 1; goNext();"> Next</button>
        </pxb-mobile-stepper>
    `,
    props: {
        activeStep: 0,
        steps: number('steps', 4, { range: true, min: 2, max: 6, step: 1 }),
        goBack: action('Back Button Clicked'),
        goNext: action('Next Button Clicked'),
    },
});
