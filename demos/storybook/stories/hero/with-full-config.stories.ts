import { boolean, color, text, number, select } from '@storybook/addon-knobs';
import { invertRTL } from '../../src/utils';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
        <pxb-hero [label]="label" [value]="value" [units]="units" [unitSpace]="unitSpace" [iconSize]="iconSize" [iconBackgroundColor]="colors.blue[500]">
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
        unitSpace: select('unitSpace', ['show', 'hide', 'auto'], 'hide'),
        showSecondary: boolean('Show Secondary Icon', true),
        iconSize: number('iconSize', 36),
        iconColor: color('primary.style.color', Colors.white[50]),
        invertRTL: invertRTL,
        colors: Colors,
    },
});
