/**
 * @fileoverview added by tsickle
 * Generated from: empty-state/empty-state.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import * as Colors from '@pxblue/colors';
export class EmptyStateComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImVtcHR5LXN0YXRlL2VtcHR5LXN0YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sS0FBSyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFPekMsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQVFJLFdBQU0sR0FBUSxNQUFNLENBQUM7SUFDekIsQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLCtYQUEyQzs7YUFFOUM7OztvQkFFSSxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFETixvQ0FBdUI7O0lBQ3ZCLDBDQUE2Qjs7SUFDN0IscUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgQ29sb3JzIGZyb20gJ0BweGJsdWUvY29sb3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdweGItZW1wdHktc3RhdGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lbXB0eS1zdGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZW1wdHktc3RhdGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlTdGF0ZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIENvbG9yczogYW55ID0gQ29sb3JzO1xufVxuIl19