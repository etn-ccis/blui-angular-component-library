import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaygroundService } from '../../../../../services/playground/playground.service';
import { Knob } from '../../../shared/scaffold/scaffold.component';

export type ToolbarMenuPlaygroundKnobs = {
    label: Knob;
    menuItemsCount: Knob;
    showIcon: Knob;
};

@Component({
    selector: 'app-toolbar-menu-playground',
    template: `<blui-toolbar-menu [label]="inputs.label.value">
        <mat-icon blui-icon *ngIf="inputs.showIcon.value">home</mat-icon>
        <ng-container blui-toolbar-menu-items>
            <button mat-menu-item>London</button>
            <button mat-menu-item *ngIf="inputs.menuItemsCount.value > 1">New York</button>
            <button mat-menu-item *ngIf="inputs.menuItemsCount.value > 2">New Haven</button>
            <button mat-menu-item *ngIf="inputs.menuItemsCount.value > 3">Cleveland</button>
        </ng-container>
    </blui-toolbar-menu> `,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: ToolbarMenuPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;
    open = true;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: ToolbarMenuPlaygroundKnobs) => {
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

    private _getOptionalMenuItems(): string {
        if (this.inputs.menuItemsCount.value > 3) {
            return `<button mat-menu-item>New York</button>
        <button mat-menu-item>New Haven</button>
        <button mat-menu-item>Cleveland</button>`;
        }
        if (this.inputs.menuItemsCount.value > 2) {
            return `<button mat-menu-item>New York</button>
        <button mat-menu-item>New Haven</button>`;
        }
        if (this.inputs.menuItemsCount.value > 1) {
            return `<button mat-menu-item>New York</button>`;
        }
        return '';
    }

    private _createGeneratedCode(): string {
        const code = `<blui-toolbar-menu label="${this.inputs.label.value}">
    ${this.inputs.showIcon.value ? '<mat-icon blui-icon>home</mat-icon>' : ''}
    <ng-container blui-toolbar-menu-items>
        <button mat-menu-item>London</button>
        ${this._getOptionalMenuItems()}
    </ng-container>
</blui-toolbar-menu>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
