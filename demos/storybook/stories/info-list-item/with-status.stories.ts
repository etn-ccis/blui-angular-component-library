import * as Colors from '@brightlayer-ui/colors';
import { color } from '@storybook/addon-knobs';

export const withStatus = (): any => ({
    template: `
        <blui-info-list-item [statusColor]="statusColor" [avatar]="true">
            <div blui-title>Info List Item</div>
            <div blui-subtitle>with a status indicator</div>
            <mat-icon blui-icon [style.backgroundColor]="statusColor" [style.color]="'white'">offline_bolt</mat-icon>
        </blui-info-list-item>
      `,
    props: {
        statusColor: color('statusColor', Colors.green[700]),
    },
});
