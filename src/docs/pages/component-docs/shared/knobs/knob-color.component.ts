import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-color-knob',
    template: `
        <div style="position: relative">
            <mat-form-field appearance="fill" style="margin-bottom: 1rem" blui-input>
                <mat-label>{{ label }}: color</mat-label>
                <mat-hint>{{ hint }}</mat-hint>
                <input
                    matInput
                    [(ngModel)]="value"
                    (ngModelChange)="valueChange.emit($event)"
                    [ngModelOptions]="{ standalone: true }"
                />
                <button
                    mat-icon-button
                    matSuffix
                    style="cursor: pointer; padding-bottom: 4px; margin-right: 0;"
                    [style.marginTop.px]="isValidColor() ? -4 : 0"
                    [style.borderBottomColor]="value"
                    [cpPosition]="'bottom'"
                    [cpPositionOffset]="'-750px'"
                    [cpPositionRelativeToArrow]="true"
                    (colorPickerChange)="valueChange.emit($event)"
                    [(colorPicker)]="value"
                >
                    <mat-icon>{{ isValidColor() ? 'colorize' : 'question_mark' }}</mat-icon>
                </button>
            </mat-form-field>
            <div
                class="divider-border"
                *ngIf="isValidColor()"
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

    isValidColor(): boolean {
        const s = new Option().style;
        s.color = this.value;
        return s.color !== '';
    }
}
