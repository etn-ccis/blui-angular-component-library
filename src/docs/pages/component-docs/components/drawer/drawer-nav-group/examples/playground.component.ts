import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlaygroundService } from '../../../../../../services/playground/playground.service';
import { Subscription } from 'rxjs';
import { Knob } from '../../../../shared/scaffold/scaffold.component';

export type NavGroupPlaygroundKnobs = {
    divider: Knob;
    title: Knob;
};

@Component({
    selector: 'app-nav-group-playground',
    template: `
        <blui-drawer [open]="open">
            <blui-drawer-header title="Header Title">
                <button blui-icon mat-icon-button (click)="toggleDrawer()">
                    <mat-icon>menu</mat-icon>
                </button>
            </blui-drawer-header>
            <blui-drawer-body>
                <blui-drawer-nav-group  [divider]="inputs.divider.value"> 
                    <div blui-title-content>Custom Nav Group Title Content</div>
                    <blui-drawer-nav-item title="Nav Item 1">
                        <mat-icon blui-icon>looks_one</mat-icon>
                    </blui-drawer-nav-item>
                    <blui-drawer-nav-item title="Nav Item 2">
                        <mat-icon blui-icon>looks_two</mat-icon>
                    </blui-drawer-nav-item>
                </blui-drawer-nav-group>
            </blui-drawer-body>
        </blui-drawer>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: NavGroupPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    open = true;
    knobListener: Subscription;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: NavGroupPlaygroundKnobs) => {
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
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item title="Nav Item"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
