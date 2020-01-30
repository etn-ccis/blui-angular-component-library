import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Colors from '@pxblue/colors';
import { MatDividerModule } from '@angular/material';
import { MatDividerModule as MatDividerModule$1 } from '@angular/material/divider';

/**
 * @fileoverview added by tsickle
 * Generated from: channel-value/channel-value.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChannelValueComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: channel-value/channel-value.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChannelValueModule {
}
ChannelValueModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ChannelValueComponent],
                imports: [CommonModule],
                exports: [ChannelValueComponent],
            },] }
];

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
class EmptyStateComponent {
    constructor() {
        this.Colors = Colors;
    }
}
EmptyStateComponent.decorators = [
    { type: Component, args: [{
                selector: 'pxb-empty-state',
                template: "<div class=\"container\" [style.color]=\"Colors.gray[500]\">\n    <div style=\"line-height: 1\">\n        <ng-content select=\"[empty-icon]\"></ng-content>\n    </div>\n    <h2>{{ title }}</h2>\n    <h4 *ngIf=\"description\" [style.color]=\"Colors.blue[500]\">{{ description }}</h4>\n    <div>\n        <ng-content select=\"[actions]\"></ng-content>\n    </div>\n</div>\n",
                styles: [":host{height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}:host ::ng-deep [empty-icon]{display:block;font-size:100px;height:100%;width:100%;text-align:center}.container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}h2,h4{text-align:center}"]
            }] }
];
EmptyStateComponent.propDecorators = {
    title: [{ type: Input }],
    description: [{ type: Input }]
};
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
class EmptyStateModule {
}
EmptyStateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EmptyStateComponent],
                imports: [CommonModule],
                exports: [EmptyStateComponent],
            },] }
];

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
class HeroComponent {
    constructor() {
        this.iconSize = 'normal';
        this.iSize = 36;
        this.fontSize = 'normal';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // We can't support dynamic iconSize w/ px-blue icons until https://github.com/angular/components/issues/5188 is fixed
        this.iSize =
            this.iconSize === 'large'
                ? 72
                : this.iconSize === 'normal'
                    ? 36
                    : (this.iSize = Math.max(10, Math.min(72, parseInt(this.iconSize, 10))));
    }
}
HeroComponent.decorators = [
    { type: Component, args: [{
                selector: 'pxb-hero',
                template: `
        <div class="wrapper">
            <span
                class="icon"
                [class.large]="iconSize === 'large'"
                [style.height.px]="iSize"
                [style.width.px]="iSize"
                [style.font-size.px]="iSize"
            >
                <ng-content select="[primary]"></ng-content>
            </span>
            <span class="channel-value" [style.font-size.rem]="fontSize == 'small' ? '1' : '1.25'">
                <ng-content *ngIf="value === undefined" select="pxb-channel-value"></ng-content>
                <pxb-channel-value *ngIf="value !== undefined" [value]="value" [units]="units">
                    <ng-content select="[secondary]"></ng-content>
                </pxb-channel-value>
            </span>
            <h5 class="label">{{ label }}</h5>
        </div>
    `,
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
class HeroModule {
}
HeroModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HeroComponent],
                imports: [MatDividerModule, ChannelValueModule, CommonModule],
                exports: [HeroComponent],
            },] }
];

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
class HeroBannerComponent {
    constructor() {
        this.divider = true;
    }
}
HeroBannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pxb-hero-banner',
                template: `
        <div class="banner">
            <ng-content select="pxb-hero"></ng-content>
        </div>
        <mat-divider class="divider" *ngIf="divider"></mat-divider>
    `,
                inputs: ['divider'],
                styles: [".banner{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}:host ::ng-deep pxb-hero:nth-child(n+5){display:none}.divider{color:#b9bfc2}"]
            }] }
];
HeroBannerComponent.propDecorators = {
    divider: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HeroBannerComponent.prototype.divider;
}

/**
 * @fileoverview added by tsickle
 * Generated from: hero-banner/hero-banner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeroBannerModule {
}
HeroBannerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HeroBannerComponent],
                imports: [HeroModule, MatDividerModule$1, CommonModule],
                exports: [HeroBannerComponent, HeroModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: hero-banner/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChannelValueComponent, ChannelValueModule, EmptyStateComponent, EmptyStateModule, HeroBannerModule, HeroModule, HeroComponent as ɵa, HeroBannerComponent as ɵb };
//# sourceMappingURL=components.js.map
