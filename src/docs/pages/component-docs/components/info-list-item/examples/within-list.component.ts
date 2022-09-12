import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const WITHIN_LIST = `<mat-nav-list [style.paddingTop.px]="0">
    <blui-info-list-item [divider]="true" iconAlign="center" dense="true" 
        [statusColor]="Colors.green[700]">
        <div blui-title>Status</div>
        <i blui-icon class="blui-device_activating" [style.color]="Colors.green[500]"></i>
        <blui-channel-value blui-right-content value="Online, ESS+"></blui-channel-value>
    </blui-info-list-item>

    <blui-info-list-item [divider]="true" [avatar]="true">
        <div blui-title>Input Voltage</div>
        <div blui-subtitle>Phase A · Phase B · Phase C</div>
        <mat-icon blui-icon [style.backgroundColor]="Colors.blue[500]"
            style="color: white;">check_circle</mat-icon>
        <span blui-right-content>
            <blui-channel-value value="478" units="V"></blui-channel-value>,&nbsp;
            <blui-channel-value value="479" units="V"></blui-channel-value>,&nbsp;
            <blui-channel-value value="473" units="V"></blui-channel-value>
        </span>
    </blui-info-list-item>

    <blui-info-list-item [divider]="true" [avatar]="true"
        [style.color]="Colors.red[500]" [statusColor]="Colors.red[500]">
        <div blui-title>Output Voltage</div>
        <div blui-subtitle>Phase A · Phase B · Phase C</div>
        <mat-icon blui-icon [style.backgroundColor]="Colors.red[500]"
            style="color: white">check_circle</mat-icon>
        <span blui-right-content>
            <blui-channel-value value="478" units="V"></blui-channel-value>,&nbsp;
            <blui-channel-value value="479" units="V"></blui-channel-value>,&nbsp;
            <blui-channel-value value="473" units="V"></blui-channel-value>
        </span>
    </blui-info-list-item>

    <blui-info-list-item [divider]="true" iconAlign="center" dense="true">
        <div blui-title>Output Current</div>
        <mat-icon blui-icon>battery_charging_full</mat-icon>
        <span blui-right-content>
            <blui-channel-value value="15" units="A"></blui-channel-value>,&nbsp;
            <blui-channel-value value="14.9" units="A"></blui-channel-value>,&nbsp;
            <blui-channel-value value="15" units="A"></blui-channel-value>
        </span>
    </blui-info-list-item>

    <blui-info-list-item [divider]="true" iconAlign="center" dense="true">
        <div blui-title>Temperature</div>
        <i blui-icon class="blui-temp"></i>
        <span blui-right-content style="display: flex; align-items: center">
            <blui-channel-value value="68" units="°F"></blui-channel-value>
        </span>
    </blui-info-list-item>
</mat-nav-list>
`;

@Component({
    selector: 'app-within-list-info-list-item-demo',
    template: WITHIN_LIST,
})
export class WithinListComponent {
    Colors = Colors;
}
