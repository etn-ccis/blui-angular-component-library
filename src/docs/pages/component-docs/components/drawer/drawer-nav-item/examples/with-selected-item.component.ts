import { Component } from '@angular/core';

export const WITH_SELECTED_ITEM = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item 
                title="Item 1" 
                subtitle="with square highlight" 
                activeItemBackgroundShape="square"
                (click)="selectItem(1)"
                [selected]="isSelected(1)">
            </blui-drawer-nav-item>
            <blui-drawer-nav-item 
                title="Item 2" 
                subtitle="with round highlight" 
                activeItemBackgroundShape="round"
                (click)="selectItem(2)"
                [selected]="isSelected(2)">
            </blui-drawer-nav-item>
            <blui-drawer-nav-item 
                title="Item 3" 
                subtitle="with default highlight" 
                (click)="selectItem(3)"
                [selected]="isSelected(3)">
            </blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>`;

@Component({
    selector: 'app-nav-item-with-selected-item-demo',
    template: WITH_SELECTED_ITEM,
})
export class WithSelectedItemComponent {
    selectedId = 1;

    selectItem(id: number): void {
        this.selectedId = id;
    }

    isSelected(id: number): boolean {
        return this.selectedId === id;
    }
}
