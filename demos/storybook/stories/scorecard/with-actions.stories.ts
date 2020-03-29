import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import {action} from "@storybook/addon-actions";
import {demoStyles} from "./with-custom-header.stories";

export const withActions = (): any => ({
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
            <ng-container action-items>
                <ng-container *ngFor="let action of actions; index as i;">
                    <mat-icon *ngIf="i < actionLimit">{{actions[i]}}</mat-icon>
                </ng-container>
            </ng-container>
            <mat-list content>
                <mat-list-item>
                    <p mat-line>Body Content</p>
                </mat-list-item>
            </mat-list>
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
        actionLimit: number('Number of Actions', 3, { range: true, min: 1, max: 6, step: 1 }),
        actionRowClick: action('View Location clicked'),
        actions: ['more_vert', 'search', 'mail', 'notifications', 'list_alt', 'cloud']
    },
});
