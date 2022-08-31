import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlaygroundService } from '../../../../../../services/playground/playground.service';
import { Subscription } from 'rxjs';
import { Knob } from '../../../../shared/scaffold/scaffold.component';

export type HeaderPlaygroundKnobs = {
    color: Knob;
    divider: Knob;
    subtitle: Knob;
    title: Knob;
    showIcon: Knob;
};

@Component({
    selector: 'app-header-playground',
    template: ` <blui-drawer>
        <blui-drawer-header
            [color]="inputs.color.value"
            [divider]="inputs.divider.value"
            [subtitle]="inputs.subtitle.value"
            [title]="inputs.title.value"
        >
            <button blui-icon mat-icon-button *ngIf="inputs.showIcon.value" (click)="open = !open">
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header>
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item title="Item 1"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </blui-drawer-body>
    </blui-drawer>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: HeaderPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: HeaderPlaygroundKnobs) => {
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

    private _getMenuIcon(): string {
        if (this.inputs.showIcon.value) {
            return `
        <button blui-icon mat-icon-button>
            <mat-icon>menu</mat-icon>
        </button>`;
        }
        return '';
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-drawer>
    <blui-drawer-header
        ${this._playgroundService.addOptionalProp(this.inputs, 'title')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'subtitle')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'color')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'divider')}
    >
    ${this._getMenuIcon()}
    </blui-drawer-header>
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item title="Item 1"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
