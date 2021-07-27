import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

export type MobileStepperVariant = 'dots' | 'text' | 'progress';

/** The <MobileStepper> is used to minimally display progress when completing a workflow that requires multiple steps.
 *  There are three types of progress indicators supported, dots (default), text, and progress.
 */
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
    /** The index of the active step */
    @Input() activeStep: number;

    /** Total number of steps to display */
    @Input() steps: number;

    /** Which type of indicator to use */
    @Input() variant: MobileStepperVariant = 'dots';

    stepsArray: number[] = [];

    ngOnChanges(): void {
        requireInput<MobileStepperComponent>(['steps', 'activeStep'], this);
        this.stepsArray = Array(this.steps)
            .fill(0)
            .map((i) => i);
    }

    /** This is only used for progress variant. */
    getProgressFill(): number {
        return this.activeStep === 0 ? 0 : (this.activeStep / (this.stepsArray.length - 1)) * 100;
    }
}
