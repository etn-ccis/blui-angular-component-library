import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-select-knob',
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{ label }}: string</mat-label>
            <mat-select (valueChange)="valueChange.emit($event)">
                <mat-option *ngFor="let options of options" [value]="options">
                    {{options}}
                </mat-option>
            </mat-select>
        </mat-form-field>
    `,
})
export class KnobSelectComponent {
    @Input() options: string[];
    @Input() value;
    @Input() label;
    @Output() valueChange = new EventEmitter<string>();
}
