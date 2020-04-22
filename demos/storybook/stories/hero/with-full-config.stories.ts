import { boolean, color, select, text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
        <pxb-hero [label]="label" [value]="value" [units]="units"
            [iconBackgroundColor]="iconBg" [iconSize]="iconSize" [fontSize]="fontSize">
            <i primary [style.color]="iconColor" class="pxb-fan"></i>
            <mat-icon *ngIf="showSecondary" secondary>trending_up</mat-icon>
        </pxb-hero>
      `,
    props: {
        label: text('label', 'Velocity'),
        value: text('value', '470'),
        units: text('units', 'RPM'),
        showSecondary: boolean('Show Secondary Icon', true),
        iconSize: select('iconSize', ['normal', 'large'], 'normal'),
        fontSize: select('fontSize', ['normal', 'small'], 'normal'),
        iconColor: color('primary.style.color', Colors.white[50]),
        iconBg: color('primary.style.backgroundColor', Colors.blue[500]),
    },
});
