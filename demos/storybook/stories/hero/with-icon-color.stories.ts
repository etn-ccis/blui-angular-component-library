import { color } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';

export const withIconColor = (): any => ({
    template: `
        <blui-hero [label]="'Temperature'" [value]="38" [units]="'°C'" [iconBackgroundColor]="iconBg">
            <i blui-primary [style.color]="iconColor" class="blui-temp"></i>
        </blui-hero>
    `,
    props: {
        iconColor: color('primary.style.color', Colors.white[50]),
        iconBg: color('primary.style.backgroundColor', Colors.red[500]),
    },
});
