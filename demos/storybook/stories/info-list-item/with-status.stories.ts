import * as Colors from '@pxblue/colors';
import { color } from '@storybook/addon-knobs';

export const withStatus = (): any => ({
    template: `
        <pxb-info-list-item [statusColor]="statusColor" [avatar]="true">
            <div title>Info List Item</div>
            <div subtitle>with a status indicator</div>
            <mat-icon icon [style.backgroundColor]="statusColor" [style.color]="'white'">offline_bolt</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        statusColor: color('statusColor', Colors.green[700]),
    },
});
