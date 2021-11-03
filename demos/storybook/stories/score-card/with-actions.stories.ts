import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withCustomHeaderStyles } from './with-custom-header.stories';
import * as Colors from '@brightlayer-ui/colors';

export const demoActions = ['search', 'mail', 'notifications', 'favorite', 'cloud', 'more_vert'];

export const withActions = (): any => ({
    styles: [
        `${withCustomHeaderStyles}
        ::ng-deep .blui-score-card-header {
            background-color: ${Colors.blue[500]}!important;
        }`,
    ],
    template: `
        <blui-score-card
            [headerTitle]="'Substation 3'"
            [headerSubtitle]="'High Humidity Alarm'"
            [headerInfo]="'4 Devices'"
        >
            <ng-container blui-action-items>
                <ng-container *ngFor="let action of actions; index as i;">
                    <mat-icon *ngIf="i < actionLimit" (click)="actionClick(actions[i])">
                        {{actions[i]}}
                    </mat-icon>
                </ng-container>
            </ng-container>
            <mat-list blui-body>
                <mat-list-item>
                    <p mat-line>Body Content</p>
                </mat-list-item>
            </mat-list>
            <blui-info-list-item blui-action-row (click)="actionRowClick()" hidePadding="true" dense="true" chevron="true">
                <div blui-title>View Location</div>
            </blui-info-list-item>
        </blui-score-card>
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
