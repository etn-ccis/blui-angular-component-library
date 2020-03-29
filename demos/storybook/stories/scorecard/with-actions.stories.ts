import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import {action} from "@storybook/addon-actions";
import {withCustomHeaderStyles} from "./with-custom-header.stories";

export const demoActions = ['more_vert', 'search', 'mail', 'notifications', 'list_alt', 'cloud'];

export const withActions = (): any => ({
    styles: [withCustomHeaderStyles],
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
                    <mat-icon *ngIf="i < actionLimit" (click)="actionClick(actions[i])">
                        {{actions[i]}}
                    </mat-icon>
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
        actionLimit: number('Number of Actions', 3, { range: true, min: 1, max: 6, step: 1 }),
        actionRowClick: action('View Location clicked'),
        actions: demoActions,
        headerColor: Colors.red[500],
        headerFontColor: Colors.white[50],
        actionClick: (iconName): any => action(`${iconName} clicked`)()
    },
});
