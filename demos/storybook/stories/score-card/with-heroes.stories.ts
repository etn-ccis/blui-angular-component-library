import { number } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';

export const withHeroes = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        ::ng-deep blui-score-card .blui-score-card .blui-score-card-header {
            background-color: ${Colors.blue[500]};
        }`,
    ],
    template: `
        <blui-score-card
            [headerTitle]="'Substation 3'"
            [headerSubtitle]="'High Humidity Alarm'"
            [headerInfo]="'4 Devices'"
        >
            <mat-icon blui-action-items (click)="actionClick('more_vert')">more_vert</mat-icon>
            <mat-list blui-body>
                <mat-list-item>
                    <p mat-line>Body Content</p>
                </mat-list-item>
            </mat-list>
            <blui-hero-banner blui-badge>
                <blui-hero *ngIf="heroLimit > 0" [label]="'Temperature'" [value]="'98'" [units]="'°F'" [iconSize]="36">
                    <i blui-primary class="blui-temp"></i>
                </blui-hero>
                <blui-hero *ngIf="heroLimit > 1" [label]="'Humidity'" [value]="'54'" [units]="'%'" [iconSize]="36">
                    <i blui-primary [style.color]="colors.blue[300]" class="blui-moisture"></i>
                </blui-hero>
            </blui-hero-banner>
            <blui-info-list-item blui-action-row chevron="true" hidePadding="true" dense="true" (click)="actionRowClick()">
                <div blui-title>View Location</div>
            </blui-info-list-item>
        </blui-score-card>
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
