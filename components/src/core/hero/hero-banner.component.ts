import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'pxb-hero-banner',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
