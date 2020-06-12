import * as Colors from '@pxblue/colors';

export const withRightContent = (): any => ({
    template: `
        <pxb-info-list-item>
            <div pxb-title>Info LIst Item</div>
            <div pxb-subtitle>with a ChannelValue component to the right</div>
            <mat-icon [style.color]="colors.blue[500]" pxb-icon>battery_charging_full</mat-icon>
            <pxb-channel-value [value]="15" units="A" pxb-right-content></pxb-channel-value>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors,
    },
});
