import { Component } from '@angular/core';

export const ICON = `<blui-info-list-item>
    <div blui-title>Info List Item</div>
    <div blui-subtitle>with an icon</div>
    <mat-icon blui-icon>alarm</mat-icon>
</blui-info-list-item>
`;

@Component({
    selector: 'app-with-icon-info-list-item-demo',
    template: ICON,
})
export class WithIconComponent {}
