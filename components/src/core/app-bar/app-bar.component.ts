import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';
import { throttle } from 'rxjs/operators';
import { isEmptyView } from '../../utils/utils';

@Component({
    selector: 'pxb-app-bar-dynamic-content',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-app-bar-dynamic-content">
            <div class="pxb-app-bar-dynamic-content-title">
                <div #titleVc>
                    <ng-content select="[pxb-title]"></ng-content>
                </div>
                <ng-container *ngIf="isEmpty(titleEl)">
                    {{ title }}
                </ng-container>
            </div>

            <div class="pxb-app-bar-dynamic-content-subtitle">
                <div #subtitleVc>
                    <ng-content select="[pxb-subtitle]"></ng-content>
                </div>
                <ng-container *ngIf="isEmpty(subtitleEl)">
                    {{ subtitle }}
                </ng-container>
            </div>

            <div class="pxb-app-bar-dynamic-content-info">
                <div #infoVc>
                    <ng-content select="[pxb-info]"></ng-content>
                </div>
                <ng-container *ngIf="isEmpty(infoEl)">
                    {{ info }}
                </ng-container>
            </div>
        </div>
    `,
})
export class AppBarDynamicContent implements AfterViewInit {
    @Input() title;
    @Input() subtitle;
    @Input() info;

    @ViewChild('titleVc') titleEl: ElementRef;
    @ViewChild('subtitleVc') subtitleEl: ElementRef;
    @ViewChild('infoVc') infoEl: ElementRef;
    isEmpty = (el: ElementRef): boolean => isEmptyView(el);

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this._ref.detectChanges();
    }
}

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
            [style.height.px]="currentHeight"
        >
            <div class="pxb-app-bar-background"></div>
            <ng-content select="[pxb-icon]"></ng-content>
            <ng-content select="pxb-app-bar-dynamic-content"></ng-content>
            <ng-content></ng-content>
            <pxb-spacer></pxb-spacer>
            <ng-content select="[pxb-actions]"></ng-content>
        </mat-toolbar>
    `,
    host: {
        class: 'pxb-app-bar',
    },
})
export class AppBarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    @ContentChild(AppBarDynamicContent) threeLiner: AppBarDynamicContent;

    @Input() expandedHeight = 200;
    @Input() collapsedHeight = this._calcDefaultCollapsedHeight();
    @Input() mode: 'collapsed' | 'expanded' | 'dynamic' = 'collapsed';
    @Input() scrollThreshold;
    @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';

    // The thing that scrolls, we listen to this.
    @Input() scrollContainerElement: Element;
    @Input() scrollContainerClassName: { name: string; index: number };
    @Input() scrollContainerId: string;
    scrollEl;

    isWindow = false;
    isCollapsed = true;
    useDefaultCollapsedHeight = true;
    currentHeight: number;
    isAnimating: boolean;

    scrollListener: Subscription;
    resizeListener: Subscription;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.expandedHeight;
        if (!this.scrollThreshold) {
            this.scrollThreshold = (this.expandedHeight - this.collapsedHeight) / 2;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.collapsedHeight || changes.expandedHeighted) {
            this.expandedHeight = Number(this.expandedHeight);
            this.collapsedHeight = Number(this.collapsedHeight);
        }
        this.useDefaultCollapsedHeight = isNaN(this.collapsedHeight) || this.collapsedHeight === 0;
        if (changes.mode) {
            this._resizeOnModeChange();
        }
    }

    ngAfterViewInit(): void {
        this._setScrollEl();
        this._resizeOnModeChange();
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
            this.scrollListener.unsubscribe();
        }
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
            this._ref.detectChanges();
            return;
        }
        if (this.mode === 'expanded') {
            this.currentHeight = this.expandedHeight;
            this._ref.detectChanges();
            return;
        }
    }

    private _resizeEl(): void {
        if (this.isAnimating) {
            return;
        }
        if (this.mode !== 'dynamic') {
            return this._handleLockedModes();
        }

        const scrollDistance = this.isWindow ? document.scrollingElement.scrollTop : this.scrollEl.scrollTop;
        if (this.isCollapsed && scrollDistance === 0) {
            this._setNewCollapsedHeight();
            this.isCollapsed = false;
            this.currentHeight = this.expandedHeight;
            this._ref.detectChanges();
        } else if (scrollDistance > this.scrollThreshold && !this.isCollapsed) {
            this._setNewCollapsedHeight();
            this.isCollapsed = true;
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
