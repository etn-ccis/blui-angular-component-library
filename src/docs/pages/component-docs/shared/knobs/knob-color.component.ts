import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-color-knob',
    template: `
        <mat-form-field appearance="fill" style="margin-bottom: 1rem">
            <mat-label>{{ label }}: color</mat-label>
            <mat-hint>{{ hint }}</mat-hint>
            <input
                matInput
                [(ngModel)]="value"
                (ngModelChange)="valueChange.emit($event)"
                [ngModelOptions]="{ standalone: true }"
            />
            <mat-icon
                matSuffix
                style="cursor: pointer"
                [style.color]="value"
                [cpPosition]="'bottom'"
                [cpPositionOffset]="'-750px'"
                [cpPositionRelativeToArrow]="true"
                (colorPickerChange)="valueChange.emit($event)"
                [(colorPicker)]="value"
                >palette</mat-icon
            >
        </mat-form-field>
    `,
})
export class KnobColorComponent {
    @Input() value;
    @Input() hint;
    @Input() label;
    @Output() valueChange = new EventEmitter<string>();
}
