import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const COMPLEX = `<blui-info-list-item [style.backgroundColor]="'#ffffff'">
    <div blui-title>Info List Item </div>
    <div blui-subtitle>with a ListItemTag component to the right</div>
    <mat-icon blui-icon [style.color]="'#007bc1'">battery_charging_full</mat-icon>
    <div blui-right-content>
        <blui-list-item-tag 
            label="Build Passing" 
            style="margin: 0 16px"
            backgroundColor="#74cc63" 
            fontColor="#1d2529">
        </blui-list-item-tag>
        <blui-list-item-tag 
            label="5 Bugs" 
            backgroundColor="#da7777" 
            fontColor="#1d2529">
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
