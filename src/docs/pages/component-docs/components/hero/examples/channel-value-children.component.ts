import { Component } from '@angular/core';

export const CV_CHILDREN = `<blui-hero label="Duration">
    <mat-icon blui-primary>schedule</mat-icon>
    <blui-channel-value value="1" units="h" unitSpace="hide"></blui-channel-value>
    <blui-channel-value value="27" units="m" unitSpace="hide"></blui-channel-value>
</blui-hero>
`;

@Component({
    selector: 'app-channel-value-children-hero-demo',
    template: CV_CHILDREN,
})
export class ChannelValueChildrenComponent {}
