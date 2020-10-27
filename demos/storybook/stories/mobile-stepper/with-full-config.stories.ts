import { number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withFullConfig = (): any => ({
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
         <div class="step-content">Step #{{activeIndex + 1}}</div>
         <mat-divider></mat-divider>
         <pxb-mobile-stepper [variant]="variant" [steps]="steps" [(activeIndex)]="activeIndex" 
            (next)="next()" (back)="back()" [style.width.px]="width"></pxb-mobile-stepper>
     </div>
    `,
    props: {
        steps: number('steps', 4, { range: true, min: 2, max: 6, step: 1 }),
        activeIndex: 0,
        variant: select('variant', ['dots', 'text', 'progress'], 'dots'),
        back: action('Back Button Selected'),
        next: action('Next Button Selected'),
        width: number('width', 300, { range: true, min: 250, max: 400, step: 10 }),
    },
});
