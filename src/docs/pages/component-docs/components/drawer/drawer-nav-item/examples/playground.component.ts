import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DrawerComponent } from '@brightlayer-ui/angular-components';

export const PLAYGROUND = `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item 
                [title]="title"
                [subtitle]="subtitle"
                [chevron]="chevron"
                [divider]="divider"
                [selected]="true"
                activeItemBackgroundShape="square">
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 2">
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 3">
            </blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>`;

@Component({
    selector: 'app-nav-item-playground',
    template: PLAYGROUND,
})
export class PlaygroundComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() chevron: boolean;
    @Input() divider: boolean;
    @Output() codeChange = new EventEmitter<string>();

    @ViewChild(DrawerComponent) drawer;

    ngAfterViewInit(): void {
        this.drawer.openOnHover = false;
    }

    ngOnChanges(): void {
        this.codeChange.emit(this._createGeneratedCode());
    }

    private _createGeneratedCode(): string {
        return `
<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item 
                title="${this.title}"
                subtitle="${this.subtitle}"
                [chevron]="${this.chevron}"
                [divider]="${this.divider}"
                [selected]="true"
                activeItemBackgroundShape="square">
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>
        `;
    }
}
