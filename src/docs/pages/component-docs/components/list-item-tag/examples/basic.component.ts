import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const BASIC = `<div style="width: 200px; display: flex; justify-content: space-between">
    <blui-list-item-tag label="Default Tag"></blui-list-item-tag>
    <blui-list-item-tag 
        label="Custom Tag" 
        [backgroundColor]="colors.red[500]" 
        [fontColor]="colors.white[50]">
    </blui-list-item-tag>
</div>`;

@Component({
    selector: 'app-basic-list-item-tag-demo',
    template: BASIC,
})
export class BasicExample {
    colors = Colors;
}
