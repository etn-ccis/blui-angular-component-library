import { number, text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { demoActions } from './with-actions.stories';
import { withCustomHeaderStyles } from './with-custom-header.stories';
import { getDirection } from '@pxblue/storybook-rtl-addon';

export const withFullConfig = (): any => ({
    styles: [
        `
        ${withCustomHeaderStyles}
        .sb-score-card-content mat-list-item {
            height: 2.25rem!important;
        }
        ::ng-deep .sb-score-card-content.mat-list-base .mat-list-item .mat-list-icon {
            height: 1.5rem;
            width: 1.5rem;
            font-size: 1.5rem;
        }
        .sb-score-card-content mat-icon {
            margin-right: 32px;
            padding: 0;
        }
        .rtl.sb-score-card-content mat-icon {
            margin-left: 32px;
            margin-right: 0;
            transform: scaleX(-1);
        }
        ::ng-deep .rtl .mat-list-text { 
            padding-right: 0!important;
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
            <ng-container pxb-action-items>
                <ng-container *ngFor="let action of actions; index as i;">
                    <mat-icon *ngIf="i < actionLimit" (click)="actionClick(actions[i])">
                        {{actions[i]}}
                    </mat-icon>
                </ng-container>
            </ng-container>
            <mat-list pxb-body class="sb-score-card-content" [class.rtl]="direction() === 'rtl'">
                <mat-list-item>
                    <p mat-line style="font-weight: 400">0 Alarms</p>
                    <mat-icon mat-list-icon>notifications</mat-icon>
                </mat-list-item>
                <mat-list-item [style.color]="colors.blue[500]">
                    <p mat-line style="font-weight: 600">1 Event</p>
                    <mat-icon mat-list-icon>list_alt</mat-icon>
                </mat-list-item>
                <mat-list-item>
                    <p mat-line style="font-weight: 400">Online</p>
                    <mat-icon mat-list-icon>cloud</mat-icon>
                </mat-list-item>
            </mat-list>
            <pxb-hero-banner pxb-badge>
                <pxb-hero *ngIf="heroLimit > 0" [label]="'Temperature'" [value]="'98'" [units]="'°F'" [iconSize]="72">
                    <i pxb-primary class="pxb-temp"></i>
                </pxb-hero>
                <pxb-hero *ngIf="heroLimit > 1" [label]="'Humidity'" [value]="'54'" [units]="'%'" [iconSize]="72">
                    <i pxb-primary [style.color]="colors.blue[300]" class="pxb-moisture"></i>
                </pxb-hero>
            </pxb-hero-banner>
            <pxb-info-list-item pxb-action-row chevron="true" hidePadding="true" dense="true"(click)="actionRowClick()">
                <div pxb-title>View Location</div>
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
        direction: getDirection,
    },
});
