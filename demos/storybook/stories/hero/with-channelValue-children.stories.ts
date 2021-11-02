import { text, select } from '@storybook/addon-knobs';

export const withChannelValueChildren = (): any => ({
    template: `
        <blui-hero [label]="'Duration'">
            <mat-icon blui-primary>schedule</mat-icon>
            <blui-channel-value [value]="hours" units="h" [unitSpace]="unitSpace"></blui-channel-value>
            <blui-channel-value [value]="minutes" units="m" [unitSpace]="unitSpace"></blui-channel-value>
        </blui-hero>
    `,
    props: {
        hours: text('ChannelValue.hours', '1'),
        minutes: text('ChannelValue.minutes', '27'),
        unitSpace: select('ChannelValue.unitSpace', ['show', 'hide', 'auto'], 'hide'),
    },
});
