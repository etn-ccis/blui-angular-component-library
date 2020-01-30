/**
 * @fileoverview added by tsickle
 * Generated from: channel-value/channel-value.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ChannelValueComponent {
    constructor() {
        this.fontSize = 'inherit';
        this.prefix = false;
        this.color = 'inherit';
    }
}
ChannelValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'pxb-channel-value',
                template: `
        <span class="value-wrapper" [style.color]="color" [style.fontSize.px]="fontSize">
            <span class="icon">
                <ng-content></ng-content>
            </span>
            <h5 *ngIf="units && prefix" class="text units">{{ units }}</h5>
            <h5 *ngIf="value" class="text value">{{ value }}</h5>
            <h5 *ngIf="units && !prefix" class="text units">{{ units }}</h5>
        </span>
    `,
                styles: [":host{display:-webkit-inline-box;display:inline-flex}.value-wrapper{display:-webkit-box;display:flex}.text{font-size:inherit;line-height:1.2;letter-spacing:0;margin:0}.units{font-weight:300}.value{font-weight:600}.icon{font-size:inherit;display:block;margin-right:5px}.icon:empty{display:none}.icon ::ng-deep mat-icon{display:block;width:100%;height:100%;font-size:100%;line-height:1.2}"]
            }] }
];
ChannelValueComponent.propDecorators = {
    value: [{ type: Input }],
    units: [{ type: Input }],
    fontSize: [{ type: Input }],
    prefix: [{ type: Input }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ChannelValueComponent.prototype.value;
    /** @type {?} */
    ChannelValueComponent.prototype.units;
    /** @type {?} */
    ChannelValueComponent.prototype.fontSize;
    /** @type {?} */
    ChannelValueComponent.prototype.prefix;
    /** @type {?} */
    ChannelValueComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY2hhbm5lbC12YWx1ZS9jaGFubmVsLXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0JqRCxNQUFNLE9BQU8scUJBQXFCO0lBZGxDO1FBaUJhLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFVBQUssR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7O1lBcEJBLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7OztLQVNUOzthQUVKOzs7b0JBRUksS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBSk4sc0NBQXVCOztJQUN2QixzQ0FBdUI7O0lBQ3ZCLHlDQUE4Qjs7SUFDOUIsdUNBQXdCOztJQUN4QixzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHhiLWNoYW5uZWwtdmFsdWUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWUtd3JhcHBlclwiIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiIFtzdHlsZS5mb250U2l6ZS5weF09XCJmb250U2l6ZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGg1ICpuZ0lmPVwidW5pdHMgJiYgcHJlZml4XCIgY2xhc3M9XCJ0ZXh0IHVuaXRzXCI+e3sgdW5pdHMgfX08L2g1PlxuICAgICAgICAgICAgPGg1ICpuZ0lmPVwidmFsdWVcIiBjbGFzcz1cInRleHQgdmFsdWVcIj57eyB2YWx1ZSB9fTwvaDU+XG4gICAgICAgICAgICA8aDUgKm5nSWY9XCJ1bml0cyAmJiAhcHJlZml4XCIgY2xhc3M9XCJ0ZXh0IHVuaXRzXCI+e3sgdW5pdHMgfX08L2g1PlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9jaGFubmVsLXZhbHVlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYW5uZWxWYWx1ZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgICBASW5wdXQoKSB1bml0czogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJ2luaGVyaXQnO1xuICAgIEBJbnB1dCgpIHByZWZpeCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNvbG9yID0gJ2luaGVyaXQnO1xufVxuIl19