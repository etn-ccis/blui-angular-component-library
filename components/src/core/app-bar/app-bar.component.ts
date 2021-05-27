import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core';
import {fromEvent, interval} from "rxjs";
import {debounceTime, throttle} from "rxjs/operators";

@Component({
    selector: 'pxb-app-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app-bar.component.scss'],
    template: `
        <mat-toolbar id="expandMe" class="pxb-app-bar-content" style="background-color: darkcyan"
            [style.position.sticky]="minHeight === currentHeight">
            <mat-toolbar-row>{{currentHeight}}</mat-toolbar-row>
        </mat-toolbar>        
    `,
    host: {
        class: 'pxb-app-bar',
    },
})
export class AppBarComponent {

    @Input() maxHeight = 200;
    @Input() minHeight = 64;
    @Input() scrollAnimationEndDistance = 200;

    // The thing that scrolls, we listen to this.
    @Input() scrollContainer: Element;
    @Input() scrollContainerClassName: { name: string, index: number };
    @Input() contentContainerClassName: { name: string, index: number };
    scrollEl;

    // The Content below the scroll window, we pad this.
    @Input() scrollContainerId: string; //TODO REMOVE

    currentHeight: number;
    defaultPaddingTop: number;
    scrollDistance = 0;
    toolbar: HTMLElement;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.maxHeight;
    }

    ngAfterViewInit():  void {
        this.toolbar = document.getElementById('expandMe');
        if (this.scrollContainer) {
            this.scrollEl = this.scrollContainer;
        } else if (this.scrollContainerClassName) {
            this.scrollEl = document.getElementsByClassName
                (this.scrollContainerClassName.name)[this.scrollContainerClassName.index];
        } else {
            this.scrollEl = document.getElementById(this.scrollContainerId);
        }
        this.currentHeight = this.maxHeight;
        this.toolbar.style.height = `${this.currentHeight}px`;
        fromEvent(this.scrollEl, 'scroll')
            .subscribe(() => {
                console.log('scroll');
                this.reheightEl();
            });
    }

    reheightEl(): void {
        const scrollDistance = this.scrollEl.scrollTop;
        if (scrollDistance === 0) {
            this.currentHeight = this.maxHeight;
        }
        const scrollPercentage = scrollDistance / this.scrollAnimationEndDistance;
        if (scrollPercentage >= 1) {
            this.currentHeight = this.minHeight;
        } else {
            this.scrollDistance = Math.round(scrollDistance);
            this.currentHeight =
                Math.round(this.minHeight + (this.maxHeight - this.minHeight) * (1-scrollPercentage));
        }
        console.log(this.currentHeight);
        this.toolbar.style.height = `${this.currentHeight}px`;
        if (this.currentHeight >= this.minHeight) {
            this.toolbar.style.marginTop = `${scrollDistance}px`;
        }
        this._ref.detectChanges();
    }
}
