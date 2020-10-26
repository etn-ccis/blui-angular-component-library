import { number } from '@storybook/addon-knobs';

export const withStepwiseButtons = (): any => ({
    styles: [
        `
        .step-content {
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-weight: 600;
       }
    `,
    ],
    template: ` 
     <div>
         <div class="step-content">Step #{{activeStepId + 1}}</div>
         <mat-divider></mat-divider>
         <div style="display: flex">
             <button mat-stroked-button color="primary" 
                (click)="activeStepId = activeStepId - 1"
                style="margin:16px;"
                [disabled]="activeStepId===0">Back</button>
             <pxb-dot-stepper [steps]="steps" [activeStepId]="activeStepId"></pxb-dot-stepper>
             <button mat-flat-button color="primary"  
                (click)="activeStepId = activeStepId + 1"
                style="margin: 16px;"
                [disabled]="activeStepId===steps-1">Next</button>
         </div>
     </div>
    `,
    props: {
        steps: number('steps', 4, { range: true, min: 2, max: 6, step: 1 }),
        activeStepId: 0,
    },
});
