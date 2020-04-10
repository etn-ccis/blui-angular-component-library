import * as Colors from '@pxblue/colors';

export const withIcon = (): any => ({
    template: `
        <pxb-info-list-item title="Info List Item" subtitle="with an icon">
            <mat-icon [style.color]="colors.green[500]" icon>eco</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors
    }
});
