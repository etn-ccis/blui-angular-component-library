import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';
import * as Colors from '@pxblue/colors';

export const demoActions = ['search', 'mail', 'notifications', 'list_alt', 'cloud', 'more_vert'];

export const withActions = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        ::ng-deep .pxb-score-card-header {
            background-color: ${Colors.red[500]}!important;
        }`,
    ],
    template: `
        <pxb-score-card
            [headerTitle]="'Substation 3'"
            [headerSubtitle]="'High Humidity Alarm'"
            [headerInfo]="'4 Devices'"
        >
            <ng-container action-items>
                <ng-container *ngFor="let action of actions; index as i;">
                    <mat-icon *ngIf="i < actionLimit" (click)="actionClick(actions[i])">
                        {{actions[i]}}
                    </mat-icon>
                </ng-container>
            </ng-container>
            <mat-list body>
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
        </pxb-score-card>
    `,
    props: {
        actionClick: (iconName: string): any => action(`${iconName} clicked`)(),
        actionLimit: number('Number of Actions', 3, {
            range: true,
            min: 1,
            max: 6,
            step: 1,
        }),
        actionRowClick: action('View Location clicked'),
        actions: demoActions,
    },
});
