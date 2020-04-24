import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';
import { demoActions } from './with-actions.stories';
import { ViewEncapsulation } from '@angular/core';

export const withScoreBadge = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        .sb-score-card-content mat-list-item {
            height: 36px!important;
        }
        .sb-score-card-content mat-icon {
            margin-right: 32px;
        }
        .sb-score-card-content .mat-line {
            font-weight: 600!important;
        }
    `,
    ],
    encapsulation: ViewEncapsulation.None,
    template: `
        <pxb-score-card
            [headerTitle]="'Substation 3'"
            [headerSubtitle]="'Normal'"
            [headerInfo]="'4 Devices'"
            [badgeOffset]="badgeOffset"
        >
            <mat-icon actionItems (click)="actionClick('more_vert')">more_vert</mat-icon>
            <mat-list body class="sb-score-card-content">
                <mat-list-item>
                    <p mat-line>0 Alarms</p>
                    <mat-icon mat-list-icon>notifications</mat-icon>
                </mat-list-item>
                <mat-list-item [style.color]="colors.blue[500]">
                    <p mat-line>1 Event</p>
                    <mat-icon mat-list-icon>list_alt</mat-icon>
                </mat-list-item>
                <mat-list-item>
                    <p mat-line>Online</p>
                    <mat-icon mat-list-icon>cloud</mat-icon>
                </mat-list-item>
            </mat-list>
            <pxb-hero badge [label]="'Grade'" [value]="'98'" [units]="'/100'" [iconSize]="'large'" [iconBackgroundColor]="colors.white[50]">
                <i primary [style.color]="colors.green[500]" class="pxb-grade_a"></i>
            </pxb-hero>
            <pxb-info-list-item hidePadding="true" dense="true" actionRow (click)="actionRowClick()">
                <div title>View Location</div>
                <mat-icon mat-list-icon rightContent>chevron_right</mat-icon>
            </pxb-info-list-item>
        </pxb-score-card>
    `,
    props: {
        actionClick: (iconName: string): any => action(`${iconName} clicked`)(),
        actionRowClick: action('View Location clicked'),
        actions: demoActions,
        badgeOffset: number('badgeOffset', -74),
        colors: Colors,
    },
});
