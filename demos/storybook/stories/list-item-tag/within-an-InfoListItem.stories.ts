import * as Colors from '@pxblue/colors';
// import { InfoListItem, ListItemTag } from '@pxblue/angular-components';

export const withinAnInfoListItem = (): any => ({
    template: `
        <div style="background-color:colors.white[50]; ">
            <pxb-info-list-item title="Info List Item" subtitle="with a ListItemTag component to the right">
                <mat-icon [style.color]="colors.blue[500]" icon>battery_charging_full</mat-icon>
                <div right-component style="width: 180px; display: flex; justify-content: space-between;">
                    <pxb-list-item-tag label="Build Passing" backgroundColor="colors.green[500]" fontColor="colors.white[50]"></pxb-list-item-tag>
                    <pxb-list-item-tag label="5 Bugs" backgroundColor="colors.yellow[500]" fontColor="colors.white[50]"></pxb-list-item-tag>
                </div>
            </pxb-info-list-item>
        </div>
      `,
    props: {
        colors: Colors
    }
});