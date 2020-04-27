import * as Colors from '@pxblue/colors';
// import { InfoListItem, ListItemTag } from '@pxblue/angular-components';

export const withinAnInfoListItem = (): any => ({
    template: `
        <div style="background-color: white;">
            <pxb-info-list-item style="display: flex; justify-content: center; width: 80%;">
                <div title>Info List Item </div>
                <div subtitle>with a ListItemTag component to the right</div>
                <mat-icon [style.color]="colors.blue[500]" icon>battery_charging_full</mat-icon>
                <div rightContent style="width: 180px; display: flex; justify-content: space-between; align: right;">
                    <pxb-list-item-tag label="Build Passing" [backgroundColor]="colors.green[500]" [fontColor]="colors.white[50]"></pxb-list-item-tag>
                    <pxb-list-item-tag label="5 Bugs" [backgroundColor]="colors.yellow[500]" [fontColor]="colors.white[50]"></pxb-list-item-tag>
                </div>
            </pxb-info-list-item>
        </div>
      `,
    props: {
        colors: Colors
    }
});