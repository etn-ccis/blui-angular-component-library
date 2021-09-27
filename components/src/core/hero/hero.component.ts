import {
    AfterContentChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { requireInput } from '../../utils/utils';

/**
 * [Hero Component](https://pxblue-components.github.io/angular/?path=/info/components-hero--readme)
 *
 * The `<pxb-hero>` components are used to call attention to particular values that are of the most importance to the user.
 * These are typically displayed in a banner.
 */
@Component({
    selector: 'pxb-hero',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./hero.component.scss'],
    template: `
        <div class="pxb-hero-content">
            <div
                class="pxb-hero-primary-wrapper"
                #primaryContainer
                [style.backgroundColor]="iconBackgroundColor"
                [style.lineHeight.px]="iSize"
                [style.fontSize.px]="iSize"
                [style.width.px]="iSize"
                [style.height.px]="iSize"
                [class.pxb-hero-svgIcon]="hasMatSvgIcon"
            >
                <ng-content select="[pxb-primary]"></ng-content>
            </div>
            <span class="pxb-hero-channel-value-wrapper">
                <ng-content select="pxb-channel-value" *ngIf="value === undefined"></ng-content>
                <pxb-channel-value *ngIf="value !== undefined" [value]="value" [units]="units" [unitSpace]="unitSpace">
                    <ng-content select="[pxb-secondary]"></ng-content>
                </pxb-channel-value>
            </span>
            <h5 class="pxb-hero-label">{{ label }}</h5>
        </div>
    `,
    host: {
        class: 'pxb-hero',
    },
})
export class HeroComponent implements OnChanges, AfterViewInit, AfterContentChecked {
    /** Color of the hero icon */
    @Input() color: string;
    /** Color of the hero background */
    @Input() iconBackgroundColor: string;
    /** The size of the primary icon (10-48) */
    @Input() iconSize = 36;
    /** The text shown below the Channel Value */
    @Input() label: string;
    /** Transforms an SVG icon based on the provided `iconSize` */
    @Input() scaleSvgIcon = true;
    /** Text to show after the value */
    @Input() units: string;
    /** The value for the channel */
    @Input() value: string;
    /** Show a space between the value and units for the channel */
    @Input() unitSpace: string;

    @ViewChild('primaryContainer') primaryContainer: ElementRef;

    iSize: number;
    iconString: string;
    hasMatSvgIcon: boolean;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnChanges(): void {
        requireInput<HeroComponent>(['label'], this);
        this.iSize = this.iconSize;
    }

    ngAfterViewInit(): void {
        this.hasMatSvgIcon = Boolean(this.getMatSvgIcon());
        this._ref.detectChanges();
    }

    ngAfterContentChecked(): void {
        this.scaleSvgIconOnChanges();
    }

    // Used to listen for changes in the primary icon content.
    // SVG icon content might be loaded post-render (fetching icon via http)
    scaleSvgIconOnChanges(): void {
        if (!this.hasMatSvgIcon || !this.primaryContainer || !this.scaleSvgIcon) {
            return;
        }

        // If the primary ng-content did not change, no action required.
        const iconHtml = this.primaryContainer.nativeElement.innerHTML;
        if (iconHtml === this.iconString) {
            return;
        }
        // Update icon data.
        this.iconString = iconHtml;
        const matIcon = this.getMatSvgIcon();
        if (matIcon) {
            this.hasMatSvgIcon = true;
            const svg = matIcon.querySelector('svg');
            if (svg) {
                svg.style.setProperty('transform', `scale(${this.iSize / 24})`);
            }
        }
    }

    // Returns projected <mat-icon> with attribute [svgIcon] if it exists
    getMatSvgIcon(): HTMLElement {
        return this.primaryContainer.nativeElement.querySelector('div mat-icon[svgicon]');
    }
}
