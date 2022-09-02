import { Component } from '@angular/core';

export const BASIC = `<blui-empty-state title="Location Unknown">
    <mat-icon blui-empty-icon>not_listed_location</mat-icon>
</blui-empty-state>
`;

@Component({
    selector: 'app-basic-empty-state-demo',
    template: BASIC,
})
export class BasicExampleComponent {}
