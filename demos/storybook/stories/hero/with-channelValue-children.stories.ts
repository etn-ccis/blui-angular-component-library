import { text, select } from '@storybook/addon-knobs';

export const withChannelValueChildren = (): any => ({
    template: `
        <pxb-hero [label]="'Duration'">
            <mat-icon pxb-primary>schedule</mat-icon>
            <pxb-channel-value [value]="hours" units="h" [unitSpace]="unitSpace"></pxb-channel-value>
            <pxb-channel-value [value]="minutes" units="m" [unitSpace]="unitSpace"></pxb-channel-value>
        </pxb-hero>
    `,
    props: {
        hours: text('ChannelValue.hours', '1'),
        minutes: text('ChannelValue.minutes', '27'),
        unitSpace: select('ChannelValue.unitSpace', ['show', 'hide', 'auto'], 'hide'),
    },
});
