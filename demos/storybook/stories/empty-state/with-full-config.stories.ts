import { color, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
        <pxb-empty-state [title]="title" [description]="description">
            <mat-icon emptyIcon [style.color]="color" [style.fontSize.px]="fontSize">trending_up</mat-icon>
            <button actions mat-raised-button color="primary" (click)="click()">
                <mat-icon>add_circle</mat-icon>
                {{actionText}}
            </button>
        </pxb-empty-state>
    `,
    props: {
        title: text('title', 'Predictions Page Coming Soon'),
        description: text('description', 'A fully redesigned predictions page is coming in our next release!'),
        click: action('button clicked'),
        actionText: text('Action Text', 'Learn More'),
        color: color('emptyIcon.color', Colors.black[300]),
        fontSize: number('emptyIcon.fontSize.px', 90),
    },
});
