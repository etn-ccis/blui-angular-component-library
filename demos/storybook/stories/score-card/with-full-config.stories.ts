import { number, text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { demoActions } from './with-actions.stories';
import { withCustomHeaderStyles } from './with-custom-header.stories';

export const withFullConfig = (): any => ({
    styles: [
        `
        ${withCustomHeaderStyles}
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
    template: `
        <pxb-score-card
            [headerTitle]="headerTitle"
            [headerSubtitle]="headerSubtitle"
            [headerInfo]="headerInfo"
            [badgeOffset]="badgeOffset"
        >
            <ng-container actionItems>
                <ng-container *ngFor="let action of actions; index as i;">
                    <mat-icon *ngIf="i < actionLimit" (click)="actionClick(actions[i])">
                        {{actions[i]}}
                    </mat-icon>
                </ng-container>
            </ng-container>
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
            <pxb-hero-banner badge>
                <pxb-hero *ngIf="heroLimit > 0" [label]="'Temperature'" [value]="'98'"
                    [units]="'°F'" [iconSize]="'large'" [iconBackgroundColor]="colors.white[50]">
                    <i primary class="pxb-temp"></i>
                </pxb-hero>
                <pxb-hero *ngIf="heroLimit > 1" [label]="'Humidity'" [value]="'54'"
                    [units]="'%'" [iconSize]="'large'" [iconBackgroundColor]="colors.white[50]">
                    <i primary [style.color]="colors.blue[300]" class="pxb-moisture"></i>
                </pxb-hero>
            </pxb-hero-banner>
            <pxb-info-list-item title="View Location" hidePadding="true" dense="true" actionRow (click)="actionRowClick()">
                <mat-icon mat-list-icon rightComponent>chevron_right</mat-icon>
            </pxb-info-list-item>
        </pxb-score-card>
    `,
    props: {
        headerTitle: text('headerTitle', 'Substation 3'),
        headerSubtitle: text('headerSubtitle', 'High Humidity Alarm'),
        headerInfo: text('headerInfo', '4 Devices'),
        actionLimit: number('Number of Actions', 3, {
            range: true,
            min: 1,
            max: 6,
            step: 1,
        }),
        heroLimit: number('Number of Heroes', 1, {
            range: true,
            min: 0,
            max: 2,
            step: 1,
        }),
        badgeOffset: number('badgeOffset', -74),
        actionRowClick: action('View Location clicked'),
        actionClick: (iconName: string): any => action(`${iconName} clicked`)(),
        actions: demoActions,
        colors: Colors,
    },
});
