import { Component } from '@angular/core';

export const PROGRESS = `<blui-mobile-stepper 
    [steps]="4" 
    [activeStep]="activeStep" 
    variant="progress" 
    style="width: 300px">
    <button blui-back-button mat-stroked-button color="primary" 
        [disabled]="activeStep === 0" 
        (click)="activeStep = activeStep - 1">Back</button>
    <button blui-next-button mat-flat-button color="primary" 
        [disabled]="activeStep === 3" 
        (click)="activeStep = activeStep + 1">Next</button>
</blui-mobile-stepper>
`;

@Component({
    selector: 'app-progress-mobile-stepper-demo',
    template: PROGRESS,
})
export class ProgressComponent {
    activeStep = 0;
}
