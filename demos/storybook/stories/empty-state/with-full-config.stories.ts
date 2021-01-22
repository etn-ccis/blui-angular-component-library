import { color, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as Colors from '@pxblue/colors';
import { invertRTL } from '../../src/utils';

export const withFullConfig = (): any => ({
    template: `
        <pxb-empty-state [title]="title" [description]="description">
            <mat-icon pxb-empty-icon 
                [style.color]="color" 
                [style.fontSize.px]="fontSize" 
                [style.transform]="invertRTL()">trending_up</mat-icon>
            <button pxb-actions mat-stroked-button color="primary" (click)="click()">
                {{actionText}}
            </button>
        </pxb-empty-state>
    `,
    props: {
        title: text('title', 'Predictions Page Coming Soon'),
        description: text('description', 'A fully redesigned predictions page is coming in our next release!'),
        click: action('button clicked'),
        actionText: text('Action Text', 'Learn More'),
        color: color('emptyIcon.color', Colors.black[500]),
        fontSize: number('emptyIcon.fontSize.px', 90),
        invertRTL: invertRTL,
    },
});
