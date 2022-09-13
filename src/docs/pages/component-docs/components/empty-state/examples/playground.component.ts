import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type EmptyStatePlaygroundKnobs = {
    icon: Knob;

    title: Knob;
    description: Knob;

    // Optional
    showAction: Knob;
};

@Component({
    selector: 'app-empty-state-playground',
    template: `<blui-empty-state [title]="inputs.title.value" [description]="inputs.description.value">
        <mat-icon blui-empty-icon>{{ inputs.icon.value }}</mat-icon>
        <button blui-actions blui-inline mat-stroked-button color="primary" *ngIf="inputs.showAction.value">
            <mat-icon>add</mat-icon>
            <span>Add Device</span>
        </button>
    </blui-empty-state>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: EmptyStatePlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: EmptyStatePlaygroundKnobs) => {
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

    private _getActions(): string {
        if (this.inputs.showAction.value) {
            return `<button blui-actions blui-inline mat-stroked-button color="primary">
        <mat-icon>add</mat-icon>
        <span>Add Device</span>
    </button>`;
        }
        return '';
    }

    private _createGeneratedCode(): string {
        const code = `<blui-empty-state 
    ${this._playgroundService.addOptionalProp(this.inputs, 'description')}
    title="${this.inputs.title.value}">
    <mat-icon blui-empty-icon>${this.inputs.icon.value}</mat-icon>
    ${this._getActions()}
</blui-empty-state>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
