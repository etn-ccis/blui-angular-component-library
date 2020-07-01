import { text, color } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withFullConfig = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label" [backgroundColor]="backgroundColor" [fontColor]="fontColor"> </pxb-list-item-tag>
    `,
    props: {
        label: text('label', 'Label'),
        backgroundColor: color('backgroundColor', Colors.green[500]),
        fontColor: color('fontColor', Colors.black[900]),
    },
});
