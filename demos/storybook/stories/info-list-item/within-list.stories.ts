import * as Colors from '@pxblue/colors';
import { select } from '@storybook/addon-knobs';

export const withinList = (): any => ({
    template: `
        <mat-nav-list [style.paddingTop.px]="0">
            <pxb-info-list-item [statusColor]="colors.green[700]" [divider]="divider" class="test">
                <div title>Status</div>
                <mat-icon icon [style.color]="colors.green[700]">eco</mat-icon>
                <pxb-channel-value rightContent value="Online, ESS+"></pxb-channel-value>
            </pxb-info-list-item>
    
            <pxb-info-list-item [divider]="divider" [avatar]="true">
                <div title>Input Voltage</div>
                <div subtitle>Phase A · Phase B · Phase C</div>
                <mat-icon icon [style.backgroundColor]="colors.blue[500]"
                    style="color: white;">check_circle</mat-icon>
                <span rightContent>
                    <pxb-channel-value value="478" units="V"></pxb-channel-value>,
                    <pxb-channel-value value="479" units="V"></pxb-channel-value>,
                    <pxb-channel-value value="473" units="V"></pxb-channel-value>
                </span>
            </pxb-info-list-item>
    
            <pxb-info-list-item [style.color]="colors.red[500]" [statusColor]="colors.red[500]" [divider]="divider" [avatar]="true">
                <div title>Output Voltage</div>
                <div subtitle>Phase A · Phase B · Phase C</div>
                <mat-icon icon [style.backgroundColor]="colors.red[500]"
                    style="color: white">check_circle</mat-icon>
                <span rightContent>
                    <pxb-channel-value value="478" units="V"></pxb-channel-value>,
                    <pxb-channel-value value="479" units="V"></pxb-channel-value>,
                    <pxb-channel-value value="473" units="V"></pxb-channel-value>
                </span>
            </pxb-info-list-item>
    
            <pxb-info-list-item [divider]="divider">
                <div title>Output Current</div>
                <mat-icon icon>battery_charging_full</mat-icon>
                <span rightContent>
                    <pxb-channel-value value="15" units="A"></pxb-channel-value>,
                    <pxb-channel-value value="14.9" units="A"></pxb-channel-value>,
                    <pxb-channel-value value="15" units="A"></pxb-channel-value>
                </span>
            </pxb-info-list-item>
    
            <pxb-info-list-item [divider]="divider">
                <div title>Temperature</div>
                <mat-icon icon>home</mat-icon>
                <span rightContent style="display: flex; align-items: center">
                    <mat-icon [style.color]="colors.green[700]">eco</mat-icon>
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
