import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label"></pxb-list-item-tag>
      `,
    props: {
        label: text('label', 'active'),
    },
});