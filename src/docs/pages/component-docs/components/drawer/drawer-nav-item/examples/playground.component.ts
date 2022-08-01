import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActiveItemBackgroundShape, DrawerComponent } from '@brightlayer-ui/angular-components';

@Component({
    selector: 'app-nav-item-playground',
    template: ` <blui-drawer style="width: 250px">
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item
                    [activeItemBackgroundShape]="activeItemBackgroundShape"
                    [chevron]="chevron"
                    [divider]="divider"
                    [hidden]="hidden"
                    [hidePadding]="hidePadding"
                    [ripple]="ripple"
                    [statusColor]="statusColor"
                    [subtitle]="subtitle"
                    [title]="title"
                    [selected]="true"
                >
                </blui-drawer-nav-item>
                <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
                <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </blui-drawer-body>
    </blui-drawer>`,
})
export class PlaygroundComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() chevron: boolean;
    @Input() divider: boolean;
    @Input() activeItemBackgroundShape: ActiveItemBackgroundShape;
    @Input() hidePadding: boolean;
    @Input() hidden: boolean;
    @Input() ripple: boolean;
    @Input() statusColor: string;
    @Output() codeChange = new EventEmitter<string>();

    @ViewChild(DrawerComponent) drawer;

    ngAfterViewInit(): void {
        this.drawer.openOnHover = false;
    }

    ngOnChanges(): void {
        this.codeChange.emit(this._createGeneratedCode());
    }

    private _createGeneratedCode(): string {
        return `<blui-drawer style="width: 250px">
    <blui-drawer-body>
        <blui-drawer-nav-group>
            <blui-drawer-nav-item 
                activeItemBackgroundShape="${this.activeItemBackgroundShape}"
                [chevron]="${this.chevron}"
                [divider]="${this.divider}"
                [hidePadding]="${this.hidePadding}"
                [hidden]="${this.hidden}"
                [ripple]="${this.ripple}"
                [selected]="true"
                subtitle="${this.subtitle}"
                [statusColor]="${this.statusColor}"
                title="${this.title}">
            </blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 2"></blui-drawer-nav-item>
            <blui-drawer-nav-item title="Item 3"></blui-drawer-nav-item>
        </blui-drawer-nav-group>
    </blui-drawer-body>
</blui-drawer>`;
    }
}
