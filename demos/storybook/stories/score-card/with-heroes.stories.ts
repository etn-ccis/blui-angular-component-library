import { number } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';

export const withHeroes = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        ::ng-deep pxb-score-card .pxb-root .pxb-header {
            background-color: ${Colors.red[500]};
            color: ${Colors.white[50]};
        }`,
    ],
    template: `
        <pxb-score-card
            [headerTitle]="'Substation 3'"
            [headerSubtitle]="'High Humidity Alarm'"
            [headerInfo]="'4 Devices'"
        >
            <mat-icon action-items (click)="actionClick('more_vert')">more_vert</mat-icon>
            <mat-list body>
                <mat-list-item>
                    <p mat-line>Body Content</p>
                </mat-list-item>
            </mat-list>
            <pxb-hero-banner badge>
                <pxb-hero *ngIf="heroLimit > 0" [label]="'Temperature'" [value]="'98'" [units]="'°F'" [iconSize]="'normal'">
                    <i primary class="pxb-temp"></i>
                </pxb-hero>
                <pxb-hero *ngIf="heroLimit > 1" [label]="'Humidity'" [value]="'54'" [units]="'%'" [iconSize]="'normal'">
                    <i primary [style.color]="colors.blue[300]" class="pxb-moisture"></i>
                </pxb-hero>
            </pxb-hero-banner>
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
