import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-text-knob',
    template: `
        <mat-form-field appearance="fill" style="margin-bottom: 1rem">
            <mat-label>{{ label }}: string</mat-label>
            <mat-hint>{{ hint }}</mat-hint>
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
    @Input() label: string;
    @Input() hint: string;
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();
}
