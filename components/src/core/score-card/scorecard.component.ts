import { Component, Input } from '@angular/core';

@Component({
    selector: 'pxb-scorecard',
    template: `
        <mat-card class="pxb-root">
            <div class="pxb-header">
                <div class="pxb-header-background"></div>
                <div class="pxb-header-wrapper">
                    <div class="pxb-header-text">
                        <mat-card-title class="pxb-title">{{ headerTitle }}</mat-card-title>
                        <mat-card-subtitle class="pxb-subtitle">{{ headerSubtitle }}</mat-card-subtitle>
                        <mat-card-subtitle class="pxb-info">{{ headerInfo }}</mat-card-subtitle>
                    </div>
                    <div class="pxb-action-items">
                        <ng-content select="[action-items]"></ng-content>
                    </div>
                </div>
            </div>
            <mat-card-content>
                <div class="pxb-body">
                    <ng-content select="[body]"></ng-content>
                    <div class="pxb-badge-wrapper" [style.marginTop.px]="badgeOffset || 'inherit'">
                        <ng-content select="[badge]"></ng-content>
                    </div>
                </div>
                <mat-divider></mat-divider>
                <div class="pxb-action-row">
                    <ng-content select="[action-row]"></ng-content>
                </div>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./scorecard.component.scss'],
})
export class ScoreCardComponent {
    @Input() headerTitle: string;
    @Input() headerSubtitle: string;
    @Input() headerInfo: string;
    @Input() badgeOffset = 0;
}
