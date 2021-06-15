import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild, EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit, Output,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';
import { throttle } from 'rxjs/operators';
import { Element } from '@angular/compiler';
import {ThreeLinerComponent} from "../three-liner/three-liner.component";

@Component({
    selector: 'pxb-app-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app-bar.component.scss'],
    template: `
        <mat-toolbar
            [color]="color"
            class="pxb-app-bar-content"
            [class.pxb-app-bar-collapsed]="isCollapsed"
            [class.pxb-app-bar-expanded]="!isCollapsed"
            [class.pxb-app-bar-view-init]="viewInit"
            [style.height.px]="currentHeight"
        >
            <mat-toolbar-row>
                <div class="pxb-app-bar-background"></div>
                <ng-content select="[pxb-icon]"></ng-content>
                <div class="pxb-app-bar-body-wrapper">
                    <ng-content></ng-content>
                </div>
                <pxb-spacer></pxb-spacer>
                <ng-content select="[pxb-actions]"></ng-content>
            </mat-toolbar-row>
        </mat-toolbar>
    `,
    host: {
        class: 'pxb-app-bar',
    },
})
export class AppBarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    @ContentChild(ThreeLinerComponent) threeLiner: ThreeLinerComponent;

    @Input() expandedHeight = 200;
    @Input() collapsedHeight = this._calcDefaultCollapsedHeight();
    @Input() variant: 'collapsed' | 'expanded' | 'snap' = 'collapsed';
    @Input() scrollThreshold;
    @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
    @Input() isCollapsed = false;

    // The thing that scrolls, we listen to this.
    @Input() scrollContainerElement: Element;
    @Input() scrollContainerClassName: { name: string; index: number };
    @Input() scrollContainerId: string;

    @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter();

    scrollEl;

    isWindow = false;
    useDefaultCollapsedHeight = true;
    currentHeight: number;
    isAnimating: boolean;
    viewInit = false;

    scrollListener: Subscription;
    resizeListener: Subscription;

    contentSize = 0;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.expandedHeight;
        if (!this.scrollThreshold) {
            this.scrollThreshold = this.expandedHeight - this.collapsedHeight;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.variant) {
            this._resizeOnModeChange();
        }
        this.useDefaultCollapsedHeight = isNaN(this.collapsedHeight) || this.collapsedHeight === 0;
        this.expandedHeight = Number(this.expandedHeight);
        this.collapsedHeight = Number(this.collapsedHeight);
        this.currentHeight = this.isCollapsed ? this.collapsedHeight : this.expandedHeight;
        this._ref.detectChanges();
    }

    ngAfterViewInit(): void {
        this._setScrollEl();
        this._resizeOnModeChange();
        this.viewInit = true;
        this.scrollListener = fromEvent(this.scrollEl, 'scroll')
            .pipe(throttle(() => interval(10)))
            .subscribe(() => {
                this._resizeEl();
            });

        this.resizeListener = fromEvent(window, 'resize')
            .pipe(throttle(() => interval(10)))
            .subscribe(() => {
                this._resizeEl();
            });
    }

    ngOnDestroy(): void {
        if (this.scrollListener) {
            this.scrollListener.unsubscribe();
        }
        if (this.resizeListener) {
            this.resizeListener.unsubscribe();
        }
    }

    private _resizeOnModeChange(): void {
        if (this.variant !== 'snap') {
            return this._handleLockedModes();
        } else if (this.scrollEl) {
            this._resizeEl();
        }
    }

    private _handleLockedModes(): void {
        if (this.variant === 'collapsed') {
            this._setCollapsed(true);
            this.currentHeight = this.useDefaultCollapsedHeight
                ? this._calcDefaultCollapsedHeight()
                : this.collapsedHeight;
            this._ref.detectChanges();
            return;
        }
        if (this.variant === 'expanded') {
            this._setCollapsed(false);
            this.currentHeight = this.expandedHeight;
            this._ref.detectChanges();
            return;
        }
    }

    private _setCollapsed(collapsed: boolean): void {
        this.isCollapsed = collapsed;
        this.isCollapsedChange.emit(collapsed);
    }

    private _resizeEl(): void {
        if (this.isAnimating) {
            return;
        }
        if (this.variant !== 'snap') {
            return this._handleLockedModes();
        }

        const scrollDistance = this.isWindow ? document.scrollingElement.scrollTop : this.scrollEl.scrollTop;
        if (this.isCollapsed && scrollDistance === 0) {
            this._setNewCollapsedHeight();
            this._setCollapsed(false);
            this.currentHeight = this.expandedHeight;
            this._ref.detectChanges();
        } else if (scrollDistance > this.scrollThreshold && !this.isCollapsed) {
            this._setNewCollapsedHeight();
            this._setCollapsed(true);
            this.currentHeight = this.collapsedHeight;
            this.isAnimating = true;
            this._ref.detectChanges();
            setTimeout(() => {
                const currScrollDistance = this.isWindow
                    ? document.scrollingElement.scrollTop
                    : this.scrollEl.scrollTop;
                if (currScrollDistance === 0) {
                    if (this.isWindow) {
                        window.scrollBy(0, 1);
                    } else {
                        this.scrollEl.scrollTop = 1;
                    }
                }
                this.isAnimating = false;
            }, 300);
        }
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

    private _setNewCollapsedHeight(): void {
        this.collapsedHeight = this.useDefaultCollapsedHeight
            ? this._calcDefaultCollapsedHeight()
            : this.collapsedHeight;
    }

    private _calcDefaultCollapsedHeight(): number {
        return document.documentElement.clientWidth <= 600 ? 56 : 64;
    }
}
