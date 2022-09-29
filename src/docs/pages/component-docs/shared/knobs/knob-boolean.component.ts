import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-boolean-knob',
    template: `
        <div style="margin-bottom: 1rem; margin-left: -1rem">
            <mat-checkbox style="margin-left: 1rem" [(ngModel)]="value" (ngModelChange)="valueChange.emit(value)"
                >{{ label }}<span class="type">: boolean{{ isRequired ? '*' : ''}}</span>
            </mat-checkbox>
            <div class="knob-boolean-hint mat-caption" style="padding-left: 2.5rem">{{ hint }}</div>
        </div>
    `,
})
export class KnobBooleanComponent {
    @Input() label;
    @Input() value: boolean;
    @Input() hint: boolean;
    @Input() isRequired: boolean;
    @Output() valueChange = new EventEmitter<boolean>();
}
