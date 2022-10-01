import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { requireInput } from '../../utils/utils';

/**
 * [ScoreCard Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-score-card--readme)
 *
 `<blui-score-card>` is a card component that calls attention to particular values.
 */
@Component({
    selector: 'blui-score-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-card class="blui-score-card-content">
            <div class="blui-score-card-header">
                <div class="blui-score-card-header-background"></div>
                <div class="blui-score-card-header-wrapper">
                    <div class="blui-score-card-header-text">
                        <mat-card-title class="blui-score-card-title">{{ headerTitle }}</mat-card-title>
                        <mat-card-subtitle class="blui-score-card-subtitle">{{ headerSubtitle }}</mat-card-subtitle>
                        <mat-card-subtitle class="blui-score-card-info">{{ headerInfo }}</mat-card-subtitle>
                    </div>
                    <div class="blui-score-card-action-items-wrapper">
                        <ng-content select="[blui-action-items]"></ng-content>
                    </div>
                </div>
            </div>
            <mat-card-content>
                <div class="blui-score-card-body">
                    <ng-content select="[blui-body]"></ng-content>
                    <div class="blui-score-card-badge-wrapper" [style.marginTop.px]="badgeOffset || 'inherit'">
                        <ng-content select="[blui-badge]"></ng-content>
                    </div>
                </div>
                <mat-divider *ngIf="actionRow.childNodes.length !== 0"></mat-divider>
                <div class="blui-score-card-action-row-wrapper" #actionRow>
                    <ng-content select="[blui-action-row]"></ng-content>
                </div>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./score-card.component.scss'],
    host: {
        class: 'blui-score-card',
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
