import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-boolean-knob',
    template: `
        <div style="margin-bottom: 1rem">
            <mat-checkbox style="margin-left: 1rem" [(ngModel)]="value" (ngModelChange)="valueChange.emit(value)">{{
                label
            }}</mat-checkbox>
            <div class="knob-boolean-hint mat-caption" style="padding-left: 1rem">{{ hint }}</div>
        </div>
    `,
})
export class KnobBooleanComponent {
    @Input() label;
    @Input() value: boolean;
    @Input() hint: boolean;
    @Output() valueChange = new EventEmitter<boolean>();
}
