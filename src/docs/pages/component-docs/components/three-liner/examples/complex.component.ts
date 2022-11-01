import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';

export const COMPLEX = `<blui-three-liner title="title" subtitle="subtitle">
    <blui-toolbar-menu blui-info label="info">
        <ng-container blui-toolbar-menu-items>
            <button mat-menu-item>Menu Item 1</button>
            <button mat-menu-item>Menu Item 2</button>
            <button mat-menu-item>Menu Item 3</button>
        </ng-container>
    </blui-toolbar-menu>
</blui-three-liner>`;

@Component({
    selector: 'app-complex-three-liner',
    template: COMPLEX,
})
export class ComplexExample {
    colors = Colors;
}
