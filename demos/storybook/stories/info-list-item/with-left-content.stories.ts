import * as Colors from '@pxblue/colors';

export const withLeftContent = (): any => ({
    template: `
        <pxb-info-list-item>
            <div title>Info LIst Item</div>
            <div subtitle>with a ChannelValue component to the left</div>
            <mat-icon [style.color]="colors.blue[500]" icon>battery_charging_full</mat-icon>
            <pxb-channel-value [value]="15" units="A" leftContent></pxb-channel-value>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors,
    },
});
