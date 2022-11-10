import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-text-knob',
    template: `
        <mat-form-field appearance="fill" style="margin-bottom: 1rem">
            <mat-label>{{ label }}: string</mat-label>
            <mat-hint *ngIf="isRequired && value">{{ hint }}</mat-hint>
            <mat-hint *ngIf="isRequired && !value">{{ label }} is required</mat-hint>
            <mat-hint *ngIf="!isRequired">{{ hint }}</mat-hint>
            <input matInput (ngModelChange)="valueChange.emit($event)" [formControl]="control" />
        </mat-form-field>
    `,
})
export class KnobTextComponent {
    @Input() label: string;
    @Input() isRequired: boolean;
    @Input() hint: string;
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();
    control: FormControl;

    ngOnInit(): void {
        this.control = new FormControl<string | null>(this.value, this.isRequired ? [Validators.required] : []);
        this.control.markAsTouched();
    }
}
