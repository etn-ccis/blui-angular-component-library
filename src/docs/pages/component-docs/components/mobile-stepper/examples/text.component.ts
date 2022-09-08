import { Component } from '@angular/core';

export const TEXT = `<blui-mobile-stepper [steps]="4" [activeStep]="activeStep" variant="text">
    <button blui-back-button mat-stroked-button color="primary" 
        [disabled]="activeStep === 0" 
        (click)="activeStep = activeStep - 1">Back</button>
    <button blui-next-button mat-flat-button color="primary" 
        [disabled]="activeStep === 3" 
        (click)="activeStep = activeStep + 1">Next</button>
</blui-mobile-stepper>
`;

@Component({
    selector: 'app-text-mobile-stepper-demo',
    template: TEXT,
})
export class TextComponent {
    activeStep = 0;
}
