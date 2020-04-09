import {Component, HostBinding, Input, NgModule, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'pxb-spacer',
    template: `
        <ng-content></ng-content>
    `,
})
export class SpacerComponent implements OnChanges, OnInit {
    @Input() flex = 1;
    @HostBinding('style.height.px') @Input() height: number;
    @HostBinding('style.width.px') @Input() width: number;
    @HostBinding('style.flex') grow: string;
    @HostBinding('style.display') display = 'flex';

    ngOnInit(): void {
        this.calcGrow();
    }

    ngOnChanges(): void {
        this.calcGrow();
    }

    calcGrow(): void {
        this.grow = undefined;
        if (!this.height && !this.width) {
            this.grow = `${this.flex} ${this.flex} ${this.flex === 0 ? 'auto' : '0px'}`;
        }
    }
}

@NgModule({
    declarations: [SpacerComponent],
    exports: [SpacerComponent],
})
export class SpacerModule {}
