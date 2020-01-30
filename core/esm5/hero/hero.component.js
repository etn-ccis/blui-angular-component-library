/**
 * @fileoverview added by tsickle
 * Generated from: hero/hero.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        this.iconSize = 'normal';
        this.iSize = 36;
        this.fontSize = 'normal';
    }
    /**
     * @return {?}
     */
    HeroComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // We can't support dynamic iconSize w/ px-blue icons until https://github.com/angular/components/issues/5188 is fixed
        this.iSize =
            this.iconSize === 'large'
                ? 72
                : this.iconSize === 'normal'
                    ? 36
                    : (this.iSize = Math.max(10, Math.min(72, parseInt(this.iconSize, 10))));
    };
    HeroComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pxb-hero',
                    template: "\n        <div class=\"wrapper\">\n            <span\n                class=\"icon\"\n                [class.large]=\"iconSize === 'large'\"\n                [style.height.px]=\"iSize\"\n                [style.width.px]=\"iSize\"\n                [style.font-size.px]=\"iSize\"\n            >\n                <ng-content select=\"[primary]\"></ng-content>\n            </span>\n            <span class=\"channel-value\" [style.font-size.rem]=\"fontSize == 'small' ? '1' : '1.25'\">\n                <ng-content *ngIf=\"value === undefined\" select=\"pxb-channel-value\"></ng-content>\n                <pxb-channel-value *ngIf=\"value !== undefined\" [value]=\"value\" [units]=\"units\">\n                    <ng-content select=\"[secondary]\"></ng-content>\n                </pxb-channel-value>\n            </span>\n            <h5 class=\"label\">{{ label }}</h5>\n        </div>\n    ",
                    inputs: ['color', 'label', 'value', 'units', 'fontSize', 'iconSize'],
                    styles: [":host{-webkit-box-flex:1;flex:1 1 0px}.wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;overflow:hidden;color:#727e84;padding:16px 8px}.icon{margin-bottom:8px;text-align:center;color:#556167}:host ::ng-deep .icon mat-icon{display:block;width:100%;height:100%;font-size:100%;line-height:1.2;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ::ng-deep .icon mat-icon svg{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-transform-origin:top left;transform-origin:top left}:host ::ng-deep .icon.large mat-icon svg{-webkit-transform:scale(3);transform:scale(3)}.channel-value{display:-webkit-box;display:flex;color:#556167}.label{font-size:inherit;line-height:1.2;letter-spacing:0;font-weight:600;width:100%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0}"]
                }] }
    ];
    HeroComponent.propDecorators = {
        color: [{ type: Input }],
        label: [{ type: Input }],
        value: [{ type: Input }],
        units: [{ type: Input }],
        iconSize: [{ type: Input }],
        iSize: [{ type: Input }],
        fontSize: [{ type: Input }]
    };
    return HeroComponent;
}());
export { HeroComponent };
if (false) {
    /** @type {?} */
    HeroComponent.prototype.color;
    /** @type {?} */
    HeroComponent.prototype.label;
    /** @type {?} */
    HeroComponent.prototype.value;
    /** @type {?} */
    HeroComponent.prototype.units;
    /** @type {?} */
    HeroComponent.prototype.iconSize;
    /** @type {?} */
    HeroComponent.prototype.iSize;
    /** @type {?} */
    HeroComponent.prototype.fontSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiaGVyby9oZXJvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBQUE7UUE4QmEsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQVdqQyxDQUFDOzs7O0lBVEcsZ0NBQVE7OztJQUFSO1FBQ0ksc0hBQXNIO1FBQ3RILElBQUksQ0FBQyxLQUFLO1lBQ04sSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPO2dCQUNyQixDQUFDLENBQUMsRUFBRTtnQkFDSixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRO29CQUM1QixDQUFDLENBQUMsRUFBRTtvQkFDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7O2dCQTFDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSwwM0JBbUJUO29CQUVELE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDOztpQkFDdkU7Ozt3QkFFSSxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQVdWLG9CQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FsQlksYUFBYTs7O0lBQ3RCLDhCQUF1Qjs7SUFDdkIsOEJBQXVCOztJQUN2Qiw4QkFBdUI7O0lBQ3ZCLDhCQUF1Qjs7SUFDdkIsaUNBQTZCOztJQUM3Qiw4QkFBb0I7O0lBQ3BCLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3B4Yi1oZXJvJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cImljb25cIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5sYXJnZV09XCJpY29uU2l6ZSA9PT0gJ2xhcmdlJ1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJpU2l6ZVwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImlTaXplXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuZm9udC1zaXplLnB4XT1cImlTaXplXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcHJpbWFyeV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoYW5uZWwtdmFsdWVcIiBbc3R5bGUuZm9udC1zaXplLnJlbV09XCJmb250U2l6ZSA9PSAnc21hbGwnID8gJzEnIDogJzEuMjUnXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCJ2YWx1ZSA9PT0gdW5kZWZpbmVkXCIgc2VsZWN0PVwicHhiLWNoYW5uZWwtdmFsdWVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPHB4Yi1jaGFubmVsLXZhbHVlICpuZ0lmPVwidmFsdWUgIT09IHVuZGVmaW5lZFwiIFt2YWx1ZV09XCJ2YWx1ZVwiIFt1bml0c109XCJ1bml0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2Vjb25kYXJ5XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8L3B4Yi1jaGFubmVsLXZhbHVlPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4vaGVyby5jb21wb25lbnQuc2NzcyddLFxuICAgIGlucHV0czogWydjb2xvcicsICdsYWJlbCcsICd2YWx1ZScsICd1bml0cycsICdmb250U2l6ZScsICdpY29uU2l6ZSddLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgICBASW5wdXQoKSB1bml0czogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGljb25TaXplID0gJ25vcm1hbCc7XG4gICAgQElucHV0KCkgaVNpemUgPSAzNjtcbiAgICBASW5wdXQoKSBmb250U2l6ZSA9ICdub3JtYWwnO1xuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIFdlIGNhbid0IHN1cHBvcnQgZHluYW1pYyBpY29uU2l6ZSB3LyBweC1ibHVlIGljb25zIHVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvaXNzdWVzLzUxODggaXMgZml4ZWRcbiAgICAgICAgdGhpcy5pU2l6ZSA9XG4gICAgICAgICAgICB0aGlzLmljb25TaXplID09PSAnbGFyZ2UnXG4gICAgICAgICAgICAgICAgPyA3MlxuICAgICAgICAgICAgICAgIDogdGhpcy5pY29uU2l6ZSA9PT0gJ25vcm1hbCdcbiAgICAgICAgICAgICAgICA/IDM2XG4gICAgICAgICAgICAgICAgOiAodGhpcy5pU2l6ZSA9IE1hdGgubWF4KDEwLCBNYXRoLm1pbig3MiwgcGFyc2VJbnQodGhpcy5pY29uU2l6ZSwgMTApKSkpO1xuICAgIH1cbn1cbiJdfQ==