import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {fromEvent, interval} from 'rxjs';
import {throttle} from 'rxjs/operators';

@Component({
    selector: 'pxb-app-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app-bar.component.scss'],
    template: `
        <mat-toolbar
            #pxbAppBar
            color="primary"
            class="pxb-app-bar-content"
            [style.height.px]="currentHeight"
            [style.marginTop.px]="scrollDistance"
            [class.pxb-app-bar-sticky]="collapsedHeight === currentHeight || mode === 'expanded'"
        >
            <mat-toolbar-row>{{ currentHeight }}</mat-toolbar-row>
        </mat-toolbar>
    `,
    host: {
        class: 'pxb-app-bar',
    },
})
export class AppBarComponent implements OnInit, AfterViewInit, OnChanges {
    @ViewChild('pxbAppBar', { read: ElementRef, static: false }) bar: ElementRef;

    @Input() expandedHeight = 200;
    @Input() collapsedHeight = this._calcDefaultCollapsedHeight();
    @Input() mode: 'collapsed' | 'expanded' | 'dynamic' = 'collapsed';

    // The thing that scrolls, we listen to this.
    @Input() scrollContainerElement: Element;
    @Input() scrollContainerClassName: { name: string; index: number };
    @Input() scrollContainerId: string;
    scrollEl;

    isWindow = false;

    //   @Output() onReachedExpandedHeight: EventEmitter<void> = new EventEmitter();
    //    @Output() onReachedCollapsedHeight: EventEmitter<void> = new EventEmitter();

    currentHeight: number;
    scrollDistance: number;
    useDefaultCollapsedHeight = false;
    toolbar: HTMLElement;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.expandedHeight;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.useDefaultCollapsedHeight = !this.collapsedHeight;
        if (changes.collapsedHeight || changes.expandedHeighted) {
            this.expandedHeight = Number(this.expandedHeight);
            this.collapsedHeight = Number(this.collapsedHeight);
        }
        if (changes.mode) {
            this._resizeOnModeChange();
        }
    }

    ngAfterViewInit(): void {
        this._setScrollEl();
        this.toolbar = this.bar.nativeElement;
        this._resizeOnModeChange();
        fromEvent(this.scrollEl, 'scroll')
            .pipe(throttle(() => interval(10)))
            .subscribe((event: Event) => {
                this._resizeEl(event);
            });

        fromEvent(window, 'resize').subscribe((event: Event) => {
            this._resizeEl(event);
        });
    }

    private _resizeOnModeChange(): void {
        if (this.mode !== 'dynamic') {
            return this._handleLockedModes();
        } else if (this.scrollEl) {
            this._resizeEl();
        }
    }

    private _handleLockedModes(): void {
        if (this.mode === 'collapsed') {
            this.currentHeight = this.useDefaultCollapsedHeight
                ? this._calcDefaultCollapsedHeight()
                : this.collapsedHeight;
            this.toolbar.style.marginTop = `0px`;
            this._ref.detectChanges();
            return;
        }
        if (this.mode === 'expanded') {
            this.currentHeight = this.expandedHeight;
            this.toolbar.style.marginTop = `0px`;
            this._ref.detectChanges();
            return;
        }
    }

    private _resizeEl(event?: Event): void {
        if (this.mode !== 'dynamic') {
            return this._handleLockedModes();
        }

        const collapsedHeight = this.useDefaultCollapsedHeight
            ? this._calcDefaultCollapsedHeight()
            : this.collapsedHeight;
        this.collapsedHeight = collapsedHeight;

        const el = this.scrollEl;
        this.scrollDistance = this.isWindow ? document.scrollingElement.scrollTop : el.scrollTop;
        if (this.scrollDistance === 0) {
            this.currentHeight = this.expandedHeight;
            //   this.onReachedExpandedHeight.emit();
        }
        const scrollPercentage = this.scrollDistance / this.expandedHeight;
        if (scrollPercentage >= 1 && this.currentHeight === collapsedHeight) {
            // Do nothing
            return;
        }
        if (scrollPercentage >= 1) {
            this.currentHeight = collapsedHeight;
            //   this.onReachedCollapsedHeight.emit();
        } else {
            this.currentHeight = Math.round(
                collapsedHeight + (this.expandedHeight - collapsedHeight) * (1 - scrollPercentage)
            );
        }
        if (event) {
            event.preventDefault();
        }
        this._ref.detectChanges();
    }

    private _setScrollEl(): void {
        if (this.scrollContainerElement) {
            this.scrollEl = this.scrollContainerElement;
        } else if (this.scrollContainerId) {
            this.scrollEl = document.getElementById(this.scrollContainerId);
        } else if (this.scrollContainerClassName) {
            this.scrollEl = document.getElementsByClassName(this.scrollContainerClassName.name)[
                this.scrollContainerClassName.index
            ];
        } else {
            this.scrollEl = window;
            this.isWindow = true;
        }
    }

    private _calcDefaultCollapsedHeight(): number {
        return document.documentElement.clientWidth <= 600 ? 56 : 64;
    }
}
