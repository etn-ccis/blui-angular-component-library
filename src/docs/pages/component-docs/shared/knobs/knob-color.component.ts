import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-color-knob',
    template: `
        <div style="position: relative">
            <mat-form-field appearance="fill" style="margin-bottom: 1rem" blui-input>
                <mat-label>{{ label }}: string</mat-label>
                <mat-hint>{{ hint }}</mat-hint>
                <mat-error *ngIf="colorInput.errors?.['colorInvalid']"> Color value not recognized </mat-error>
                <input matInput [formControl]="colorInput" (ngModelChange)="updateValue($event)" />
                <button
                    mat-icon-button
                    matSuffix
                    style="cursor: pointer; padding-bottom: 4px; margin-right: 0;"
                    [style.marginTop.px]="hasValidColor ? -4 : 0"
                    [style.borderBottomColor]="value"
                    [cpPosition]="'bottom'"
                    [cpPositionOffset]="'-750px'"
                    [cpPositionRelativeToArrow]="true"
                    (colorPickerChange)="updateValue($event)"
                    [(colorPicker)]="value"
                >
                    <mat-icon>{{ hasValidColor ? 'colorize' : 'question_mark' }}</mat-icon>
                </button>
            </mat-form-field>
            <div
                class="divider-border"
                *ngIf="hasValidColor"
                style="position: absolute; z-index: 3; width: 40px; height: 8px; top: 40px; right: 12px; box-sizing: border-box"
                [style.backgroundColor]="value"
            ></div>
        </div>
    `,
})
export class KnobColorComponent {
    @Input() value;
    @Input() hint;
    @Input() label;
    @Output() valueChange = new EventEmitter<string>();

    hasValidColor: boolean;
    colorInput = new FormControl('', []);

    ngOnInit(): void {
        this.colorInput = new FormControl(this.value, []);
        this.colorInput.markAsTouched();
        this.hasValidColor = this._checkValidColor();
    }

    updateValue(e: string): void {
        this.value = e;
        this.valueChange.emit(e);
        this.hasValidColor = this._checkValidColor();
        if (this.hasValidColor) {
            this.colorInput.setErrors(null);
        } else {
            this.colorInput.setErrors({ colorInvalid: true });
        }
    }

    private _checkValidColor(): boolean {
        if (!this.value) {
            return true;
        }

        const s = new Option().style;
        s.color = this.value;
        const valid = s.color !== '';
        return valid;
    }
}
