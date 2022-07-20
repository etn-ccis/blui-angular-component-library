import { Component } from '@angular/core';

@Component({
    selector: 'md-list-item-tag-doc',
    template: ` <app-component-doc-scaffold mdFileName="ListItemTag.md">
        <div examples>
            <div>List Item Tag examples go here.</div>
            <div>
                <blui-list-item-tag label="Default Tag"></blui-list-item-tag>
            </div>
            <div>
                <blui-list-item-tag label="Red Tag" backgroundColor="red"></blui-list-item-tag>
            </div>
        </div>
        <div playground>
            <blui-list-item-tag [label]="label"></blui-list-item-tag>
        </div>
        <div knobs>
            <app-text-knob label="label" [(value)]="label"></app-text-knob>
        </div>
    </app-component-doc-scaffold>`,
    styleUrls: ['./list-item-tag.component.scss'],
})
export class ListItemTagDocComponent {
    label = 'label';
}
