import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const RIGHT_CONTENT = `<blui-info-list-item>
    <div blui-title>Info List Item</div>
    <div blui-subtitle>with a ChannelValue component to the right</div>
    <mat-icon [style.color]="Colors.blue[500]" blui-icon>battery_charging_full</mat-icon>
    <blui-channel-value [value]="15" units="A" blui-right-content></blui-channel-value>
</blui-info-list-item>
`;

@Component({
    selector: 'app-with-right-content-info-list-item-demo',
    template: RIGHT_CONTENT,
})
export class WithRightContentComponent {
    Colors = Colors;
}
