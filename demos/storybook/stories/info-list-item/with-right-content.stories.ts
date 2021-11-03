import * as Colors from '@brightlayer-ui/colors';

export const withRightContent = (): any => ({
    template: `
        <blui-info-list-item>
            <div blui-title>Info List Item</div>
            <div blui-subtitle>with a ChannelValue component to the right</div>
            <mat-icon [style.color]="colors.blue[500]" blui-icon>battery_charging_full</mat-icon>
            <blui-channel-value [value]="15" units="A" blui-right-content></blui-channel-value>
        </blui-info-list-item>
      `,
    props: {
        colors: Colors,
    },
});
