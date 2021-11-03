import * as Colors from '@brightlayer-ui/colors';
import { boolean, select } from '@storybook/addon-knobs';

export const withinList = (): any => ({
    template: `
        <mat-nav-list [style.paddingTop.px]="0">
            <blui-info-list-item dense="true" [statusColor]="colors.green[700]" [divider]="divider" class="test" [iconAlign]="'center'">
                <div blui-title>Status</div>
                <i blui-icon class="blui-device_activating" [style.color]="colors.green[500]"></i>
                <blui-channel-value blui-right-content value="Online, ESS+"></blui-channel-value>
            </blui-info-list-item>
    
            <blui-info-list-item [divider]="divider" [avatar]="true">
                <div blui-title>Input Voltage</div>
                <div blui-subtitle>Phase A · Phase B · Phase C</div>
                <mat-icon blui-icon [style.backgroundColor]="colors.blue[500]"
                    style="color: white;">check_circle</mat-icon>
                <span blui-right-content>
                    <blui-channel-value value="478" units="V"></blui-channel-value>,&nbsp;
                    <blui-channel-value value="479" units="V"></blui-channel-value>,&nbsp;
                    <blui-channel-value value="473" units="V"></blui-channel-value>
                </span>
            </blui-info-list-item>
    
            <blui-info-list-item [style.color]="colors.red[500]" [statusColor]="colors.red[500]" [divider]="divider" [avatar]="true">
                <div blui-title>Output Voltage</div>
                <div blui-subtitle>Phase A · Phase B · Phase C</div>
                <mat-icon blui-icon [style.backgroundColor]="colors.red[500]"
                    style="color: white">check_circle</mat-icon>
                <span blui-right-content>
                    <blui-channel-value value="478" units="V"></blui-channel-value>,&nbsp;
                    <blui-channel-value value="479" units="V"></blui-channel-value>,&nbsp;
                    <blui-channel-value value="473" units="V"></blui-channel-value>
                </span>
            </blui-info-list-item>
    
            <blui-info-list-item dense="true" [divider]="divider" [iconAlign]="'center'" [disabled]="disabled">
                <div blui-title>Output Current</div>
                <mat-icon blui-icon>battery_charging_full</mat-icon>
                <span blui-right-content>
                    <blui-channel-value value="15" units="A"></blui-channel-value>,&nbsp;
                    <blui-channel-value value="14.9" units="A"></blui-channel-value>,&nbsp;
                    <blui-channel-value value="15" units="A"></blui-channel-value>
                </span>
            </blui-info-list-item>
    
            <blui-info-list-item dense="true" [divider]="divider" [iconAlign]="'center'">
                <div blui-title>Temperature</div>
                <i blui-icon class="blui-temp"></i>
                <span blui-right-content style="display: flex; align-items: center">
                    <blui-channel-value value="68" units="°F"></blui-channel-value>
                </span>
            </blui-info-list-item>
        </mat-nav-list>
    `,
    props: {
        colors: Colors,
        disabled: boolean('Disable item', false),
        divider: select('divider', ['full', 'partial', ''], 'full'),
    },
});
