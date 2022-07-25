import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-boolean-knob',
    template: `
        <div style="margin-bottom: 1.5rem">
            <mat-checkbox [(ngModel)]="value" (ngModelChange)="valueChange.emit(value)">{{ label }}</mat-checkbox>
        </div>
    `,
})
export class KnobBooleanComponent {
    @Input() label;
    @Input() value: boolean;
    @Output() valueChange = new EventEmitter<boolean>();
}
