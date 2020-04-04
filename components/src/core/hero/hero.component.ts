import {
    AfterContentChecked,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild
} from '@angular/core';
export type IconSize = 'normal' | 'large';
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
    @Input() iconBackgroundColor: string;
    @ViewChild('primaryContainer', {static: false}) primaryContainer: ElementRef;
    iSize = 36;
    iconString = '';

    // We can't support dynamic iconSize w/ px-blue icons until https://github.com/angular/components/issues/5188 is fixed
    ngOnChanges(): void {
        if (this.iconSize === 'large') {
            this.iSize = 72;
        } else if (this.iconSize === 'normal') {
            this.iSize = 36;
        } else {
            this.iSize = parseInt(this.iconSize, 10);
        }
    }

    /* https://stackoverflow.com/questions/47306357/angular2-detect-changes-in-ng-content */
    ngAfterContentChecked(): void {
        if (!this.primaryContainer) {
            return;
        }

        const c = this.primaryContainer.nativeElement.innerHTML;
        if (c !== this.iconString) {
            this.iconString = c;
            const path = this.primaryContainer.nativeElement.querySelector('div mat-icon[svgIcon] path') ||
                this.primaryContainer.nativeElement.querySelector('div mat-icon[svgicon] path');

            //const svg2 = this.primaryContainer.nativeElement.querySelector('div mat-icon[svgIcon] svg') ||
            //    this.primaryContainer.nativeElement.querySelector('div mat-icon[svgicon] svg');
            //console.log(svg2);
            if (path) {
                const boundingRect = path.getBoundingClientRect();
                const longestSide = Math.max(boundingRect.height, boundingRect.width);
                const scaleAmount = this.iSize / longestSide;
                const svg = this.primaryContainer.nativeElement.querySelector('div mat-icon[svgIcon] svg') ||
                    this.primaryContainer.nativeElement.querySelector('div mat-icon[svgicon] svg');
                svg.style.setProperty('transform', `scale(${scaleAmount})`);
                svg.style.setProperty('transform-origin', 'top left');
            }
        }
    }
}
