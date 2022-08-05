import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { DrawerComponent } from '@brightlayer-ui/angular-components';
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
    template: ` <blui-drawer style="width: 250px">
        <blui-drawer-header 
                [color]="inputs.color.value"
                [divider]="inputs.divider.value"
                [subtitle]="inputs.subtitle.value"
                [title]="inputs.title.value"
        >
            <button blui-icon mat-icon-button *ngIf="inputs.showIcon.value">
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

    @ViewChild(DrawerComponent) drawer;

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: HeaderPlaygroundKnobs) => {
            this.inputs = updatedKnobs;
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    ngAfterViewInit(): void {
        this.codeChange.emit(this._createGeneratedCode());
        this.drawer.openOnHover = false;
    }

    ngOnDestroy(): void {
        if (this.knobListener) {
            this.knobListener.unsubscribe();
        }
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-drawer style="width: 250px">
    <blui-drawer-header
        ${this._playgroundService.addOptionalProp(this.inputs, 'title')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'subtitle')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'color')}
        ${this._playgroundService.addOptionalProp(this.inputs, 'divider')}
    >
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
