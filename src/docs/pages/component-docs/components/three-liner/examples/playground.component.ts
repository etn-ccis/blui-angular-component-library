import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type ThreeLinerPlaygroundKnobs = {
    title: Knob;
    subtitle: Knob;
    info: Knob;
};

@Component({
    selector: 'app-three-liner-playground',
    template: `<blui-three-liner
        [title]="inputs.title.value"
        [subtitle]="inputs.subtitle.value"
        [info]="inputs.info.value"
    >
    </blui-three-liner>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: ThreeLinerPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    open = true;
    knobListener: Subscription;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: ThreeLinerPlaygroundKnobs) => {
            this.inputs = updatedKnobs;
            this._emitNewCodeChanges();
        });
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
        const code = `<blui-three-liner${this._playgroundService.addOptionalProp(
            this.inputs,
            'title',
            true
        )}${this._playgroundService.addOptionalProp(
            this.inputs,
            'subtitle',
            true
        )}${this._playgroundService.addOptionalProp(this.inputs, 'info', true)}>
</blui-three-liner>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
