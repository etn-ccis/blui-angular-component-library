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
    showCustomContent: Knob;
};

@Component({
    selector: 'app-header-playground',
    template: ` <blui-drawer style="width: 250px">
        <blui-drawer-header
            [color]="inputs.color.value"
            [divider]="inputs.divider.value"
            [subtitle]="inputs.showCustomContent.value ? undefined : inputs.subtitle.value"
            [title]="inputs.showCustomContent.value ? undefined : inputs.title.value"
        >
            <button blui-icon mat-icon-button *ngIf="inputs.showIcon.value">
                <mat-icon>menu</mat-icon>
            </button>
            <div blui-title-content *ngIf="inputs.showCustomContent.value">
                <div class="mat-h4" style="margin: 12px 0 -8px 0">Customizable</div>
                <div class="mat-h2" style="margin: 0">Header Content</div>
            </div>
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

    private _getMenuIcon(): string {
        if (this.inputs.showIcon.value) {
            return `
        <button blui-icon mat-icon-button>
            <mat-icon>menu</mat-icon>
        </button>`;
        }
        return '';
    }

    private _getCustomHeaderContent(): string {
        if (this.inputs.showCustomContent.value) {
            return `
        <div blui-title-content>
            <div class="mat-h4" style="margin: 12px 0 -8px 0">Customizable</div>
            <div class="mat-h2" style="margin: 0">Header Content</div>
        </div>`;
        }
        return '';
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-drawer style="width: 250px">
    <blui-drawer-header
        ${this.inputs.showCustomContent.value ? '' : this._playgroundService.addOptionalProp(this.inputs, 'title')}
        ${this.inputs.showCustomContent.value ? '' : this._playgroundService.addOptionalProp(this.inputs, 'subtitle')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'color')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'divider')}
    >
    ${this._getMenuIcon()}
    ${this._getCustomHeaderContent()}
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
