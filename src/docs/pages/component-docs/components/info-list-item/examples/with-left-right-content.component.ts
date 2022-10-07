import { Component } from '@angular/core';

export const LEFT_RIGHT_CONTENT = `<blui-info-list-item>
    <mat-icon style="color: #007bc1" blui-icon>battery_charging_full</mat-icon>
    <div blui-left-content style="display: flex; flex-direction: column; margin-right: 40px">
        <div class="mat-caption"><strong>8:32 </strong> AM</div>
        <div class="mat-caption" style="margin-top: -4px">11/21/21</div>
    </div>
    <div blui-title>Battery Fully Charged</div>
    <div blui-subtitle>Your device is ready to use</div>
    <blui-channel-value blui-right-content [value]="15" units="A"></blui-channel-value>
</blui-info-list-item>
`;

@Component({
    selector: 'app-with-left-right-content-info-list-item-demo',
    template: LEFT_RIGHT_CONTENT,
})
export class WithLeftRightContentComponent {}
