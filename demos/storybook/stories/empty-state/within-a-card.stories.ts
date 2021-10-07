import { action } from '@storybook/addon-actions';
import * as Colors from '@pxblue/colors';
import { invertRTL } from '../../src/utils';
import { getDirection } from '@pxblue/storybook-rtl-addon';

export const withinACardConfig = (): any => ({
    styles: [
        `
        ::ng-deep .accordion-panel .mat-expansion-panel .mat-expansion-panel-header {
            height: 48px!important;
        }
        ::ng-deep .accordion-panel .mat-expansion-panel .mat-expansion-panel-header .mat-expansion-indicator {
            margin-top: -4px;
        }
        ::ng-deep .accordion-panel .mat-expansion-panel .mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
            margin-top: 8px;
        }
    `,
    ],
    template: `
        <mat-accordion class="accordion-panel">
            <mat-expansion-panel [expanded]="true" [style.width.px]="392">
                <mat-expansion-panel-header style="border-bottom: 1px solid #d5d8da; border-radius: 0;">
                    <mat-panel-title [style.color]="colors.blue[500]">
                        Device Usage
                    </mat-panel-title>
                </mat-expansion-panel-header>
                <pxb-empty-state 
                    title="No Devices Found"
                    description="After you add devices to this repository, we will show your recent device activities here."
                    [style.margin.px]="24"
                >
                    <mat-icon pxb-empty-icon
                        [style.color]="colors.gray[500]"
                        [style.fontSize.px]="96"
                        [style.transform]="invertRTL()"
                    >
                        help_outline
                    </mat-icon>
                    <button pxb-actions mat-flat-button color="primary" (click)="click()">
                        <mat-icon 
                            style="height: 16px; width: 16px; font-size: 16px;"
                            [style.marginRight.px]="direction() === 'rtl' ? -4 : 8"
                            [style.marginLeft.px]="direction() === 'rtl' ? 8 : -4"
                        >
                            add
                        </mat-icon>
                        Learn More
                    </button>
                </pxb-empty-state>
            </mat-expansion-panel>
        </mat-accordion>
    `,
    props: {
        click: action('button clicked'),
        invertRTL: invertRTL,
        direction: getDirection,
        colors: Colors,
    },
});
