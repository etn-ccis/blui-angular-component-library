import { Component } from '@angular/core';

export const VALUE_AND_UNITS = `<blui-hero label='Efficiency' value="88" units="%">
    <i blui-primary class="blui-grade_b"></i>
</blui-hero>
`;

@Component({
    selector: 'app-value-units-hero-demo',
    template: VALUE_AND_UNITS,
})
export class ValueUnitsComponent {}
