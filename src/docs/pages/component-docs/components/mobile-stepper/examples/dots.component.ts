import { Component } from '@angular/core';

export const DOTS = `<ng-template #nextButton>
    <button mat-flat-button color="primary" 
        [disabled]="activeStep === 3" 
        (click)="activeStep = activeStep + 1">Next</button>
</ng-template>
<ng-template #backButton>
    <button mat-stroked-button color="primary" 
        [disabled]="activeStep === 0" 
        (click)="activeStep = activeStep - 1">Back</button>
</ng-template>

<div style="width: 300px">
    <blui-mobile-stepper [steps]="4" [activeStep]="activeStep">
        <ng-template [ngTemplateOutlet]="backButton" blui-back-button></ng-template> 
        <ng-template [ngTemplateOutlet]="nextButton" blui-next-button></ng-template> 
    </blui-mobile-stepper>
    
    <blui-mobile-stepper [steps]="4" [activeStep]="activeStep" variant="text">
        <ng-template [ngTemplateOutlet]="backButton" blui-back-button></ng-template> 
        <ng-template [ngTemplateOutlet]="nextButton" blui-next-button></ng-template> 
    </blui-mobile-stepper>
    
    <blui-mobile-stepper [steps]="4" [activeStep]="activeStep" variant="progress">
        <ng-template [ngTemplateOutlet]="backButton" blui-back-button></ng-template> 
        <ng-template [ngTemplateOutlet]="nextButton" blui-next-button></ng-template> 
    </blui-mobile-stepper>
</div>

`;

@Component({
    selector: 'app-dots-mobile-stepper-demo',
    template: DOTS,
})
export class DotsComponent {
    activeStep = 0;
}
