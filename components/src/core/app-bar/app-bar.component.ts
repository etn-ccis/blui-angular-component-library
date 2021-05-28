import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, ElementRef, EventEmitter,
    Input, Output,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
    selector: 'pxb-app-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app-bar.component.scss'],
    template: `
        <mat-toolbar #pxbAppBar style="background-color: mediumpurple"
                     class="pxb-app-bar-content" 
                     [class.pxb-app-bar-sticky]="collapsedHeight === currentHeight">
            <mat-toolbar-row>{{currentHeight}}</mat-toolbar-row>
        </mat-toolbar>        
    `,
    host: {
        class: 'pxb-app-bar',
    },
})
export class AppBarComponent {

    @ViewChild('pxbAppBar',  { read: ElementRef, static: false }) bar: ElementRef;

    @Input() expandHeight = 200;
    @Input() collapsedHeight = 64; // TODO PROVIDE DEFAULTS
    @Input() disable = false;
    @Input() collapsible = true;

    // The thing that scrolls, we listen to this.
    @Input() scrollContainerElement: Element;
    @Input() scrollContainerClassName: { name: string, index: number };
    @Input() scrollContainerId: string;
    scrollEl;

    @Output() onReachedExpandedHeight: EventEmitter<void> = new EventEmitter();
    @Output() onReachedCollapsedHeight: EventEmitter<void> = new EventEmitter();

    scrollAnimationEndDistance;
    currentHeight: number;
    defaultPaddingTop: number;
    scrollDistance = 0;
    toolbar: HTMLElement;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.expandHeight;
    }

    ngOnChanges(): void {
        if (!this.collapsible) {
            this.currentHeight = this.collapsedHeight;
            this.disable = true;
        }
    }

    ngAfterViewInit():  void {
        this.toolbar = this.bar.nativeElement;
        this.currentHeight = this.expandHeight;
        this.toolbar.style.height = `${this.currentHeight}px`;
        this._setScrollEl();
        fromEvent(this.scrollEl, 'scroll')
            .subscribe((event: Event) => {
                console.log(event);
                this._resizeEl(event);
            });

        fromEvent(window, 'resize')
            .subscribe((event: Event) => {
                this._resizeEl(event);
            });
    }

    private _resizeEl(event: Event): void {
        if (this.disable) {
            return;
        }
        const el = this.scrollEl;
        const scrollDistance = el.scrollTop;
        if (scrollDistance === 0) {
            this.currentHeight = this.expandHeight;
            this.onReachedExpandedHeight.emit();
        }
        const scrollPercentage = scrollDistance / this.expandHeight;
        if (scrollPercentage >= 1 && this.currentHeight === this.collapsedHeight) { // Maybe this can be removed?
            return; // Do nothing
        }
        if (scrollPercentage >= 1) {
            this.currentHeight = this.collapsedHeight;
            this.toolbar.style.height = `${this.currentHeight}px`;
            this.onReachedCollapsedHeight.emit();
        } else {
            this.scrollDistance = Math.round(scrollDistance);
            this.currentHeight =
                Math.round(this.collapsedHeight + (this.expandHeight - this.collapsedHeight) * (1-scrollPercentage));
            this.toolbar.style.height = `${this.currentHeight}px`;
            if (this.currentHeight >= this.collapsedHeight) {
                this.toolbar.style.marginTop = `${scrollDistance}px`;
            }
        }
        event.preventDefault();
        this._ref.detectChanges();
    }

    private _setScrollEl(): void {
        if (this.scrollContainerElement) {
            this.scrollEl = this.scrollContainerElement;
        } else if (this.scrollContainerId)  {
            this.scrollEl = document.getElementById(this.scrollContainerId);
        } else if (this.scrollContainerClassName) {
            this.scrollEl =  document.getElementsByClassName
            (this.scrollContainerClassName.name)[this.scrollContainerClassName.index];
        } else {
            this.scrollEl = document.body;
        }
    }
}
