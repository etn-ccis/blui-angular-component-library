import { select, text } from '@storybook/addon-knobs';
import { invertRTL } from '../../src/utils';

export const withCustomContent = (): any => ({
    template: `
         <blui-three-liner>
            <div blui-title>{{title}}</div>
            <div blui-subtitle>{{subtitle}}</div>
            <div *ngIf="infoContent === 'text'" blui-info>{{info}}</div>
            <blui-channel-value *ngIf="infoContent === 'channelValue'" blui-info [value]="info" units="hz">
                <mat-icon [style.transform]="invertRTL()">trending_up</mat-icon>
            </blui-channel-value>
         </blui-three-liner>
    `,
    props: {
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', '123'),
        infoContent: select('infoContent', ['text', 'channelValue'], 'channelValue'),
        invertRTL: invertRTL,
    },
});
