import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-select-knob',
    template: `
        <mat-form-field appearance="fill" style="margin-bottom: 1rem">
            <mat-label>{{ label }}: string</mat-label>
            <mat-hint>{{ hint }}</mat-hint>
            <mat-select (valueChange)="valueChange.emit($event)" [(value)]="value" [formControl]="control">
                <mat-option *ngFor="let option of options" [value]="option" [class.emptySelectOption]="!option">
                    <ng-container *ngIf="!option">
                        <i>(Empty)</i>
                    </ng-container>
                    <ng-container *ngIf="option">
                        {{ option }}
                    </ng-container>
                </mat-option>
            </mat-select>
        </mat-form-field>
    `,
})
export class KnobSelectComponent {
    @Input() options: string[];
    @Input() isRequired: boolean;
    @Input() value;
    @Input() hint;
    @Input() label;
    @Output() valueChange = new EventEmitter<string>();
    control: FormControl;

    ngOnInit(): void {
        this.control = new FormControl('', [this.isRequired ? Validators.required : undefined]);
    }
}
