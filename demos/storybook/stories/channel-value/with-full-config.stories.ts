import { boolean, color, number, text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
        <pxb-channel-value [value]="value" [units]="units" [fontSize]="fontSize" [color]="color" [prefix]="prefix">
            <mat-icon *ngIf="showIcon" [style.color]="iconColor">trending_up</mat-icon>
        </pxb-channel-value> 
    `,
    props: {
        value: text('value', '123'),
        units: text('units', 'hz'),
        iconColor: color('icon.color', Colors.red[500]),
        showIcon: boolean('Show Icon', true),
        color: color('color', 'blue'),
        fontSize: number('fontSize', 30),
        prefix: boolean('prefix', false),
    },
});
