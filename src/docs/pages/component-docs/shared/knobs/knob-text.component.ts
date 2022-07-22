import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-text-knob',
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{ label }}: string</mat-label>
            <input
                matInput
                [(ngModel)]="value"
                (ngModelChange)="valueChange.emit($event)"
                [ngModelOptions]="{ standalone: true }"
            />
        </mat-form-field>
    `,
})
export class KnobTextComponent {
    @Input() value;
    @Input() label;
    @Output() valueChange = new EventEmitter<string>();
}
