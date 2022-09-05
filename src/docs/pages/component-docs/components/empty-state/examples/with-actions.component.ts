import { Component } from '@angular/core';

export const WITH_ACTIONS = `<blui-empty-state 
    title="No Devices"
    description="Check your network connection or add a new device">
    <mat-icon blui-empty-icon>devices</mat-icon>
    <button blui-actions blui-inline mat-stroked-button color="primary">
        <mat-icon>add</mat-icon>
        <span>Add Device</span>
    </button> 
</blui-empty-state>
`;

@Component({
    selector: 'app-with-actions-empty-state-demo',
    template: WITH_ACTIONS,
})
export class WithActionsComponent {}
