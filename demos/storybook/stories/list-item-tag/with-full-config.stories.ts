import { text } from '@storybook/addon-knobs';

export const withFullConfig = (): any => ({
    template: `
          <pxb-list-item-tag [label]="label" [backgroundColor]="backgroundColor" [fontColor]="fontColor" >
            <h2> {{label}} </h2>
          </pxb-list-item-tag>
      `,
    props: {
        label: text('label'),
        backgroundcolor: text('backgroundColor'),
        fontColor: text('fontColor'),
    },
});