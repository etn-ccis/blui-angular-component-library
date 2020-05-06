import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-hero-banner',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-hero-banner">
            <ng-content select="pxb-hero"></ng-content>
        </div>
        <mat-divider class="pxb-hero-banner-divider" *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent {
    @Input() divider = false;
}
