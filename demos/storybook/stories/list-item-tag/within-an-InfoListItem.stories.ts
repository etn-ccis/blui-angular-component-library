import * as Colors from '@brightlayer-ui/colors';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

export const withinAnInfoListItem = (): any => ({
    template: `
        <blui-info-list-item>
            <div blui-title>Info List Item </div>
            <div blui-subtitle>with a ListItemTag component to the right</div>
            <mat-icon blui-icon [style.color]="colors.blue[500]">battery_charging_full</mat-icon>
            <div blui-right-content>
                <blui-list-item-tag 
                    label="Build Passing" 
                    [style.marginRight.px]="direction() === 'rtl' ? 0 : 16"
                    [style.marginLeft.px]="direction() === 'rtl' ? 16 : 0"
                    [backgroundColor]="colors.green[300]" 
                    [fontColor]="colors.black[900]">
                </blui-list-item-tag>
                <blui-list-item-tag 
                    label="5 Bugs" 
                    [backgroundColor]="colors.red[300]" 
                    [fontColor]="colors.black[900]">
                </blui-list-item-tag>
            </div>
        </blui-info-list-item>
    `,
    props: {
        colors: Colors,
        direction: getDirection,
    },
});
