import { Component } from '@angular/core';

export const BASIC = `<blui-info-list-item>
    <div blui-title>Info List Item</div>
</blui-info-list-item>
`;

@Component({
    selector: 'app-basic-info-list-item-demo',
    template: BASIC,
})
export class BasicExampleComponent {}
