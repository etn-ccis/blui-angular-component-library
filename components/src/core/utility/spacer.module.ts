import {Component, HostBinding, Input, NgModule} from '@angular/core';

@Component({
    selector: 'pxb-spacer',
    template: `<ng-content></ng-content>`,
})
export class SpacerComponent {
    @Input() flex = 0;
    @HostBinding('style.height.px') @Input() height: number;
    @HostBinding('style.width.px') @Input() width: number;
    @HostBinding('style.flex') grow: string;
    @HostBinding('style.display') display = 'flex';

    ngOnChanges(): void {
        this.grow = `${this.flex} ${this.flex} ${this.flex === 0 ? 'auto' : '0px'}`;
    }
}

@NgModule({
    declarations: [SpacerComponent],
    exports: [SpacerComponent],
})
export class SpacerModule {}
