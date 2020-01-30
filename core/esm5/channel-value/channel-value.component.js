/**
 * @fileoverview added by tsickle
 * Generated from: channel-value/channel-value.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var ChannelValueComponent = /** @class */ (function () {
    function ChannelValueComponent() {
        this.fontSize = 'inherit';
        this.prefix = false;
        this.color = 'inherit';
    }
    ChannelValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pxb-channel-value',
                    template: "\n        <span class=\"value-wrapper\" [style.color]=\"color\" [style.fontSize.px]=\"fontSize\">\n            <span class=\"icon\">\n                <ng-content></ng-content>\n            </span>\n            <h5 *ngIf=\"units && prefix\" class=\"text units\">{{ units }}</h5>\n            <h5 *ngIf=\"value\" class=\"text value\">{{ value }}</h5>\n            <h5 *ngIf=\"units && !prefix\" class=\"text units\">{{ units }}</h5>\n        </span>\n    ",
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
    return ChannelValueComponent;
}());
export { ChannelValueComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY2hhbm5lbC12YWx1ZS9jaGFubmVsLXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBQUE7UUFpQmEsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsVUFBSyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOztnQkFwQkEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSx1Y0FTVDs7aUJBRUo7Ozt3QkFFSSxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBQ1YsNEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQU5ZLHFCQUFxQjs7O0lBQzlCLHNDQUF1Qjs7SUFDdkIsc0NBQXVCOztJQUN2Qix5Q0FBOEI7O0lBQzlCLHVDQUF3Qjs7SUFDeEIsc0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3B4Yi1jaGFubmVsLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlLXdyYXBwZXJcIiBbc3R5bGUuY29sb3JdPVwiY29sb3JcIiBbc3R5bGUuZm9udFNpemUucHhdPVwiZm9udFNpemVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxoNSAqbmdJZj1cInVuaXRzICYmIHByZWZpeFwiIGNsYXNzPVwidGV4dCB1bml0c1wiPnt7IHVuaXRzIH19PC9oNT5cbiAgICAgICAgICAgIDxoNSAqbmdJZj1cInZhbHVlXCIgY2xhc3M9XCJ0ZXh0IHZhbHVlXCI+e3sgdmFsdWUgfX08L2g1PlxuICAgICAgICAgICAgPGg1ICpuZ0lmPVwidW5pdHMgJiYgIXByZWZpeFwiIGNsYXNzPVwidGV4dCB1bml0c1wiPnt7IHVuaXRzIH19PC9oNT5cbiAgICAgICAgPC9zcGFuPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hhbm5lbC12YWx1ZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFubmVsVmFsdWVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdW5pdHM6IHN0cmluZztcbiAgICBASW5wdXQoKSBmb250U2l6ZSA9ICdpbmhlcml0JztcbiAgICBASW5wdXQoKSBwcmVmaXggPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjb2xvciA9ICdpbmhlcml0Jztcbn1cbiJdfQ==