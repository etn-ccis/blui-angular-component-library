import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'pxb-scorecard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-card class="pxb-scorecard">
            <div class="pxb-scorecard-header">
                <div class="pxb-scorecard-header-background"></div>
                <div class="pxb-scorecard-header-wrapper">
                    <div class="pxb-scorecard-header-text">
                        <mat-card-title class="pxb-scorecard-title">{{ headerTitle }}</mat-card-title>
                        <mat-card-subtitle class="pxb-scorecard-subtitle">{{ headerSubtitle }}</mat-card-subtitle>
                        <mat-card-subtitle class="pxb-scorecard-info">{{ headerInfo }}</mat-card-subtitle>
                    </div>
                    <div class="pxb-scorecard-action-items-wrapper">
                        <ng-content select="[action-items]"></ng-content>
                    </div>
                </div>
            </div>
            <mat-card-content>
                <div class="pxb-scorecard-body">
                    <ng-content select="[body]"></ng-content>
                    <div class="pxb-scorecard-badge-wrapper" [style.marginTop.px]="badgeOffset || 'inherit'">
                        <ng-content select="[badge]"></ng-content>
                    </div>
                </div>
                <mat-divider *ngIf="actionRow.childNodes.length !== 0"></mat-divider>
                <div class="pxb-scorecard-action-row-wrapper" #actionRow>
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
