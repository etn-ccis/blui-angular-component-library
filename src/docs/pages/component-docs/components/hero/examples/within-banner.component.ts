import { Component } from '@angular/core';

export const WITH_BANNER = `<blui-hero-banner>
    <blui-hero [label]="'Health'" [value]="96" [units]="'/100'" [unitSpace]="'hide'">
        <i blui-primary  class="blui-grade_a"></i>
    </blui-hero>
    <blui-hero [label]="'Load'" [value]="90" [units]="'%'">
        <i blui-primary  class="blui-current_circled"></i>
    </blui-hero>
    <blui-hero [label]="'Temp'" [value]="96" [units]="'°C'">
        <i blui-primary class="blui-temp"></i>
    </blui-hero>
</blui-hero-banner>
`;

@Component({
    selector: 'app-with-banner-hero-demo',
    template: WITH_BANNER,
})
export class WithinBannerComponent {}
