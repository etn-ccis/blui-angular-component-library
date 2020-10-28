import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

export type MobileStepperVariant = 'dots' | 'text' | 'progress';

@Component({
    selector: 'pxb-mobile-stepper',
    templateUrl: './mobile-stepper.component.html',
    styleUrls: ['./mobile-stepper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'pxb-mobile-stepper',
    },
})
export class MobileStepperComponent implements OnChanges {
    @Input() steps: number;
    @Input() activeStep: number;
    @Input() variant: MobileStepperVariant = 'dots';

    stepsArray: number[] = [];

    ngOnChanges(): void {
        requireInput<MobileStepperComponent>(['steps', 'activeStep'], this);
        this.stepsArray = Array(this.steps)
            .fill(0)
            .map((i) => i);
    }

    getProgressFill(): number {
        return this.activeStep === 0 ? 0 : (this.activeStep / (this.stepsArray.length - 1)) * 100;
    }
}
