import * as Colors from '@pxblue/colors';

export const withIcon = (): any => ({
    template: `
        <pxb-info-list-item>
            <span pxb-title>Info List Item</span>
            <span pxb-subtitle>with an icon</span>
            <mat-icon [style.color]="colors.green[700]" pxb-icon>eco</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors,
    },
});
