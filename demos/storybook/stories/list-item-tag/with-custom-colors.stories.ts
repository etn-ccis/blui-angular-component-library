import { text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withCustomColors = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label" [backgroundColor]="backgroundColor" [fontColor]="fontColor"></pxb-list-item-tag>
      `,
    props: {
        label: text('label', 'active'),
        backgroundcolor: text('backgroundColor', Colors.gold['500']),
        fontColor: text('fontColor', Colors.black['500']),
    },
});