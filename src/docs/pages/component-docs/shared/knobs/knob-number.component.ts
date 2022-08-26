import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
    selector: 'app-number-knob',
    template: `
        <mat-form-field
            appearance="fill"
            style="margin-bottom: 1rem"
            (mouseenter)="isHoverInput = true"
            (mouseleave)="isHoverInput = false"
        >
            <mat-label>{{ label }}: string</mat-label>
            <mat-hint>{{ hint }}</mat-hint>
            <input
                type="number"
                [max]="max"
                [min]="min"
                cdkOverlayOrigin
                #trigger="cdkOverlayOrigin"
                matInput
                [(ngModel)]="value"
                (ngModelChange)="valueChange.emit($event)"
                [ngModelOptions]="{ standalone: true }"
                (click)="isOpen = true"
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
})
export class KnobNumberComponent {
    @Input() max: number;
    @Input() min: number;
    @Input() value;
    @Input() hint;
    @Input() label;
    @Output() valueChange = new EventEmitter<number>();

    isOpen: boolean;
    isHoverInput: boolean;

    updateValue(e: MatSliderChange): void {
        this.value = e.value;
    }

    clickedBackdrop(): void {
        console.log('hi');
        if (this.isHoverInput) {
            return;
        }
        this.isOpen = false;
    }
}
