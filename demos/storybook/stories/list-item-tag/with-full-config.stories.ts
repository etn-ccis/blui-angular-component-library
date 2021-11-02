import { text, color } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';

export const withFullConfig = (): any => ({
    template: `
          <blui-list-item-tag [label]="label" [backgroundColor]="backgroundColor" [fontColor]="fontColor"> </blui-list-item-tag>
    `,
    props: {
        label: text('label', 'Label'),
        backgroundColor: color('backgroundColor', Colors.red[500]),
        fontColor: color('fontColor', Colors.white[50]),
    },
});
