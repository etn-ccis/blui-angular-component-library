import { color } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withIconColor = (): any => ({
    template: `
        <pxb-hero [label]="'Temperature'" [value]="38" [units]="'°C'" [iconBackgroundColor]="iconBg">
            <i primary [style.color]="iconColor" class="pxb-temp"></i>
        </pxb-hero>
    `,
    props: {
        iconColor: color('primary.style.color', Colors.white[50]),
        iconBg: color('primary.style.backgroundColor', Colors.red[500]),
    },
});
