import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlaygroundService } from '../../../../../../services/playground/playground.service';
import { Subscription } from 'rxjs';
import { Knob } from '../../../../shared/scaffold/scaffold.component';

export type DrawerLayoutPlaygroundProps = {
    width: Knob;
    variant: Knob;
};

@Component({
    selector: 'app-layout-playground',
    template: `<blui-drawer-layout
        [variant]="inputs.variant.value"
        [width]="inputs.width.value"
        (backdropClick)="open = true"
    >
        <blui-drawer blui-drawer [open]="open">
            <blui-drawer-header title="Title" *ngIf="inputs.variant.value !== 'rail'">
                <button mat-icon-button blui-icon (click)="open = !open">
                    <mat-icon>menu</mat-icon>
                </button>
            </blui-drawer-header>
            <blui-drawer-body>
                <blui-drawer-nav-group>
                    <blui-drawer-nav-item title="Dashboard">
                        <mat-icon blui-icon>dashboard</mat-icon>
                    </blui-drawer-nav-item>
                    <blui-drawer-nav-item title="Locations">
                        <mat-icon blui-icon>place</mat-icon>
                    </blui-drawer-nav-item>
                    <blui-drawer-nav-item title="Legal">
                        <mat-icon blui-icon>gavel</mat-icon>
                    </blui-drawer-nav-item>
                </blui-drawer-nav-group>
            </blui-drawer-body>
        </blui-drawer>
        <div blui-content>
            <mat-toolbar color="primary" *ngIf="inputs.variant.value === 'temporary'">
                <button style="margin-left: -8px" mat-icon-button blui-icon (click)="open = !open">
                    <mat-icon>menu</mat-icon>
                </button>
                <div style="margin-left: 8px">Toolbar</div>
            </mat-toolbar>
            <div style="padding: 1rem">App Content Here.</div>
        </div>
    </blui-drawer-layout>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: DrawerLayoutPlaygroundProps;
    @Output() codeChange = new EventEmitter<string>();

    open = true;
    knobListener: Subscription;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe(
            (updatedKnobs: DrawerLayoutPlaygroundProps) => {
                this.inputs = updatedKnobs;
                this.codeChange.emit(this._createGeneratedCode());
            }
        );
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
        const code = ``;

        return this._playgroundService.removeEmptyLines(code);
    }
}
