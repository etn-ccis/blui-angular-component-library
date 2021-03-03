import * as Colors from '@pxblue/colors';

export const withinAnInfoListItem = (): any => ({
    template: `
        <pxb-info-list-item>
            <div pxb-title>Info List Item </div>
            <div pxb-subtitle>with a ListItemTag component to the right</div>
            <mat-icon pxb-icon [style.color]="colors.blue[500]">battery_charging_full</mat-icon>
            <div pxb-right-content>
                <pxb-list-item-tag 
                    label="Build Passing" 
                    [style.marginRight.px]="16"
                    [backgroundColor]="colors.green[300]" 
                    [fontColor]="colors.black[900]">
                </pxb-list-item-tag>
                <pxb-list-item-tag 
                    label="5 Bugs" 
                    [backgroundColor]="colors.red[300]" 
                    [fontColor]="colors.black[900]">
                </pxb-list-item-tag>
            </div>
        </pxb-info-list-item>
    `,
    props: {
        colors: Colors,
    },
});
