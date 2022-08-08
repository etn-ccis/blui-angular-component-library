import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlaygroundService } from '../../../../../../services/playground/playground.service';
import { Subscription } from 'rxjs';
import { Knob } from '../../../../shared/scaffold/scaffold.component';

export type SubheaderPlaygroundKnobs = {
    divider: Knob;
    hideContentOnCollapse: Knob;
};

@Component({
    selector: 'app-subheader-playground',
    template: `<blui-drawer *ngIf="inputs" [open]="open">
        <blui-drawer-header title="Header Title">
            <button blui-icon mat-icon-button (click)="toggleDrawer()">
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header>
        <blui-drawer-subheader
            [divider]="inputs.divider.value"
            [hideContentOnCollapse]="inputs.hideContentOnCollapse.value"
        >
            <div style="padding: 16px; min-width: 250px">Custom Content Here</div>
        </blui-drawer-subheader>
    </blui-drawer>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: SubheaderPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    open = true;
    knobListener: Subscription;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: SubheaderPlaygroundKnobs) => {
            this.inputs = updatedKnobs;
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    ngOnDestroy(): void {
        if (this.knobListener) {
            this.knobListener.unsubscribe();
        }
    }

    toggleDrawer(): void {
        this.open = !this.open;
        this.codeChange.emit(this._createGeneratedCode());
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-drawer [open]="${this.open}">
    <blui-drawer-header title="Header Title">
        <button blui-icon mat-icon-button>
            <mat-icon>menu</mat-icon>
        </button>
    </blui-drawer-header>
    <blui-drawer-subheader${this._playgroundService.addOptionalProp(
        this.inputs,
        'divider',
        true
    )}${this._playgroundService.addOptionalProp(this.inputs, 'hideContentOnCollapse', true)}>
        <div style="padding: 16px; min-width: 250px">Custom Content Here</div>
    </blui-drawer-subheader>
</blui-drawer>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
