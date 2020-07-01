import { text } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';

export const withBasicConfig = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label"></pxb-list-item-tag>
    `,
    props: {
        label: text('label', 'active'),
        colors: Colors,
    },
});
