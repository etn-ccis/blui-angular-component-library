import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-blui-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BluiNavigationComponent {
    mobileStepperStep = 0;
}
