import { Component } from '@angular/core';

export const BASIC = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-header title="Title"></blui-drawer-header>
    </blui-drawer-body>
</blui-drawer>
`;

@Component({
    selector: 'app-basic-drawer-header-demo',
    template: BASIC,
})
export class BasicExampleComponent {}
