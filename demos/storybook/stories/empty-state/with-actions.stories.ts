import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withActions = (): any => ({
    template: `
        <pxb-empty-state [title]="title" [description]="description">
            <mat-icon pxb-empty-icon>devices</mat-icon>
            <button pxb-actions mat-stroked-button color="primary" (click)="click()">
                <mat-icon>add</mat-icon>
                {{actionText}}
            </button> 
        </pxb-empty-state>
    `,
    props: {
        title: text('title', 'No Devices'),
        description: text('description', 'Check your network connection or add a new device'),
        click: action('button clicked'),
        actionText: text('Action Text', 'Add Device'),
    },
});
