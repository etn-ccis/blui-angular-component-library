import { Component } from '@angular/core';

export const BASIC = `<blui-mobile-stepper [steps]="4" [activeStep]="0"></blui-mobile-stepper>
`;

@Component({
    selector: 'app-basic-mobile-stepper-demo',
    template: BASIC,
})
export class BasicExampleComponent {
}
