import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type InfoListItemPlaygroundKnobs = {
    //required
    title: Knob;

    //optional
    avatar: Knob;
    chevron: Knob;
    dense: Knob;
    disabled: Knob;
    divider: Knob;
    hidePadding: Knob;
    iconAlign: Knob;
    statusColor: Knob;
    wrapInfo: Knob;
    wrapSubtitle: Knob;
    wrapTitle: Knob;
    subtitle: Knob;
    info: Knob;

    //other
    showIcon: Knob;
};

@Component({
    selector: 'app-info-list-item-playground',
    template: `<blui-info-list-item
        [avatar]="inputs.avatar.value"
        [chevron]="inputs.chevron.value"
        [dense]="inputs.dense.value"
        [divider]="inputs.divider.value"
        [disabled]="inputs.disabled.value"
        [hidePadding]="inputs.hidePadding.value"
        [iconAlign]="inputs.iconAlign.value"
        [statusColor]="inputs.statusColor.value"
        [wrapInfo]="inputs.wrapInfo.value"
        [wrapSubtitle]="inputs.wrapSubtitle.value"
        [wrapTitle]="inputs.wrapTitle.value"
    >
        <mat-icon
            blui-icon
            *ngIf="inputs.showIcon.value"
            [style.color]="inputs.avatar.value ? 'white' : ''"
            [style.backgroundColor]="inputs.avatar.value ? inputs.statusColor.value : ''"
        >
            devices
        </mat-icon>
        <div blui-title>{{ inputs.title.value }}</div>
        <div blui-subtitle>{{ inputs.subtitle.value }}</div>
        <div blui-info>{{ inputs.info.value }}</div>
    </blui-info-list-item>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: InfoListItemPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe(
            (updatedKnobs: InfoListItemPlaygroundKnobs) => {
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

    private _getOptionalIcon(): string {
        if (this.inputs.showIcon.value) {
            if (this.inputs.avatar.value) {
                return `<mat-icon blui-icon style="color: white" [style.backgroundColor]="${this.inputs.statusColor.value}">devices</mat-icon>`;
            }
            return '<mat-icon blui-icon>devices</mat-icon>';
        }
        return '';
    }

    private _getOptionalSubtitle(): string {
        if (this.inputs.subtitle.value) {
            return `<div blui-subtitle>${this.inputs.subtitle.value}</mat-icon>`;
        }
        return '';
    }

    private _getOptionalInfo(): string {
        if (this.inputs.info.value) {
            return `<div blui-info>${this.inputs.info.value}</mat-icon>`;
        }
        return '';
    }

    private _createGeneratedCode(): string {
        const code = `<blui-info-list-item
    ${this._playgroundService.addOptionalProp(this.inputs, 'avatar')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'chevron')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'dense')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'divider')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'disabled')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'hidePadding')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'iconAlign')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'wrapInfo')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'wrapSubtitle')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'wrapTitle')}
    ${this._playgroundService.addOptionalProp(this.inputs, 'statusColor')}>
    ${this._getOptionalIcon()}
    <div blui-title>${this.inputs.title.value}</div>
    ${this._getOptionalSubtitle()}
    ${this._getOptionalInfo()}
</blui-info-list-item>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
