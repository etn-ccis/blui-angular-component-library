import { text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label" [backgroundColor]="backgroundColor" [fontColor]="fontColor"  > </pxb-list-item-tag>
      `,
    props: {
        label: text('label', 'clickable'),
        backgroundcolor: text('backgroundColor', Colors.green['700']),
        fontColor: text('fontColor', Colors.white['100']),
    },
});