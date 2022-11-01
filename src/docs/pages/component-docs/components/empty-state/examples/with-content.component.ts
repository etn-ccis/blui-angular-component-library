import { Component } from '@angular/core';

export const WITH_CONTENT = `<blui-empty-state>
    <div blui-title>Request Permission</div>
    <div blui-description>You must <a>contact your system admin</a> to view this content.</div>
    <mat-icon blui-empty-icon>report</mat-icon>
</blui-empty-state>
`;

@Component({
    selector: 'app-with-content-empty-state-demo',
    template: WITH_CONTENT,
})
export class WithContentComponent {}
