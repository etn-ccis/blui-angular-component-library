/**
 * @fileoverview added by tsickle
 * Generated from: empty-state/empty-state.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as Colors from '@pxblue/colors';
var EmptyStateComponent = /** @class */ (function () {
    function EmptyStateComponent() {
        this.Colors = Colors;
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
    return EmptyStateComponent;
}());
export { EmptyStateComponent };
if (false) {
    /** @type {?} */
    EmptyStateComponent.prototype.title;
    /** @type {?} */
    EmptyStateComponent.prototype.description;
    /** @type {?} */
    EmptyStateComponent.prototype.Colors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImVtcHR5LXN0YXRlL2VtcHR5LXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sS0FBSyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFFekM7SUFBQTtRQVFJLFdBQU0sR0FBUSxNQUFNLENBQUM7SUFDekIsQ0FBQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLCtYQUEyQzs7aUJBRTlDOzs7d0JBRUksS0FBSzs4QkFDTCxLQUFLOztJQUVWLDBCQUFDO0NBQUEsQUFURCxJQVNDO1NBSlksbUJBQW1COzs7SUFDNUIsb0NBQXVCOztJQUN2QiwwQ0FBNkI7O0lBQzdCLHFDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIENvbG9ycyBmcm9tICdAcHhibHVlL2NvbG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHhiLWVtcHR5LXN0YXRlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW1wdHktc3RhdGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VtcHR5LXN0YXRlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5U3RhdGVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBDb2xvcnM6IGFueSA9IENvbG9ycztcbn1cbiJdfQ==