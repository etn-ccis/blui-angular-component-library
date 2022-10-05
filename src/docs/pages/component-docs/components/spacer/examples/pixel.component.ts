import { Component } from '@angular/core';

export const PIXELS = `<div style="display: flex; height: 56px">
    <blui-spacer [width]="25" [style.backgroundColor]="'#4da3d4'">25</blui-spacer>
    <blui-spacer [width]="75" [style.background]="'#f5db6d'">75</blui-spacer>
    <blui-spacer [width]="200" [style.background]="'#da7777'">200</blui-spacer>
</div>
<div style="display: flex; flex-direction: column; width: 300px; margin-top: 32px">
    <blui-spacer [height]="25" [style.backgroundColor]="'#4da3d4'">25</blui-spacer>
    <blui-spacer [height]="50" [style.background]="'#f5db6d'">50</blui-spacer>
    <blui-spacer [height]="75" [style.background]="'#da7777'">75</blui-spacer>
</div>
`;

@Component({
    selector: 'app-pixel-spacer-demo',
    template: PIXELS,
})
export class PixelComponent {}
