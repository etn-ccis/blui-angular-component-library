import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

@Component({
    selector: 'pxb-dot-stepper',
    templateUrl: './dot-stepper.component.html',
    styleUrls: ['./dot-stepper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'pxb-dot-stepper',
    },
})
export class DotStepperComponent implements OnChanges {
    @Input() steps: number;
    @Input() activeIndex: number;
    stepsArray: number[] = [];

    ngOnChanges(): void {
        requireInput<DotStepperComponent>(['steps', 'activeIndex'], this);
        this.stepsArray = Array(this.steps)
            .fill(0)
            .map((i) => i);
    }
}
