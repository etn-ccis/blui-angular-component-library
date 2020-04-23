import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export const withActions = (): any => ({
    template: `
        <pxb-empty-state [title]="title" [description]="description">
            <mat-icon emptyIcon>devices</mat-icon>
            <button actions mat-raised-button color="primary" (click)="click()">
                <mat-icon>add_circle</mat-icon>
                {{actionText}}
            </button>
        </pxb-empty-state>
    `,
    props: {
        title: text('title', 'No Devices'),
        description: text('description', 'Not a single one'),
        click: action('button clicked'),
        actionText: text('Action Text', 'Add Device'),
    },
});
