import { Component } from '@angular/core';

export const FLEX = `<div style="display: flex; height: 56px; width: 300px">
    <blui-spacer [flex]="1" [style.backgroundColor]="'#4da3d4'">1</blui-spacer>
    <blui-spacer [flex]="2" [style.background]="'#f5db6d'">2</blui-spacer>
    <blui-spacer [flex]="3" [style.background]="'#da7777'">3</blui-spacer>
</div>
`;

@Component({
    selector: 'app-flex-spacer-demo',
    template: FLEX,
})
export class FlexComponent {}
