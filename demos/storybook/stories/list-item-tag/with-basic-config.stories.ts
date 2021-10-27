import { text } from '@storybook/addon-knobs';
import * as Colors from '@brightlayer-ui/colors';

export const withBasicConfig = (): any => ({
    template: `
          <blui-list-item-tag [label]="label"></blui-list-item-tag>
    `,
    props: {
        label: text('label', 'active'),
        colors: Colors,
    },
});
