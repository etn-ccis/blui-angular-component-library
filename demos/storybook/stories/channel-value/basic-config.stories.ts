import {text} from "@storybook/addon-knobs";

export const withBasicConfig = (): any => ({
    template: `
          <pxb-channel-value [value]="value"></pxb-channel-value>
      `,
    props: {
        value: text('value', '123'),
    },
});