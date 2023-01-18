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
import { requireContent, requireInput } from '../../utils/utils';
import { UnitSpaceType } from '../channel-value/channel-value.component';
/**
 * [Hero Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-hero--readme)
 *
 * The `<blui-hero>` components are used to call attention to particular values that are of the most importance to the user.
 * These are typically displayed in a banner.
 */
@Component({
    selector: 'blui-hero',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./hero.component.scss'],
    template: `
        <div class="blui-hero-content">
            <div
                class="blui-hero-primary-wrapper"
                #primaryContainer
                [style.backgroundColor]="iconBackgroundColor"
                [style.lineHeight.px]="iSize"
                [style.fontSize.px]="iSize"
                [style.width.px]="iSize"
                [style.height.px]="iSize"
                [class.blui-hero-svgIcon]="hasMatSvgIcon"
            >
                <ng-content select="[blui-primary]"></ng-content>
            </div>
            <span class="blui-hero-channel-value-wrapper">
                <ng-content select="blui-channel-value" *ngIf="value === undefined"></ng-content>
                <blui-channel-value
                    *ngIf="value !== undefined"
                    [value]="value"
                    [units]="units"
                    [unitSpace]="unitSpace"
                    [prefix]="prefix"
                >
                    <ng-content select="[blui-secondary]"></ng-content>
                </blui-channel-value>
            </span>
            <h5 class="blui-hero-label">{{ label }}</h5>
        </div>
    `,
    host: {
        class: 'blui-hero',
    },
})
export class HeroComponent implements OnChanges, AfterViewInit, AfterContentChecked {
    /** If true, shows units before the value
     *
     * @default false
     * */
    @Input() prefix = false;
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
    /** Show a space between the value and units for the channel, default is `auto` */
    @Input() unitSpace: UnitSpaceType = 'auto';

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
        const required = { selector: 'primaryContainer', ref: this.primaryContainer };
        requireContent([required], this);

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
