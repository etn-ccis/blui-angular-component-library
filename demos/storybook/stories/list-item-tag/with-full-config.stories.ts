import { text, color } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label" [style.backgroundColor]="backgroundColor" [style.fontColor]="fontColor"  > </pxb-list-item-tag>
      `,
    props: {
        label: text('label', 'clickable'),
        backgroundcolor: color('style.backgroundColor', Colors.green['700']),
        fontColor: color('style.fontColor', Colors.white['100']),
    },
});