import { select, text } from '@storybook/addon-knobs';
import { invertRTL } from '../../src/utils';

export const withCustomContent = (): any => ({
    template: `
         <pxb-three-liner>
            <div pxb-title>{{title}}</div>
            <div pxb-subtitle>{{subtitle}}</div>
            <div *ngIf="infoContent === 'text'" pxb-info>{{info}}</div>
            <pxb-channel-value *ngIf="infoContent === 'channelValue'" pxb-info [value]="info" units="hz">
                <mat-icon [style.transform]="invertRTL()">trending_up</mat-icon>
            </pxb-channel-value>
         </pxb-three-liner>
    `,
    props: {
        title: text('title', 'title'),
        subtitle: text('subtitle', 'subtitle'),
        info: text('info', '123'),
        infoContent: select('infoContent', ['text', 'channelValue'], 'channelValue'),
        invertRTL: invertRTL,
    },
});
