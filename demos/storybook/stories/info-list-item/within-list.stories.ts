import * as Colors from '@pxblue/colors';
import { select } from '@storybook/addon-knobs';

export const withinList = (): any => ({
    template: `
        <pxb-info-list-item title="Status" [statusColor]="colors.green[500]" [divider]="divider" class="test">
            <mat-icon icon [style.color]="colors.green[500]">eco</mat-icon>
            <pxb-channel-value rightComponent value="Online, ESS+" [fontSize]="fontSize"></pxb-channel-value>
        </pxb-info-list-item>

        <pxb-info-list-item title="Input Voltage" subtitle="Phase A · Phase B · Phase C" [divider]="divider" [avatar]="true">
            <mat-icon icon [style.backgroundColor]="colors.black[500]"
                style="color: white;">check_circle</mat-icon>
            <span rightComponent>
                <pxb-channel-value value="478" units="V" [fontSize]="fontSize"></pxb-channel-value>,
                <pxb-channel-value value="479" units="V" [fontSize]="fontSize"></pxb-channel-value>,
                <pxb-channel-value value="473" units="V" [fontSize]="fontSize"></pxb-channel-value>
            </span>
        </pxb-info-list-item>

        <pxb-info-list-item title="Output Voltage" subtitle="Phase A · Phase B · Phase C"
            [style.color]="colors.red[500]" [statusColor]="colors.red[500]" [divider]="divider" [avatar]="true">
            <mat-icon icon [style.backgroundColor]="colors.red[500]"
                style="color: white">check_circle</mat-icon>
            <span rightComponent>
                <pxb-channel-value value="478" units="V" [fontSize]="fontSize"></pxb-channel-value>,
                <pxb-channel-value value="479" units="V" [fontSize]="fontSize"></pxb-channel-value>,
                <pxb-channel-value value="473" units="V" [fontSize]="fontSize"></pxb-channel-value>
            </span>
        </pxb-info-list-item>

        <pxb-info-list-item title="Output Current" [divider]="divider">
            <mat-icon icon [style.color]="colors.black[500]">battery_charging_full</mat-icon>
            <span rightComponent>
                <pxb-channel-value value="15" units="A" [fontSize]="fontSize"></pxb-channel-value>,
                <pxb-channel-value value="14.9" units="A" [fontSize]="fontSize"></pxb-channel-value>,
                <pxb-channel-value value="15" units="A" [fontSize]="fontSize"></pxb-channel-value>
            </span>
        </pxb-info-list-item>

        <pxb-info-list-item title="Temperature" [divider]="divider">
            <mat-icon icon [style.color]="colors.black[500]">home</mat-icon>
            <span rightComponent style="display: flex; align-items: center">
                <mat-icon [style.color]="colors.green[500]">eco</mat-icon>
                <pxb-channel-value value="68" units="°F" [fontSize]="fontSize"></pxb-channel-value>
            </span>
        </pxb-info-list-item>
    `,
    props: {
        colors: Colors,
        fontSize: 16,
        divider: select('divider', ['full', 'partial', ''], 'full'),
    },
});
