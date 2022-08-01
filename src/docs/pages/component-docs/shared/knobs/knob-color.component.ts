import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-color-knob',
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{ label }}: color</mat-label>
            <input
                matInput
                [(ngModel)]="value"
                (ngModelChange)="valueChange.emit($event)"
                [ngModelOptions]="{ standalone: true }"
            />
            <mat-icon matSuffix [style.color]="value"
                      [cpPosition]="'bottom'"
                      [cpPositionOffset]="'-750px'"
                      [cpPositionRelativeToArrow]="true"
                      (colorPickerChange)="valueChange.emit($event)"
                      [(colorPicker)]="value">palette</mat-icon>
        </mat-form-field>
    `,
})
export class KnobColorComponent {
    @Input() value;
    @Input() label;
    @Output() valueChange = new EventEmitter<string>();
}
