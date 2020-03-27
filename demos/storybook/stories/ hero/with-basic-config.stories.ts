import {text} from "@storybook/addon-knobs";

export const withBasicConfig = (): any => ({
    template: `
          <pxb-hero [label]="label">
             <i primary class="pxb-grade_a"></i>
          </pxb-hero>
      `,
    props: {
        label: text('label', 'Efficiency'),
    },
});