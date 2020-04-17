import * as Colors from '@pxblue/colors';

export const withinAnInfoListItem = (): any => ({
    template: `
        <pxb-info-list-item title="Info List Item" subtitle="with a ListItemTag component to the right">
            <mat-icon [style.color]="colors.blue[500]" icon>battery_charging_full</mat-icon>
            <pxb-list-item-tag label={'Build Passing'} backgroundColor={Colors.green['500']} right-component></pxb-list-item-tag>
            <pxb-list-item-tag label={'5 Bugs'} backgroundColor={Colors.yellow['500']} right-component></pxb-list-item-tag>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors
    }
});