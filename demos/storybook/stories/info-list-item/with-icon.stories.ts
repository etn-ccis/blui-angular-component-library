import * as Colors from '@pxblue/colors';

export const withIcon = (): any => ({
    template: `
        <pxb-info-list-item>
            <span title>Info List Item</span>
            <span subtitle>with an icon</span>
            <mat-icon [style.color]="colors.green[500]" icon>eco</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors,
    },
});
