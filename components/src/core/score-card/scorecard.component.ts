import { Component, Input } from '@angular/core';

@Component({
    selector: 'pxb-scorecard',
    template: `
        <mat-card class="root">
            <div class="header" [style.backgroundColor]="headerColor" [style.color]="headerFontColor">
                <div class="header-overlay"></div>
                <div class="header-wrapper">
                    <div class="header-text">
                        <mat-card-title class="title">{{ headerTitle }}</mat-card-title>
                        <mat-card-subtitle class="subtitle">{{ headerSubtitle }}</mat-card-subtitle>
                        <mat-card-subtitle class="info">{{ headerInfo }}</mat-card-subtitle>
                    </div>
                    <div class="action-items">
                        <ng-content select="[action-items]"></ng-content>
                    </div>
                </div>
            </div>
            <mat-card-content>
                <div class="body">
                    <ng-content select="[body]"></ng-content>
                    <div class="badge-wrapper" [style.marginTop.px]="badgeOffset || 'inherit'">
                        <ng-content select="[badge]"></ng-content>
                    </div>
                </div>
                <mat-divider></mat-divider>
                <div class="action-row">
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
    @Input() headerColor: string;
    @Input() headerFontColor: string;
    @Input() actionLimit: number;
    @Input() badgeOffset = 0;
}
