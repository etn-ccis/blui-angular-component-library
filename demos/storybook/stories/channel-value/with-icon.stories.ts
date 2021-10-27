import { color } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';
import { invertRTL } from '../../src/utils';

export const withIcon = (): any => ({
    template: `
        <blui-channel-value [value]="'123'" [units]="'hz'">
            <mat-icon [style.color]="iconColor" [style.transform]="invertRTL()">trending_up</mat-icon>
        </blui-channel-value>
    `,
    props: {
        iconColor: color('icon.color', Colors.red[500]),
        invertRTL: invertRTL,
    },
});
