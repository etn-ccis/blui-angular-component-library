import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatLegacySliderChange as MatSliderChange } from '@angular/material/legacy-slider';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-number-knob',
    template: `
        <mat-form-field appearance="fill" style="margin-bottom: 1rem" #input (click)="isOpen = true" [class]="label">
            <mat-label>{{ label }}: number</mat-label>
            <mat-hint *ngIf="isRequired && value">{{ hint }}</mat-hint>
            <mat-hint *ngIf="isRequired && !value">{{ label }} is required</mat-hint>
            <mat-hint *ngIf="!isRequired">{{ hint }}</mat-hint>
            <input
                type="number"
                [max]="max"
                [min]="min"
                cdkOverlayOrigin
                #trigger="cdkOverlayOrigin"
                [class.hiddenArrows]="true"
                [formControl]="control"
                matInput
                (ngModelChange)="valueChange.emit($event)"
            />
        </mat-form-field>

        <ng-template
            cdkConnectedOverlay
            [cdkConnectedOverlayOrigin]="trigger"
            [cdkConnectedOverlayOpen]="isOpen"
            cdkConnectedOverlayBackdropClass="number-knob-backdrop"
            [cdkConnectedOverlayHasBackdrop]="true"
            (backdropClick)="clickedBackdrop()"
        >
            <div style="padding-top: 12px">
                <div style="margin-left: -16px; padding: 0 8px" class="slider-knob-overlay divider-border">
                    <mat-slider
                        style="width: 332px"
                        [(ngModel)]="value"
                        [min]="min"
                        [max]="max"
                        [tickInterval]="tickInterval"
                        [step]="step"
                        (input)="updateValue($event)"
                    ></mat-slider>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            /* Chrome, Safari, Edge, Opera */
            .hiddenArrows::-webkit-outer-spin-button,
            .hiddenArrows::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            /* Firefox */
            .hiddenArrows[type='number'] {
                -moz-appearance: textfield;
            }
        `,
    ],
})
export class KnobNumberComponent {
    @Input() max: number;
    @Input() min: number;
    @Input() tickInterval: number;
    @Input() step: number;
    @Input() value;
    @Input() hint;
    @Input() label;
    @Input() isRequired: boolean;
    @Output() valueChange = new EventEmitter<number>();
    control: FormControl;

    isOpen: boolean;

    ngOnInit(): void {
        this.control = new FormControl<number | null>(this.value, this.isRequired ? [Validators.required] : []);
        this.control.markAsTouched();
    }

    updateValue(e: MatSliderChange): void {
        this.value = e.value;
        this.control.setValue(e.value);
        this.valueChange.emit(e.value);
    }

    clickedBackdrop(): void {
        this.isOpen = false;
    }
}
