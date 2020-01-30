(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@pxblue/colors'), require('@angular/material'), require('@angular/material/divider')) :
    typeof define === 'function' && define.amd ? define('components', ['exports', '@angular/core', '@angular/common', '@pxblue/colors', '@angular/material', '@angular/material/divider'], factory) :
    (global = global || self, factory(global.components = {}, global.ng.core, global.ng.common, global.Colors, global.ng.material, global.ng.material.divider));
}(this, (function (exports, core, common, Colors, material, divider) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: channel-value/channel-value.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChannelValueComponent = /** @class */ (function () {
        function ChannelValueComponent() {
            this.fontSize = 'inherit';
            this.prefix = false;
            this.color = 'inherit';
        }
        ChannelValueComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'pxb-channel-value',
                        template: "\n        <span class=\"value-wrapper\" [style.color]=\"color\" [style.fontSize.px]=\"fontSize\">\n            <span class=\"icon\">\n                <ng-content></ng-content>\n            </span>\n            <h5 *ngIf=\"units && prefix\" class=\"text units\">{{ units }}</h5>\n            <h5 *ngIf=\"value\" class=\"text value\">{{ value }}</h5>\n            <h5 *ngIf=\"units && !prefix\" class=\"text units\">{{ units }}</h5>\n        </span>\n    ",
                        styles: [":host{display:-webkit-inline-box;display:inline-flex}.value-wrapper{display:-webkit-box;display:flex}.text{font-size:inherit;line-height:1.2;letter-spacing:0;margin:0}.units{font-weight:300}.value{font-weight:600}.icon{font-size:inherit;display:block;margin-right:5px}.icon:empty{display:none}.icon ::ng-deep mat-icon{display:block;width:100%;height:100%;font-size:100%;line-height:1.2}"]
                    }] }
        ];
        ChannelValueComponent.propDecorators = {
            value: [{ type: core.Input }],
            units: [{ type: core.Input }],
            fontSize: [{ type: core.Input }],
            prefix: [{ type: core.Input }],
            color: [{ type: core.Input }]
        };
        return ChannelValueComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: channel-value/channel-value.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChannelValueModule = /** @class */ (function () {
        function ChannelValueModule() {
        }
        ChannelValueModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ChannelValueComponent],
                        imports: [common.CommonModule],
                        exports: [ChannelValueComponent],
                    },] }
        ];
        return ChannelValueModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: channel-value/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: empty-state/empty-state.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmptyStateComponent = /** @class */ (function () {
        function EmptyStateComponent() {
            this.Colors = Colors;
        }
        EmptyStateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'pxb-empty-state',
                        template: "<div class=\"container\" [style.color]=\"Colors.gray[500]\">\n    <div style=\"line-height: 1\">\n        <ng-content select=\"[empty-icon]\"></ng-content>\n    </div>\n    <h2>{{ title }}</h2>\n    <h4 *ngIf=\"description\" [style.color]=\"Colors.blue[500]\">{{ description }}</h4>\n    <div>\n        <ng-content select=\"[actions]\"></ng-content>\n    </div>\n</div>\n",
                        styles: [":host{height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}:host ::ng-deep [empty-icon]{display:block;font-size:100px;height:100%;width:100%;text-align:center}.container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}h2,h4{text-align:center}"]
                    }] }
        ];
        EmptyStateComponent.propDecorators = {
            title: [{ type: core.Input }],
            description: [{ type: core.Input }]
        };
        return EmptyStateComponent;
    }());
    if (false) {
        /** @type {?} */
        EmptyStateComponent.prototype.title;
        /** @type {?} */
        EmptyStateComponent.prototype.description;
        /** @type {?} */
        EmptyStateComponent.prototype.Colors;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: empty-state/empty-state.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EmptyStateModule = /** @class */ (function () {
        function EmptyStateModule() {
        }
        EmptyStateModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [EmptyStateComponent],
                        imports: [common.CommonModule],
                        exports: [EmptyStateComponent],
                    },] }
        ];
        return EmptyStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: empty-state/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: hero/hero.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'pxb-hero',
                        template: "\n        <div class=\"wrapper\">\n            <span\n                class=\"icon\"\n                [class.large]=\"iconSize === 'large'\"\n                [style.height.px]=\"iSize\"\n                [style.width.px]=\"iSize\"\n                [style.font-size.px]=\"iSize\"\n            >\n                <ng-content select=\"[primary]\"></ng-content>\n            </span>\n            <span class=\"channel-value\" [style.font-size.rem]=\"fontSize == 'small' ? '1' : '1.25'\">\n                <ng-content *ngIf=\"value === undefined\" select=\"pxb-channel-value\"></ng-content>\n                <pxb-channel-value *ngIf=\"value !== undefined\" [value]=\"value\" [units]=\"units\">\n                    <ng-content select=\"[secondary]\"></ng-content>\n                </pxb-channel-value>\n            </span>\n            <h5 class=\"label\">{{ label }}</h5>\n        </div>\n    ",
                        inputs: ['color', 'label', 'value', 'units', 'fontSize', 'iconSize'],
                        styles: [":host{-webkit-box-flex:1;flex:1 1 0px}.wrapper{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start;overflow:hidden;color:#727e84;padding:16px 8px}.icon{margin-bottom:8px;text-align:center;color:#556167}:host ::ng-deep .icon mat-icon{display:block;width:100%;height:100%;font-size:100%;line-height:1.2;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ::ng-deep .icon mat-icon svg{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-transform-origin:top left;transform-origin:top left}:host ::ng-deep .icon.large mat-icon svg{-webkit-transform:scale(3);transform:scale(3)}.channel-value{display:-webkit-box;display:flex;color:#556167}.label{font-size:inherit;line-height:1.2;letter-spacing:0;font-weight:600;width:100%;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0}"]
                    }] }
        ];
        HeroComponent.propDecorators = {
            color: [{ type: core.Input }],
            label: [{ type: core.Input }],
            value: [{ type: core.Input }],
            units: [{ type: core.Input }],
            iconSize: [{ type: core.Input }],
            iSize: [{ type: core.Input }],
            fontSize: [{ type: core.Input }]
        };
        return HeroComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: hero/hero.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeroModule = /** @class */ (function () {
        function HeroModule() {
        }
        HeroModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [HeroComponent],
                        imports: [material.MatDividerModule, ChannelValueModule, common.CommonModule],
                        exports: [HeroComponent],
                    },] }
        ];
        return HeroModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: hero/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: hero-banner/hero-banner.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeroBannerComponent = /** @class */ (function () {
        function HeroBannerComponent() {
            this.divider = true;
        }
        HeroBannerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'pxb-hero-banner',
                        template: "\n        <div class=\"banner\">\n            <ng-content select=\"pxb-hero\"></ng-content>\n        </div>\n        <mat-divider class=\"divider\" *ngIf=\"divider\"></mat-divider>\n    ",
                        inputs: ['divider'],
                        styles: [".banner{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}:host ::ng-deep pxb-hero:nth-child(n+5){display:none}.divider{color:#b9bfc2}"]
                    }] }
        ];
        HeroBannerComponent.propDecorators = {
            divider: [{ type: core.Input }]
        };
        return HeroBannerComponent;
    }());
    if (false) {
        /** @type {?} */
        HeroBannerComponent.prototype.divider;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: hero-banner/hero-banner.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeroBannerModule = /** @class */ (function () {
        function HeroBannerModule() {
        }
        HeroBannerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [HeroBannerComponent],
                        imports: [HeroModule, divider.MatDividerModule, common.CommonModule],
                        exports: [HeroBannerComponent, HeroModule],
                    },] }
        ];
        return HeroBannerModule;
    }());

    exports.ChannelValueComponent = ChannelValueComponent;
    exports.ChannelValueModule = ChannelValueModule;
    exports.EmptyStateComponent = EmptyStateComponent;
    exports.EmptyStateModule = EmptyStateModule;
    exports.HeroBannerModule = HeroBannerModule;
    exports.HeroModule = HeroModule;
    exports.ɵa = HeroComponent;
    exports.ɵb = HeroBannerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components.umd.js.map
