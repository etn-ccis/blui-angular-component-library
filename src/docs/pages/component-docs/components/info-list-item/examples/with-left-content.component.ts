import { Component } from '@angular/core';

export const LEFT_CONTENT = `<blui-info-list-item>
    <div blui-title>Info List Item</div>
    <div blui-subtitle>with a timestamp as a left component</div>
    <mat-icon style="color: #007bc1" blui-icon>battery_charging_full</mat-icon>
    <div blui-left-content style="display: flex; flex-direction: column; margin-right: 40px">
        <div class="mat-caption"><strong>8:32 </strong> AM</div>
        <div class="mat-caption" style="margin-top: -4px">11/21/21</div>
    </div>
</blui-info-list-item>
`;

@Component({
    selector: 'app-with-left-content-info-list-item-demo',
    template: LEFT_CONTENT,
})
export class WithLeftContentComponent {}
