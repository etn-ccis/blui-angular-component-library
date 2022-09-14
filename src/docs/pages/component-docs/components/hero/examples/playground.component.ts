import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type HeroPlaygroundKnobs = {
    label: Knob;

    // Optional
    unitSpace: Knob;
    value: Knob;
    iconSize: Knob;
    units: Knob;

    // Other
    showSecondary: Knob;
    showPrimary: Knob;
};

@Component({
    selector: 'app-hero-playground',
    template: `<blui-hero
        [label]="inputs.label.value"
        [unitSpace]="inputs.unitSpace.value"
        [units]="inputs.units.value"
        [value]="inputs.value.value"
        [iconSize]="inputs.iconSize.value"
    >
        <i blui-primary class="blui-fan" *ngIf="inputs.showPrimary.value"></i>
        <mat-icon blui-secondary *ngIf="inputs.showSecondary.value">trending_up</mat-icon>
    </blui-hero>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: HeroPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: HeroPlaygroundKnobs) => {
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
        const code = `<blui-hero
    ${this._playgroundService.addOptionalProp(this.inputs, 'unitSpace')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'units')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'value')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'iconSize')}
    [label]="${this.inputs.label.value}">
    ${this.inputs.showPrimary.value ? '<i blui-primary class="blui-fan"></i>' : ''}
    ${this.inputs.showSecondary.value ? '<mat-icon blui-secondary>trending_up</mat-icon>' : ''}
</blui-hero>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
