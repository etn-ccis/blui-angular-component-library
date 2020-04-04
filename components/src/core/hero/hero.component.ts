import { AfterContentChecked, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
export type IconSize = 'small' | 'normal' | 'large';
export type FontSize = 'small' | 'normal';

@Component({
    selector: 'pxb-hero',
    template: `
        <div class="root">
            <div
                class="primary-container"
                #primaryContainer
                [style.backgroundColor]="iconBackgroundColor"
                [style.lineHeight.px]="iSize"
                [style.fontSize.px]="iSize"
                [style.width.px]="iSize"
                [style.height.px]="iSize"
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
export class HeroComponent implements OnChanges, AfterContentChecked {
    @Input() color: string;
    @Input() label: string;
    @Input() value: string;
    @Input() units: string;
    @Input() iconSize: IconSize = 'normal';
    @Input() fontSize: FontSize = 'normal';
    @Input() svgScaling = true;
    @Input() iconBackgroundColor: string;
    @ViewChild('primaryContainer', { static: false }) primaryContainer: ElementRef;

    iSize = 36;
    iconString: string;

    // We can't support dynamic iconSize w/ px-blue icons until https://github.com/angular/components/issues/5188 is fixed
    ngOnChanges(): void {
        if (this.iconSize === 'large') {
            this.iSize = 72;
        } else if (this.iconSize === 'normal') {
            this.iSize = 36;
        } else if (this.iconSize === 'small') {
            this.iSize = 24;
        } else {
            this.iSize = parseInt(this.iconSize, 10);
        }
    }

    // Used to listen for changes in the primary icon content.
    ngAfterContentChecked(): void {
        if (!this.primaryContainer || !this.svgScaling) {
            return;
        }

        // If the icon content did not change, stop.
        const iconHtml = this.primaryContainer.nativeElement.innerHTML;
        if (iconHtml === this.iconString) {
            return;
        }

        // Update icon data.
        this.iconString = iconHtml;

        // Search icon inner content for presence of a svgIcon.
        const paths =
            this.primaryContainer.nativeElement.querySelectorAll('div mat-icon[svgIcon] path') ||
            this.primaryContainer.nativeElement.querySelectorAll('div mat-icon[svgicon] path');

        // Search through all svg elements, find largest element.  Typically this will be the svg background element.
        // This will be used to determine how much we have to scale the svg.
        if (paths && paths.length > 0) {
            let biggestBox = 0;
            for (const path of paths) {
                const boundingRect = path.getBoundingClientRect();
                const longestSide = Math.max(boundingRect.height, boundingRect.width);
                biggestBox = Math.max(biggestBox, longestSide);
            }

            const scaleAmount = this.iSize / biggestBox;
            const svg =
                this.primaryContainer.nativeElement.querySelector('div mat-icon[svgIcon] svg') ||
                this.primaryContainer.nativeElement.querySelector('div mat-icon[svgicon] svg');

            svg.style.setProperty('transform', `scale(${scaleAmount})`);
            svg.style.setProperty('transform-origin', 'top left');
        }
    }
}
