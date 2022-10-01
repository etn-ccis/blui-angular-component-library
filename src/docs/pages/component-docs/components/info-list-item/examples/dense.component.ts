import { Component } from '@angular/core';

export const DENSE = `<blui-info-list-item [dense]="true">
    <div blui-title>Dense Info List Item</div>
</blui-info-list-item>
`;

@Component({
    selector: 'app-dense-info-list-item-demo',
    template: DENSE,
})
export class DenseComponent {}
