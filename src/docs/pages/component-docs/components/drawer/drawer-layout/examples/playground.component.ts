import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlaygroundService } from '../../../../../../services/playground/playground.service';
import { Subscription } from 'rxjs';
import { Knob } from '../../../../shared/scaffold/scaffold.component';

type MultiComponentKnobs = DrawerLayoutPlaygroundProps & { condensed: Knob; disableRailTooltip: Knob };

export type DrawerLayoutPlaygroundProps = {
    width: Knob;
    variant: Knob;
};

@Component({
    selector: 'app-layout-playground',
    template: `<blui-drawer-layout
        [variant]="inputs.variant.value"
        [width]="inputs.width.value"
        (backdropClick)="toggleDrawer()"
    >
        <blui-drawer
            blui-drawer
            [open]="open"
            [condensed]="inputs.condensed.value"
            [disableRailTooltip]="inputs.disableRailTooltip.value"
        >
            <blui-drawer-header title="Title" *ngIf="inputs.variant.value !== 'rail'">
                <button mat-icon-button blui-icon (click)="toggleDrawer()">
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
                <button style="margin-left: -8px" mat-icon-button blui-icon (click)="toggleDrawer()">
                    <mat-icon>menu</mat-icon>
                </button>
                <div style="margin-left: 8px">Toolbar</div>
            </mat-toolbar>
            <div style="padding: 1rem">App Content Here.</div>
        </div>
    </blui-drawer-layout>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: MultiComponentKnobs;
    @Output() codeChange = new EventEmitter<string>();

    open = true;
    knobListener: Subscription;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: MultiComponentKnobs) => {
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

    toggleDrawer(): void {
        if (this.inputs.variant.value === 'permanent') {
            return;
        }
        this.open = !this.open;
        this._emitNewCodeChanges();
    }

    private _emitNewCodeChanges(): void {
        setTimeout(() => {
            this.codeChange.emit(this._createGeneratedCode());
        });
    }

    private _renderOptionalToolbar(): string {
        if (this.inputs.variant.value === 'temporary') {
            return `
        <mat-toolbar color="primary">
            <button style="margin-left: -8px" mat-icon-button blui-icon (click)="open = !open">
                <mat-icon>menu</mat-icon>
            </button>
            <div style="margin-left: 8px">Toolbar</div>
        </mat-toolbar>`;
        }
        return '';
    }

    private _renderOptionalHeader(): string {
        if (this.inputs.variant.value !== 'rail') {
            return `
        <blui-drawer-header title="Title">
            <button mat-icon-button blui-icon (click)="open=!open">
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header>`;
        }
        return '';
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-drawer-layout${this._playgroundService.addOptionalProp(
            this.inputs,
            'variant',
            true
        )}${this._playgroundService.addOptionalProp(this.inputs, 'width', true)} (backdropClick)="open=false">
    <blui-drawer blui-drawer [open]="${this.open}"${this._playgroundService.addOptionalProp(
            this.inputs,
            'condensed',
            true
        )}${this._playgroundService.addOptionalProp(this.inputs, 'disableRailTooltip', true)}>
        ${this._renderOptionalHeader()}
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
        ${this._renderOptionalToolbar()}
        <div style="padding: 1rem">App Content Here.</div>
    </div>
</blui-drawer-layout>
`;
        return this._playgroundService.removeEmptyLines(code);
    }
}
