import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { PlaygroundService } from '../../../../../../services/playground/playground.service';
import { Subscription } from 'rxjs';
import { Knob } from '../../../../shared/scaffold/scaffold.component';

export type NavItemPlaygroundKnobs = {
    title: Knob;
    subtitle: Knob;
    chevron: Knob;
    divider: Knob;
    activeItemBackgroundShape: Knob;
    hidden: Knob;
    hidePadding: Knob;
    ripple: Knob;
    statusColor: Knob;
    addIcon: Knob;
    selected: Knob;
};

@Component({
    selector: 'app-nav-item-playground',
    template: ` <blui-drawer *ngIf="inputs">
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item
                    [activeItemBackgroundShape]="inputs.activeItemBackgroundShape.value"
                    [chevron]="inputs.chevron.value"
                    [divider]="inputs.divider.value"
                    [hidden]="inputs.hidden.value"
                    [hidePadding]="inputs.hidePadding.value"
                    [ripple]="inputs.ripple.value"
                    [statusColor]="inputs.statusColor.value"
                    [subtitle]="inputs.subtitle.value"
                    [title]="inputs.title.value"
                    [selected]="inputs.selected.value"
                >
                    <mat-icon *ngIf="inputs.addIcon.value" blui-icon>home</mat-icon>
                </blui-drawer-nav-item>
                <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </blui-drawer-body>
    </blui-drawer>`,
})
export class PlaygroundComponent implements OnDestroy {
    @Input() inputs: NavItemPlaygroundKnobs;
    @Output() codeChange = new EventEmitter<string>();

    knobListener: Subscription;

    constructor(private readonly _playgroundService: PlaygroundService) {
        this.knobListener = this._playgroundService.knobChange.subscribe((updatedKnobs: NavItemPlaygroundKnobs) => {
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

    private _addOptionalMenuIcon(): string {
        return this.inputs.addIcon.value ? '\n\t\t\t\t<mat-icon blui-icon>home</mat-icon>' : '';
    }

    private _createGeneratedCode(): string {
        const code = `
<blui-drawer>
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item 
                ${this._playgroundService.addOptionalProp(this.inputs, 'title')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'subtitle')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'statusColor')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'activeItemBackgroundShape')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'chevron')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'divider')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'hidePadding')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'hidden')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'ripple')}
                ${this._playgroundService.addOptionalProp(this.inputs, 'selected')}
            >
                ${this._addOptionalMenuIcon()}
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>`;

        return this._playgroundService.removeEmptyLines(code);
    }
}
