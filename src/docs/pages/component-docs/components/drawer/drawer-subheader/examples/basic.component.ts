import { Component } from '@angular/core';

export const BASIC = `<blui-drawer style="width: 250px">
    <blui-drawer-header title="Title"></blui-drawer-header>
    <blui-drawer-subheader>
        <div style="padding: 16px">Custom Content Goes here</div>
    </blui-drawer-subheader>
</blui-drawer>
`;

@Component({
    selector: 'app-basic-drawer-subheader-demo',
    template: BASIC,
})
export class BasicExampleComponent {}
