import { Component } from '@angular/core';

export const WITHIN_LIST = `<mat-nav-list [style.paddingTop.px]="0">
    <blui-info-list-item divider="partial" iconAlign="center" dense="true" statusColor="#2ca618">
        <div blui-title>Status</div>
        <i blui-icon class="blui-device_activating" style="color: #2ca618"></i>
        <blui-channel-value blui-right-content value="Online, ESS+"></blui-channel-value>
    </blui-info-list-item>

    <blui-info-list-item divider="partial" [avatar]="true" statusColor="#ca3c3d">
        <div blui-title>Output Voltage</div>
        <div blui-subtitle>Phase A · Phase B · Phase C</div>
        <mat-icon blui-icon style="color: white; background-color: #ca3c3d">
            check_circle
        </mat-icon>
        <span blui-right-content>
            <blui-channel-value value="478" units="V"></blui-channel-value>,&nbsp;
            <blui-channel-value value="479" units="V"></blui-channel-value>,&nbsp;
            <blui-channel-value value="473" units="V"></blui-channel-value>
        </span>
    </blui-info-list-item>

    <blui-info-list-item iconAlign="center" dense="true">
        <div blui-title>Output Current</div>
        <mat-icon blui-icon>battery_charging_full</mat-icon>
        <span blui-right-content>
            <blui-channel-value value="15" units="A"></blui-channel-value>,&nbsp;
            <blui-channel-value value="14.9" units="A"></blui-channel-value>,&nbsp;
            <blui-channel-value value="15" units="A"></blui-channel-value>
        </span>
    </blui-info-list-item>
</mat-nav-list>
`;

@Component({
    selector: 'app-within-list-info-list-item-demo',
    template: WITHIN_LIST,
})
export class WithinListComponent {}
