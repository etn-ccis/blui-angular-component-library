import * as Colors from '@brightlayer-ui/colors';
import { select } from '@storybook/addon-knobs';

export const withIcon = (): any => ({
    template: `
        <blui-info-list-item [iconAlign]="iconAlign">
            <span blui-title>Info List Item</span>
            <span blui-subtitle>with an icon</span>
            <mat-icon blui-icon>alarm</mat-icon>
        </blui-info-list-item>
      `,
    props: {
        colors: Colors,
        iconAlign: select('iconAlign', ['left', 'center', 'right'], 'left'),
    },
});
