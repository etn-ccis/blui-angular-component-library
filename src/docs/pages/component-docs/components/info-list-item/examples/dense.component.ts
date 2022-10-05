import { Component } from '@angular/core';

export const DENSE = `<blui-info-list-item [dense]="true" divider="full">
    <div blui-title>Dense Info List Item 1</div>
</blui-info-list-item>
<blui-info-list-item [dense]="true" divider="full">
    <div blui-title>Dense Info List Item 2</div>
</blui-info-list-item>
<blui-info-list-item [dense]="true">
    <div blui-title>Dense Info List Item 3</div>
</blui-info-list-item>
`;

@Component({
    selector: 'app-dense-info-list-item-demo',
    template: DENSE,
})
export class DenseComponent {}
