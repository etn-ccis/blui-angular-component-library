import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    ViewEncapsulation,
} from '@angular/core';
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
    @Input() activeIndex: number;
    @Input() variant: MobileStepperVariant = 'dots';
    @Output() activeIndexChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() back: EventEmitter<void> = new EventEmitter<void>();
    @Output() next: EventEmitter<void> = new EventEmitter<void>();
    stepsArray: number[] = [];

    ngOnChanges(): void {
        requireInput<MobileStepperComponent>(['steps', 'activeIndex'], this);
        this.stepsArray = Array(this.steps)
            .fill(0)
            .map((i) => i);
    }

    goBack(): void {
        this.activeIndexChange.emit(--this.activeIndex);
        this.back.emit();
    }

    goNext(): void {
        this.activeIndexChange.emit(++this.activeIndex);
        this.next.emit();
    }

    getProgressFill(): number {
        return this.activeIndex === 0 ? 0 : (this.activeIndex / (this.stepsArray.length - 1)) * 100;
    }
}
