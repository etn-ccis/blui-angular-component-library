import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import {action} from "@storybook/addon-actions";
import {demoStyles} from "./with-custom-header.stories";
import {demoActions} from "./with-actions.stories";

export const withHeroes = (): any => ({
    styles: demoStyles,
    template: `
          <pxb-scorecard 
              [actionLimit]="actionLimit"
              [headerTitle]="'Substation 3'"
              [headerSubtitle]="'High Humidity Alarm'"
              [headerInfo]="'4 Devices'"
              [headerColor]="headerColor"
              [headerFontColor]="headerFontColor"
          >
            <mat-icon action-items>more_vert</mat-icon>
            <mat-list content>
                <mat-list-item>
                    <p mat-line>Body Content</p>
                </mat-list-item>
            </mat-list>
            <pxb-hero-banner badges [divider]="false">
                <pxb-hero *ngIf="heroLimit > 0" [label]="'Temperature'" [value]="'98'" [units]="'°F'">
                    <i primary class="pxb-temp"></i>
                </pxb-hero>
                <pxb-hero *ngIf="heroLimit > 1" [label]="'Humidity'" [value]="'54'" [units]="'%'">
                    <i primary [style.color]="bluePrimary" class="pxb-moisture"></i>
                </pxb-hero>
            </pxb-hero-banner>
            <mat-list action-row>
                <mat-list-item (click)="actionRowClick()">
                    <p mat-line>View Location</p>
                    <mat-icon mat-list-icon style="order: 10">chevron_right</mat-icon>
                </mat-list-item>
            </mat-list>
        </pxb-scorecard>
      `,
    props: {
        headerColor: Colors.red[500],
        headerFontColor: Colors.white[50],
        heroLimit: number('Number of Heroes', 1, { range: true, min: 0, max: 2, step: 1 }),
        actionRowClick: action('View Location clicked'),
        actions: demoActions[0],
        bluePrimary: Colors.blue[500]
    },
});
