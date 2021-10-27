import { color, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as Colors from '@brightlayer-ui/colors';
import { invertRTL } from '../../src/utils';

export const withFullConfig = (): any => ({
    template: `
        <blui-empty-state [title]="title" [description]="description">
            <mat-icon blui-empty-icon 
                [style.color]="color" 
                [style.fontSize.px]="fontSize" 
                [style.transform]="invertRTL()">trending_up</mat-icon>
            <button blui-actions mat-stroked-button color="primary" (click)="click()">
                {{actionText}}
            </button>
        </blui-empty-state>
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
