import { Component } from '@angular/core';

export const WITH_ICON = `<blui-hero label="Velocity" value="470" units="RPM">
    <i blui-primary class="blui-fan"></i>
    <mat-icon blui-secondary>trending_up</mat-icon>
</blui-hero>
`;

@Component({
    selector: 'app-with-icon-hero-demo',
    template: WITH_ICON,
})
export class WithIconComponent {}
