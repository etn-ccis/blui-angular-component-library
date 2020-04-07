import { color } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withIcon = (): any => ({
    template: `
          <pxb-channel-value [value]="'123'" [units]="'hz'">
            <mat-icon [style.color]="iconColor">trending_up</mat-icon>
          </pxb-channel-value>
      `,
    props: {
        iconColor: color('icon.color', Colors.red[500]),
    },
});
