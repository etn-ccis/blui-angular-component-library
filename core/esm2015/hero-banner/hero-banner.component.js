/**
 * @fileoverview added by tsickle
 * Generated from: hero-banner/hero-banner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class HeroBannerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1iYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImhlcm8tYmFubmVyL2hlcm8tYmFubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYWpELE1BQU0sT0FBTyxtQkFBbUI7SUFYaEM7UUFZYSxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7OztZQWJBLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7O0tBS1Q7Z0JBRUQsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDOzthQUN0Qjs7O3NCQUVJLEtBQUs7Ozs7SUFBTixzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHhiLWhlcm8tYmFubmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFubmVyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJweGItaGVyb1wiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYXQtZGl2aWRlciBjbGFzcz1cImRpdmlkZXJcIiAqbmdJZj1cImRpdmlkZXJcIj48L21hdC1kaXZpZGVyPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4vaGVyby1iYW5uZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBpbnB1dHM6IFsnZGl2aWRlciddLFxufSlcbmV4cG9ydCBjbGFzcyBIZXJvQmFubmVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkaXZpZGVyID0gdHJ1ZTtcbn1cbiJdfQ==