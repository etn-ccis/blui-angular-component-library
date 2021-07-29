import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

/**
 * [HeroBanner Component](https://pxblue-components.github.io/angular/?path=/info/components-hero--readme)
 *
 * The `<pxb-hero-banner>` component is a simple wrapper component that is used to contain `<pxb-hero>`s.
 */
@Component({
    selector: 'pxb-hero-banner',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-hero-banner-content">
            <ng-content select="pxb-hero"></ng-content>
        </div>
        <mat-divider class="pxb-hero-banner-divider" *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./hero-banner.component.scss'],
    host: {
        class: 'pxb-hero-banner',
    },
})
export class HeroBannerComponent {
    /** Whether to show the line separator
     *
     * @default false
     * */
    @Input() divider = false;
}
