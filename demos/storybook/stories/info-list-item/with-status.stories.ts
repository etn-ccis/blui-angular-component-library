import * as Colors from '@pxblue/colors';
import {color} from "@storybook/addon-knobs";

export const withStatus = (): any => ({
    template: `
        <pxb-info-list-item title="Info List Item" subtitle="with a status indicator" [statusColor]="statusColor">
            <mat-icon [style.color]="statusColor" icon>offline_bolt</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        statusColor: color('statusColor', Colors.green[500])
    }
});
