import { Component } from '@angular/core';

export const BASIC = `<blui-info-list-item>
    <div blui-title>Info List Item Title</div>
    <div blui-subtitle>Info List Item Subtitle</div>
    <mat-icon blui-icon>alarm</mat-icon>
</blui-info-list-item>
`;

@Component({
    selector: 'app-basic-info-list-item-demo',
    template: BASIC,
})
export class BasicExampleComponent {}
