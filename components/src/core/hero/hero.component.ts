import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'pxb-hero',
    template: `
        <div class="pxb-hero">
            <div
                class="pxb-hero-primary-icon"
                [style.backgroundColor]="iconBackgroundColor"
                [class.large]="iconSize === 'large'"
                [style.height.px]="iSize"
                [style.width.px]="iSize"
                [style.font-size.px]="iSize"
            >
                <ng-content select="[primary]"></ng-content>
            </div>
            <span class="channel-value" [style.font-size.rem]="fontSize == 'small' ? '1' : '1.25'">
                <ng-content *ngIf="value === undefined" select="pxb-channel-value"></ng-content>
                <pxb-channel-value *ngIf="value !== undefined" [value]="value" [units]="units">
                    <ng-content select="[secondary]"></ng-content>
                </pxb-channel-value>
            </span>
            <h5 class="label">{{ label }}</h5>
        </div>
    `,
    styleUrls: ['./hero.component.scss'],
    inputs: ['color', 'label', 'value', 'units', 'fontSize', 'iconSize'],
})
export class HeroComponent implements OnInit {
    @Input() color: string;
    @Input() label: string;
    @Input() value: string;
    @Input() units: string;
    @Input() iconSize = 'normal';
    @Input() iSize = 36;
    @Input() fontSize = 'normal';
    @Input() iconBackgroundColor: string;

    ngOnInit(): void {
        // We can't support dynamic iconSize w/ px-blue icons until https://github.com/angular/components/issues/5188 is fixed
        this.iSize =
            this.iconSize === 'large'
                ? 72
                : this.iconSize === 'normal'
                ? 36
                : (this.iSize = Math.max(10, Math.min(72, parseInt(this.iconSize, 10))));
    }
}
