import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';
import { demoActions } from './with-actions.stories';

export const withScoreBadge = (): any => ({
    styles: [
        `
        ${withCustomHeaderStyles}
        .sb-scorecard-content mat-list-item {
            height: 36px!important;
        }
        .sb-scorecard-content mat-icon {
            margin-right: 32px;
        }
    `,
    ],
    template: `
          <pxb-scorecard 
              [actionLimit]="actionLimit"
              [headerTitle]="'Substation 3'"
              [headerSubtitle]="'Normal'"
              [headerInfo]="'4 Devices'"
              [headerColor]="headerColor"
              [headerFontColor]="headerFontColor"
              [badgeOffset]="badgeOffset"
          >
            <mat-icon action-items (click)="actionClick('more_vert')">more_vert</mat-icon>
            <mat-list content class="sb-scorecard-content">
                <mat-list-item>
                    <p mat-line>0 Alarms</p>
                    <mat-icon mat-list-icon>notifications</mat-icon>
                </mat-list-item>
                <mat-list-item>
                    <p mat-line>1 Event</p>
                    <mat-icon mat-list-icon>list_alt</mat-icon>
                </mat-list-item>
                <mat-list-item>
                    <p mat-line>Online</p>
                    <mat-icon mat-list-icon>cloud</mat-icon>
                </mat-list-item>
            </mat-list>
            <pxb-hero badge [label]="'Grade'" [value]="'98'" [units]="'/100'" [iconSize]="72">
                <i primary [style.color]="gradeColor" class="pxb-grade_a"></i>
            </pxb-hero>
            <mat-list action-row>
                <mat-list-item (click)="actionRowClick()">
                    <p mat-line>View Location</p>
                    <mat-icon mat-list-icon style="order: 10">chevron_right</mat-icon>
                </mat-list-item>
            </mat-list>
        </pxb-scorecard>
      `,
    props: {
        actionRowClick: action('View Location clicked'),
        actions: demoActions,
        badgeOffset: number('badgeOffset', -90),
        headerColor: Colors.blue[500],
        headerFontColor: Colors.white[50],
        gradeColor: Colors.green[500],
        actionLimit: number('Number of Actions', 3, { range: true, min: 1, max: 6, step: 1 }),
        actionClick: (iconName): any => action(`${iconName} clicked`)(),
    },
});
