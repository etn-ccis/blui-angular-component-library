import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';

export const withHeroes = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        ::ng-deep pxb-score-card .pxb-score-card .pxb-score-card-header {
            background-color: ${Colors.red[500]};
        }`,
    ],
    template: `
        <pxb-score-card
            [headerTitle]="'Substation 3'"
            [headerSubtitle]="'High Humidity Alarm'"
            [headerInfo]="'4 Devices'"
        >
            <mat-icon pxb-action-items (click)="actionClick('more_vert')">more_vert</mat-icon>
            <mat-list pxb-body>
                <mat-list-item>
                    <p mat-line>Body Content</p>
                </mat-list-item>
            </mat-list>
            <pxb-hero-banner pxb-badge>
                <pxb-hero *ngIf="heroLimit > 0" [label]="'Temperature'" [value]="'98'" [units]="'°F'" [iconSize]="36">
                    <i pxb-primary class="pxb-temp"></i>
                </pxb-hero>
                <pxb-hero *ngIf="heroLimit > 1" [label]="'Humidity'" [value]="'54'" [units]="'%'" [iconSize]="36">
                    <i pxb-primary [style.color]="colors.blue[300]" class="pxb-moisture"></i>
                </pxb-hero>
            </pxb-hero-banner>
            <pxb-info-list-item hidePadding="true" dense="true" pxb-action-row (click)="actionRowClick()">
                <div pxb-title>View Location</div>
                <mat-icon mat-list-icon pxb-right-content>chevron_right</mat-icon>
            </pxb-info-list-item>
        </pxb-score-card>
    `,
    props: {
        actionClick: (iconName: string): any => action(`${iconName} clicked`)(),
        actionRowClick: action('View Location clicked'),
        colors: Colors,
        heroLimit: number('Number of Heroes', 1, {
            range: true,
            min: 0,
            max: 2,
            step: 1,
        }),
    },
});
