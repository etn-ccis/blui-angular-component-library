import { Component } from '@angular/core';

export const BASIC = `<div style="width: 200px; display: flex; justify-content: space-between">
    <blui-list-item-tag label="Default Tag"></blui-list-item-tag>
    <blui-list-item-tag 
        label="Custom Tag" 
        fontColor="#424e54"
        backgroundColor="#f0cb2f">
    </blui-list-item-tag>
</div>`;

@Component({
    selector: 'app-basic-list-item-tag-demo',
    template: BASIC,
})
export class BasicExample {}
