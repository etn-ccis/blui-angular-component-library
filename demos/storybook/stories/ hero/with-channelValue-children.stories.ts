import { text } from '@storybook/addon-knobs';

export const withChannelValueChildren = (): any => ({
    template: `
      <pxb-hero [label]="'Duration'">
      <mat-icon primary>schedule</mat-icon>
        <pxb-channel-value [value]="hours" units="h"></pxb-channel-value>
        <pxb-channel-value [value]="minutes" units="m"></pxb-channel-value>
      </pxb-hero>
   `,
    props: {
        hours: text('ChannelValue.hours', '1'),
        minutes: text('ChannelValue.minutes', '27'),
    },
});
