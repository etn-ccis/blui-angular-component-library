import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type ListItemTagPlaygroundKnobs = {
    label: Knob;
    backgroundColor: Knob;
    fontColor: Knob;
};

@Component({
    selector: 'app-list-item-tag-playground',
    template: `<blui-list-item-tag
        [label]="inputs.label.value"
        [fontColor]="inputs.fontColor.value"
        [backgroundColor]="inputs.backgroundColor.value"
    >
    </blui-list-item-tag> `,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: ListItemTagPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: ListItemTagPlaygroundKnobs) => {
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
        const code = `<blui-list-item-tag label="${this.inputs.label.value}"${this._playgroundService.addOptionalProp(
            this.inputs,
            'fontColor',
            true
        )}${this._playgroundService.addOptionalProp(this.inputs, 'backgroundColor', true)}></blui-list-item-tag>`;
        return this._playgroundService.removeEmptyLines(code);
    }
}
