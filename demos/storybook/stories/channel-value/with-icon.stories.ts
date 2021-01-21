import { color } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { invertRTL } from '../../src/utils';

export const withIcon = (): any => ({
    template: `
        <pxb-channel-value [value]="'123'" [units]="'hz'">
            <mat-icon [style.color]="iconColor" [style.transform]="invertRTL()">trending_up</mat-icon>
        </pxb-channel-value>
    `,
    props: {
        iconColor: color('icon.color', Colors.red[500]),
        invertRTL: invertRTL,
    },
});
