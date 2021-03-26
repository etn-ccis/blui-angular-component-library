import * as Colors from '@pxblue/colors';
import { getDirection } from '@pxblue/storybook-rtl-addon';

export const withLeftContent = (): any => ({
    template: `
        <pxb-info-list-item>
            <div pxb-title>Info List Item</div>
            <div pxb-subtitle>with a timestamp as a left component</div>
            <mat-icon [style.color]="colors.blue[500]" pxb-icon>battery_charging_full</mat-icon>
            <div pxb-left-content style="display: flex; flex-direction: column"
                [style.marginRight.px]="direction() === 'rtl' ? 0 : 48"
                [style.marginLeft.px]="direction() === 'rtl' ? 48 : 0">
                <div class="mat-body-2">
                    8:32 <strong>AM</strong>
                </div>
                <div class="mat-body-2" style="margin-top: -4px">11/21/21</div>
            </div>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors,
        direction: getDirection,
    },
});
