import { Component } from '@angular/core';

export const WITH_DESCRIPTION = `<blui-empty-state 
    title="Location Services Disabled"
    description="Enable Location Services via Settings to receive GPS information">
    <mat-icon blui-empty-icon>location_off</mat-icon>
</blui-empty-state>
`;

@Component({
    selector: 'app-with-description-empty-state-demo',
    template: WITH_DESCRIPTION,
})
export class WithDescriptionComponent {}
