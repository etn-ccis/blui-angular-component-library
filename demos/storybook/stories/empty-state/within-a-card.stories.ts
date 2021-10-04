import { color, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as Colors from '@pxblue/colors';
import { invertRTL } from '../../src/utils';

export const withinACardConfig = (): any => ({
    template: `
        <mat-accordion>
            <mat-expansion-panel (opened)="updateState(state, false)" (closed)="updateState(state, true)"  style="width: 394px">
                <mat-expansion-panel-header>
                    <mat-panel-title style="color:#007BC1;">
                        Device Usage
                    </mat-panel-title>
                </mat-expansion-panel-header>
                <pxb-empty-state [title]="title" [description]="description">
                    <mat-icon pxb-empty-icon [style.color]="color" [style.fontSize.px]="fontSize"
                        [style.transform]="invertRTL()">
                        help_outline</mat-icon>
                    <button pxb-actions mat-flat-button color="primary" (click)="click()">
                        <mat-icon style="font-size: 16px;
                        height: 16px;
                        width: 15px;
                        margin-right: 8px;">add</mat-icon>
                        {{actionText}}
                    </button>
                </pxb-empty-state>
            </mat-expansion-panel>
        </mat-accordion>
    `,
    props: {
        title: text('title', 'No Devices Found'),
        description: text('description', 'After you add devices to this repository, we will show your recent device activities here.'),
        click: action('button clicked'),
        actionText: text('Action Text', 'Learn More'),
        color: color('emptyIcon.color', Colors.gray[500]),
        fontSize: number('emptyIcon.fontSize.px', 100),
        invertRTL: invertRTL,
        updateState: (state, val): void => {
            state.panelOpenState = val;
        },
        state: {
            panelOpenState: false,
        },
    },
});
