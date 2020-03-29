import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import {action} from "@storybook/addon-actions";
import {demoStyles} from "./with-custom-header.stories";
import {demoActions} from "./with-actions.stories";

export const withScoreBadge = (): any => ({
    styles: demoStyles,
    template: `
          <pxb-scorecard 
              [actionLimit]="actionLimit"
              [headerTitle]="'Substation 3'"
              [headerSubtitle]="'High Humidity Alarm'"
              [headerInfo]="'4 Devices'"
              [headerColor]="headerColor"
              [headerFontColor]="headerFontColor"
              [badgeOffset]="badgeOffset"
          >
            <mat-icon action-items>more_vert</mat-icon>
            <mat-list content>
                <mat-list-item>
                    <p mat-line>Body Content</p>
                </mat-list-item>
            </mat-list>
            <pxb-hero badges [label]="'Grade'" [value]="'98'" [units]="'/100'" [iconSize]="72">
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
        actions: demoActions[0],
        badgeOffset: number('badgeOffset', -60),
        headerColor: Colors.blue[500],
        headerFontColor: Colors.white[50],
        gradeColor: Colors.green[500],
    },
});
