import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

export const withActions = (): any => ({
    template: `
        <blui-empty-state [title]="title" [description]="description">
            <mat-icon blui-empty-icon>devices</mat-icon>
            <button blui-actions mat-stroked-button color="primary" (click)="click()">
                <mat-icon 
                    style="height: 20px; width: 20px; font-size: 20px;"
                    [style.marginRight.px]="direction() === 'rtl' ? -4 : 8"
                    [style.marginLeft.px]="direction() === 'rtl' ? 8 : -4">
                    add
                </mat-icon>
                {{actionText}}
            </button> 
        </blui-empty-state>
    `,
    props: {
        title: text('title', 'No Devices'),
        description: text('description', 'Check your network connection or add a new device'),
        click: action('button clicked'),
        actionText: text('Action Text', 'Add Device'),
        direction: getDirection,
    },
});
