import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getDirection } from "@pxblue/storybook-rtl-addon";

export const withActions = (): any => ({
    template: `
        <pxb-empty-state [title]="title" [description]="description">
            <mat-icon pxb-empty-icon>devices</mat-icon>
            <button pxb-actions mat-stroked-button color="primary" (click)="click()">
                <mat-icon 
                    [style.marginRight.px]="direction() === 'rtl' ? -4 : 8"
                    [style.marginLeft.px]="direction() === 'rtl' ? 8 : -4">
                    add
                </mat-icon>
                {{actionText}}
            </button> 
        </pxb-empty-state>
    `,
    props: {
        title: text('title', 'No Devices'),
        description: text('description', 'Check your network connection or add a new device'),
        click: action('button clicked'),
        actionText: text('Action Text', 'Add Device'),
        direction: getDirection
    },
});
