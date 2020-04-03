import { Component, Input, OnChanges } from '@angular/core';
export type IconSize = 'normal' | 'large';
export type FontSize = 'small' | 'normal';

@Component({
    selector: 'pxb-hero',
    template: `
        <div class="root">
            <div
                class="primary-container"
                [style.backgroundColor]="iconBackgroundColor"
                [class.large]="iconSize === 'large'"
            >
                <ng-content select="[primary]"></ng-content>
            </div>
            <span class="channel-value" [style.fontSize.rem]="fontSize === 'small' ? '1' : '1.25'">
                <ng-content *ngIf="value === undefined" select="pxb-channel-value"></ng-content>
                <pxb-channel-value *ngIf="value !== undefined" [value]="value" [units]="units">
                    <ng-content select="[secondary]"></ng-content>
                </pxb-channel-value>
            </span>
            <h5 class="label">{{ label }}</h5>
        </div>
    `,
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnChanges {
    @Input() color: string;
    @Input() label: string;
    @Input() value: string;
    @Input() units: string;
    @Input() iconSize: IconSize = 'normal';
    @Input() fontSize: FontSize = 'normal';
    @Input() iconBackgroundColor: string;
    iSize = 36;

    // We can't support dynamic iconSize w/ px-blue icons until https://github.com/angular/components/issues/5188 is fixed
    ngOnChanges(): void {
        this.iSize = this.iconSize === 'large' ? 72 : 36;
    }
}
