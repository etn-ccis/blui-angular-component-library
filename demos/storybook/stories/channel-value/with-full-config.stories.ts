import { boolean, color, text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
        <pxb-channel-value [value]="value" [units]="units" [color]="color" [prefix]="prefix">
            <mat-icon *ngIf="showIcon" [style.color]="iconColor">trending_up</mat-icon>
        </pxb-channel-value> 
    `,
    props: {
        value: text('value', '123'),
        units: text('units', 'hz'),
        iconColor: color('icon.color', Colors.red[500]),
        showIcon: boolean('Show Icon', true),
        color: color('color', Colors.black[500]),
        prefix: boolean('prefix', false),
    },
});
