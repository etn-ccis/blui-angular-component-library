import * as Colors from '@pxblue/colors';

export const withRightComponent = (): any => ({
    template: `
        <pxb-info-list-item title="Info List Item" subtitle="with a ChannelValue component to the right">
            <mat-icon [style.color]="colors.blue[500]" icon>battery_charging_full</mat-icon>
            <pxb-channel-value [value]="15" units="A" right-component></pxb-channel-value>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors
    }
});
