import * as Colors from '@pxblue/colors';
import {color} from "@storybook/addon-knobs";

export const withStatus = (): any => ({
    template: `
        <pxb-info-list-item title="Info List Item" subtitle="with a status indicator" [statusColor]="statusColor">
            <mat-icon icon
                [style.backgroundColor]="statusColor"
                style="padding: 8px; border-radius: 50%; color: white">offline_bolt</mat-icon>
        </pxb-info-list-item>
      `,
    props: {
        statusColor: color('statusColor', Colors.green[500])
    }
});
