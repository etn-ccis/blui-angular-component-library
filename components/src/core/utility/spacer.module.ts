import { Component, Input, NgModule } from '@angular/core';

@Component({
    selector: 'pxb-spacer',
    template: `
        <div class="pxb-root" style="display: flex" [style.width.px]="width" [style.height.px]="height"></div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex: 1 1 0px;
            }
        `,
    ],
})
export class SpacerComponent {
    @Input() flex: number;
    @Input() height: number;
    @Input() width: number;
}

@NgModule({
    declarations: [SpacerComponent],
    exports: [SpacerComponent],
})
export class SpacerModule {}
