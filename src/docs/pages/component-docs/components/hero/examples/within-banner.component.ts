import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const WITH_BANNER = `<blui-hero-banner style="border-radius: 4px" class="divider-border">
    <blui-hero [label]="'Health'" [value]="96" [units]="'/100'" [unitSpace]="'hide'">
        <i blui-primary [style.color]="colors.green[500]" class="blui-grade_a"></i>
    </blui-hero>
    <blui-hero [label]="'Load'" [value]="90" [units]="'%'">
        <i blui-primary [style.color]="colors.yellow[500]" class="blui-current_circled"></i>
    </blui-hero>
    <blui-hero [label]="'Temp'" [value]="96" [units]="'°C'">
        <i blui-primary [style.color]="colors.green[500]" class="blui-temp"></i>
    </blui-hero>
</blui-hero-banner>
`;

@Component({
    selector: 'app-with-banner-hero-demo',
    template: WITH_BANNER,
})
export class WithinBannerComponent {
    colors = Colors;
}
