import { Component } from '@angular/core';

@Component({
    selector: 'app-coming-soon',
    template: `
        <blui-empty-state
            title="Coming Soon"
            description="This section is still under development."
            style="margin-top: 112px"
        >
            <mat-icon blui-empty-icon>construction</mat-icon>
        </blui-empty-state>
    `,
})
export class ComingSoonComponent {}
