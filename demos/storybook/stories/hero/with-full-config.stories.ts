import { boolean, color, text, number } from '@storybook/addon-knobs';
import { invertRTL } from '../../src/utils';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
        <pxb-hero [label]="label" [value]="value" [units]="units"
            [iconBackgroundColor]="iconBg" [iconSize]="iconSize">
            <i pxb-primary [style.color]="iconColor" class="pxb-fan"></i>
            <mat-icon pxb-secondary *ngIf="showSecondary" [style.transform]="invertRTL()">
                trending_up
            </mat-icon>
        </pxb-hero>
      `,
    props: {
        label: text('label', 'Velocity'),
        value: text('value', '470'),
        units: text('units', 'RPM'),
        showSecondary: boolean('Show Secondary Icon', true),
        iconSize: number('iconSize', 36),
        iconColor: color('primary.style.color', Colors.white[50]),
        iconBg: color('primary.style.backgroundColor', Colors.blue[500]),
        invertRTL: invertRTL,
    },
});
