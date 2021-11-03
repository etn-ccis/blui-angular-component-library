import * as Colors from '@brightlayer-ui/colors';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

export const withLeftContent = (): any => ({
    template: `
        <blui-info-list-item>
            <div blui-title>Info List Item</div>
            <div blui-subtitle>with a timestamp as a left component</div>
            <mat-icon [style.color]="colors.blue[500]" blui-icon>battery_charging_full</mat-icon>
            <div blui-left-content style="display: flex; flex-direction: column"
                [style.marginRight.px]="direction() === 'rtl' ? 0 : 48"
                [style.marginLeft.px]="direction() === 'rtl' ? 48 : 0">
                <div class="mat-body-2">
                    8:32 <strong>AM</strong>
                </div>
                <div class="mat-body-2" style="margin-top: -4px">11/21/21</div>
            </div>
        </blui-info-list-item>
      `,
    props: {
        colors: Colors,
        direction: getDirection,
    },
});
