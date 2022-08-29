import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
    selector: 'app-number-knob',
    template: `
        <div style="position: relative">
            <div
                style="opacity: 0; z-index: 2; width: 310px; height: 60px; position: absolute"
                (click)="isOpen = true"
            ></div>
            <mat-form-field appearance="fill" style="margin-bottom: 1rem" #input>
                <mat-label>{{ label }}: string</mat-label>
                <mat-hint>{{ hint }}</mat-hint>
                <input
                    type="number"
                    [max]="max"
                    [min]="min"
                    cdkOverlayOrigin
                    #trigger="cdkOverlayOrigin"
                    [class.hiddenArrows]="isOpen"
                    matInput
                    [(ngModel)]="value"
                    (ngModelChange)="valueChange.emit($event)"
                    [ngModelOptions]="{ standalone: true }"
                />
            </mat-form-field>
        </div>

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
                        style="width: 334px"
                        [(ngModel)]="value"
                        [min]="min"
                        [max]="max"
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
    @Input() value;
    @Input() hint;
    @Input() label;
    @Output() valueChange = new EventEmitter<number>();

    isOpen: boolean;

    updateValue(e: MatSliderChange): void {
        this.value = e.value;
        this.valueChange.emit(e.value);
    }

    clickedBackdrop(): void {
        this.isOpen = false;
    }
}
