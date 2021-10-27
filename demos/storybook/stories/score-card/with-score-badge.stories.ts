import { number } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';
import { demoActions } from './with-actions.stories';
import { ViewEncapsulation } from '@angular/core';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

export const withScoreBadge = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        .sb-score-card-content mat-list-item {
            height: 2.25rem!important;
        }
        ::ng-deep .sb-score-card-content.mat-list-base .mat-list-item .mat-list-icon {
            height: 1.5rem;
            width: 1.5rem;
            font-size: 1.5rem;
        }
        .sb-score-card-content mat-icon {
            margin-right: 32px;
            padding: 0;
        }
        .rtl.sb-score-card-content mat-icon {
            margin-left: 32px;
            margin-right: 0;
            transform: scaleX(-1);
        }
        ::ng-deep .rtl .mat-list-text { 
            padding-right: 0!important;
        }
    `,
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
        <blui-score-card
            [headerTitle]="'Substation 3'"
            [headerSubtitle]="'Normal'"
            [headerInfo]="'4 Devices'"
            [badgeOffset]="badgeOffset"
        >
            <mat-icon blui-action-items (click)="actionClick('more_vert')">more_vert</mat-icon>
            <mat-list blui-body class="sb-score-card-content" [class.rtl]="direction() === 'rtl'">
                <mat-list-item>
                    <p mat-line style="font-weight: 400">0 Alarms</p>
                    <mat-icon mat-list-icon>notifications</mat-icon>
                </mat-list-item>
                <mat-list-item [style.color]="colors.blue[500]">
                    <p mat-line style="font-weight: 600">1 Event</p>
                    <mat-icon mat-list-icon>list_alt</mat-icon>
                </mat-list-item>
                <mat-list-item>
                    <p mat-line style="font-weight: 400">Online</p>
                    <mat-icon mat-list-icon>cloud</mat-icon>
                </mat-list-item>
            </mat-list>
            <blui-hero blui-badge [label]="'Grade'" [value]="'98'" [units]="'/100'" [iconSize]="72">
                <i blui-primary [style.color]="colors.green[500]" class="blui-grade_a"></i>
            </blui-hero>
            <blui-info-list-item blui-action-row chevron="true" hidePadding="true" dense="true" (click)="actionRowClick()">
                <div blui-title>View Location</div>
            </blui-info-list-item>
        </blui-score-card>
    `,
    props: {
        actionClick: (iconName: string): any => action(`${iconName} clicked`)(),
        actionRowClick: action('View Location clicked'),
        actions: demoActions,
        badgeOffset: number('badgeOffset', -74),
        colors: Colors,
        direction: getDirection,
    },
});
