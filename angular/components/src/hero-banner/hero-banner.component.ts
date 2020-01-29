import { Component, Input } from '@angular/core';

@Component({
    selector: 'pxb-hero-banner',
    template: `
        <div class="banner">
            <ng-content select="pxb-hero"></ng-content>
        </div>
        <mat-divider class="divider" *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./hero-banner.component.scss'],
    inputs: ['divider'],
})
export class HeroBannerComponent {
    @Input() divider = true;
}
