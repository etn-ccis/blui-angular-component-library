import * as Colors from '@pxblue/colors';
import { select } from '@storybook/addon-knobs';

export const withinList = (): any => ({
    template: `
        <mat-nav-list [style.paddingTop.px]="0">
            <pxb-info-list-item dense="true" [statusColor]="colors.green[700]" [divider]="divider" class="test" [iconAlign]="'center'">
                <div pxb-title>Status</div>
                <mat-icon pxb-icon [style.color]="colors.green[700]">alarm</mat-icon>
                <pxb-channel-value pxb-right-content value="Online, ESS+"></pxb-channel-value>
            </pxb-info-list-item>
    
            <pxb-info-list-item [divider]="divider" [avatar]="true">
                <div pxb-title>Input Voltage</div>
                <div pxb-subtitle>Phase A · Phase B · Phase C</div>
                <mat-icon pxb-icon [style.backgroundColor]="colors.blue[500]"
                    style="color: white;">check_circle</mat-icon>
                <span pxb-right-content>
                    <pxb-channel-value value="478" units="V"></pxb-channel-value>,&nbsp;
                    <pxb-channel-value value="479" units="V"></pxb-channel-value>,&nbsp;
                    <pxb-channel-value value="473" units="V"></pxb-channel-value>
                </span>
            </pxb-info-list-item>
    
            <pxb-info-list-item [style.color]="colors.red[500]" [statusColor]="colors.red[500]" [divider]="divider" [avatar]="true">
                <div pxb-title>Output Voltage</div>
                <div pxb-subtitle>Phase A · Phase B · Phase C</div>
                <mat-icon pxb-icon [style.backgroundColor]="colors.red[500]"
                    style="color: white">check_circle</mat-icon>
                <span pxb-right-content>
                    <pxb-channel-value value="478" units="V"></pxb-channel-value>,&nbsp;
                    <pxb-channel-value value="479" units="V"></pxb-channel-value>,&nbsp;
                    <pxb-channel-value value="473" units="V"></pxb-channel-value>
                </span>
            </pxb-info-list-item>
    
            <pxb-info-list-item dense="true" [divider]="divider" [iconAlign]="'center'">
                <div pxb-title>Output Current</div>
                <mat-icon pxb-icon>battery_charging_full</mat-icon>
                <span pxb-right-content>
                    <pxb-channel-value value="15" units="A"></pxb-channel-value>,&nbsp;
                    <pxb-channel-value value="14.9" units="A"></pxb-channel-value>,&nbsp;
                    <pxb-channel-value value="15" units="A"></pxb-channel-value>
                </span>
            </pxb-info-list-item>
    
            <pxb-info-list-item dense="true" [divider]="divider" [iconAlign]="'center'">
                <div pxb-title>Temperature</div>
                <mat-icon pxb-icon>home</mat-icon>
                <span pxb-right-content style="display: flex; align-items: center">
                    <pxb-channel-value value="68" units="°F"></pxb-channel-value>
                </span>
            </pxb-info-list-item>
        </mat-nav-list>
    `,
    props: {
        colors: Colors,
        divider: select('divider', ['full', 'partial', ''], 'full'),
    },
});
