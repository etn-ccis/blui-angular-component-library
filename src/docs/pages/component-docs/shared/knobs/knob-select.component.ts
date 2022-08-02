import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-select-knob',
    template: `
        <mat-form-field appearance="fill" style="margin-bottom: 1rem">
            <mat-label>{{ label }}: string</mat-label>
            <mat-hint>{{ hint }}</mat-hint>
            <mat-select (valueChange)="valueChange.emit($event)" [(value)]="value">
                <mat-option *ngFor="let options of options" [value]="options">
                    {{ options }}
                </mat-option>
            </mat-select>
        </mat-form-field>
    `,
})
export class KnobSelectComponent {
    @Input() options: string[];
    @Input() value;
    @Input() hint;
    @Input() label;
    @Output() valueChange = new EventEmitter<string>();
}
