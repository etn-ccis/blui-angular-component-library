import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const STATUS = `<blui-info-list-item [statusColor]="Colors.green[700]" [avatar]="true">
    <div blui-title>Info List Item</div>
    <div blui-subtitle>with a status indicator</div>
    <mat-icon blui-icon [style.backgroundColor]="Colors.green[700]" style="color: white">offline_bolt</mat-icon>
</blui-info-list-item>
`;

@Component({
    selector: 'app-with-status-info-list-item-demo',
    template: STATUS,
})
export class WithStatusComponent {
    Colors = Colors;
}
