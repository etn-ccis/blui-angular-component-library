import { Component, Input, OnChanges } from '@angular/core';
export type IconSize = 'normal' | 'large' | number;
export type FontSize = 'small' | 'normal';

@Component({
    selector: 'pxb-hero',
    template: `
        <div class="root">
            <div
                class="primary-icon"
                [style.backgroundColor]="iconBackgroundColor"
                [class.large]="iconSize === 'large'"
                [style.height.px]="iSize"
                [style.width.px]="iSize"
                [style.font-size.px]="iSize"
            >
                <ng-content select="[primary]"></ng-content>
            </div>
            <span class="channel-value" [style.font-size.rem]="fontSize === 'small' ? '1' : '1.25'">
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
        this.iSize = this.iconSize === 'large' ? 72 : this.iconSize === 'normal' ? 36 : this.iconSize;
    }
}
