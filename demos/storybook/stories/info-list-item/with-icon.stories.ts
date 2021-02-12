import * as Colors from '@pxblue/colors';
import { select } from '@storybook/addon-knobs';

export const withIcon = (): any => ({
    template: `
        <pxb-info-list-item [iconAlign]="iconAlign">
            <span pxb-title>Info List Item</span>
            <span pxb-subtitle>with an icon</span>
            <mat-icon [style.color]="colors.black[500]" pxb-icon>alarm</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        colors: Colors,
        iconAlign: select('iconAlign', ['left', 'center', 'right'], 'left'),
    },
});
