import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type ChannelValuePlaygroundKnobs = {
    value: Knob;

    units: Knob;
    unitSpace: Knob;
    prefix: Knob;

    // Optional
    showIcon: Knob;
};

@Component({
    selector: 'app-channel-value-playground',
    template: `<blui-channel-value
        [value]="inputs.value.value"
        [units]="inputs.units.value"
        [prefix]="inputs.prefix.value"
        [unitSpace]="inputs.unitSpace.value"
    >
        <mat-icon *ngIf="inputs.showIcon.value">check_circle</mat-icon>
    </blui-channel-value>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: ChannelValuePlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe(
            (updatedKnobs: ChannelValuePlaygroundKnobs) => {
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
        const code = `<blui-channel-value value="${this.inputs.value.value}"${this._playgroundService.addOptionalProp(
            this.inputs,
            'units',
            true
        )}${this._playgroundService.addOptionalProp(this.inputs, 'prefix', true)} unitSpace="${
            this.inputs.unitSpace.value
        }">
    ${this.inputs.showIcon.value ? '<mat-icon>check_circle</mat-icon>' : ''}
</blui-channel-value>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
