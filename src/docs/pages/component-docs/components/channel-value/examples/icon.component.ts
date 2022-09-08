import { Component } from '@angular/core';

export const WITH_ICON = `<blui-channel-value value="123" units="hz">
   <mat-icon>trending_up</mat-icon>
</blui-channel-value>`;

@Component({
    selector: 'app-icon-channel-value-demo',
    template: WITH_ICON,
})
export class IconComponent {}
