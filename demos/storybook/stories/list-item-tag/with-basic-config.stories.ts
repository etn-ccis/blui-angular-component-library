import { text } from '@storybook/addon-knobs';

export const withBasicConfig = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label">
            <h2> {{label}} </h2>
          </pxb-list-item-tag>
      `,
    props: {
        label: text('label', 'active'),
    },
});