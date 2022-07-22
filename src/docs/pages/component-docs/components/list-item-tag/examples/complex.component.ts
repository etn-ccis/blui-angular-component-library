import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const COMPLEX = `<blui-info-list-item [style.backgroundColor]="colors.white[50]">
    <div blui-title>Info List Item </div>
    <div blui-subtitle>with a ListItemTag component to the right</div>
    <mat-icon blui-icon [style.color]="colors.blue[500]">battery_charging_full</mat-icon>
    <div blui-right-content>
        <blui-list-item-tag 
            label="Build Passing" 
            style="margin: 0 16px"
            [backgroundColor]="colors.green[300]" 
            [fontColor]="colors.black[900]">
        </blui-list-item-tag>
        <blui-list-item-tag 
            label="5 Bugs" 
            [backgroundColor]="colors.red[300]" 
            [fontColor]="colors.black[900]">
        </blui-list-item-tag>
    </div>
</blui-info-list-item>`;

@Component({
    selector: 'app-complex-list-item-tag-demo',
    template: COMPLEX,
})
export class ComplexExample {
    colors = Colors;
}
