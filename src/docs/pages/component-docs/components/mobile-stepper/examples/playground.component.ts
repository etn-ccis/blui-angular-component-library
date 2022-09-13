import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {PlaygroundService} from "../../../../../services/playground/playground.service";
import {Knob} from "../../../shared/scaffold/scaffold.component";

export type MobileStepperPlaygroundKnobs = {
    activeStep: Knob;
    steps: Knob;
    variant: Knob;
};

@Component({
    selector: 'app-mobile-stepper-playground',
    template: `<blui-mobile-stepper
            [steps]="inputs.steps.value"
            [variant]="inputs.variant.value"
            [activeStep]="inputs.activeStep.value"
            variant="progress"
            style="width: 300px">
        <button blui-back-button mat-stroked-button color="primary"
                [disabled]="inputs.activeStep.value === 0"
                (click)="inputs.activeStep.value = inputs.activeStep.value - 1">Back</button>
        <button blui-next-button mat-flat-button color="primary"
                [disabled]="inputs.activeStep.value === inputs.steps.value - 1"
                (click)="inputs.activeStep.value = inputs.activeStep.value + 1">Next</button>
    </blui-mobile-stepper>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: MobileStepperPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    open = true;
    knobListener: Subscription;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe(
            (updatedKnobs: MobileStepperPlaygroundKnobs) => {
                this.inputs = updatedKnobs;
                this._emitNewCodeChanges();
            }
        );
    }

    ngAfterViewInit(): void {
        this._emitNewCodeChanges();
    }

    ngOnDestroy(): void {
        if (this.knobListener) {
            this.knobListener.unsubscribe();
        }
    }

    private _emitNewCodeChanges(): void {
        setTimeout(() => {
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    private _createGeneratedCode(): string {
        const code = `<blui-mobile-stepper
            [steps]="inputs.steps.value"
            [variant]="inputs.variant.value"
            [activeStep]="inputs.activeStep.value"
            variant="progress"
            style="width: 300px">
        <button blui-back-button mat-stroked-button color="primary"
                [disabled]="inputs.activeStep.value === 0"
                (click)="inputs.activeStep.value = inputs.activeStep.value - 1">Back</button>
        <button blui-next-button mat-flat-button color="primary"
                [disabled]="inputs.activeStep.value === inputs.steps.value - 1"
                (click)="inputs.activeStep.value = inputs.activeStep.value + 1">Next</button>
    </blui-mobile-stepper>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
