import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

/**
 * [ScoreCard Component](https://pxblue-components.github.io/angular/?path=/info/components-score-card--readme)
 *
 `<pxb-score-card>` is a card component that calls attention to particular values.
 */
@Component({
    selector: 'pxb-score-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-card class="pxb-score-card-content">
            <div class="pxb-score-card-header">
                <div class="pxb-score-card-header-background"></div>
                <div class="pxb-score-card-header-wrapper">
                    <div class="pxb-score-card-header-text">
                        <mat-card-title class="pxb-score-card-title">{{ headerTitle }}</mat-card-title>
                        <mat-card-subtitle class="pxb-score-card-subtitle">{{ headerSubtitle }}</mat-card-subtitle>
                        <mat-card-subtitle class="pxb-score-card-info">{{ headerInfo }}</mat-card-subtitle>
                    </div>
                    <div class="pxb-score-card-action-items-wrapper">
                        <ng-content select="[pxb-action-items]"></ng-content>
                    </div>
                </div>
            </div>
            <mat-card-content>
                <div class="pxb-score-card-body">
                    <ng-content select="[pxb-body]"></ng-content>
                    <div class="pxb-score-card-badge-wrapper" [style.marginTop.px]="badgeOffset || 'inherit'">
                        <ng-content select="[pxb-badge]"></ng-content>
                    </div>
                </div>
                <mat-divider *ngIf="actionRow.childNodes.length !== 0"></mat-divider>
                <div class="pxb-score-card-action-row-wrapper" #actionRow>
                    <ng-content select="[pxb-action-row]"></ng-content>
                </div>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./score-card.component.scss'],
    host: {
        class: 'pxb-score-card',
    },
})
export class ScoreCardComponent {
    /** Vertical offset for the badge content
     *
     * @default 0
     * */
    @Input() badgeOffset = 0;

    /** The third line of text in the header */
    @Input() headerInfo: string;

    /** The second line of text in the header */
    @Input() headerSubtitle: string;

    /** The first line of text in the header */
    @Input() headerTitle: string;

    ngOnChanges(): void {
        requireInput<ScoreCardComponent>(['headerTitle'], this);
    }
}
