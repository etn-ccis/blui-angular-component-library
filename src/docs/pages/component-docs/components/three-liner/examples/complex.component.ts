import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const COMPLEX = `<blui-three-liner>
    <div blui-title>title</div>
    <div blui-subtitle>subtitle</div>
    <blui-channel-value blui-info value="123" units="hz">
        <mat-icon>trending_up</mat-icon>
    </blui-channel-value>
</blui-three-liner>`;

@Component({
    selector: 'app-complex-three-liner',
    template: COMPLEX,
})
export class ComplexExample {
    colors = Colors;
}
