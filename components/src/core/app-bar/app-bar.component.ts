import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
    selector: 'pxb-app-bar-dynamic-content',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-app-bar-dynamic-content">
            <div [style.fontSize.px]="titlePx">{{ title }}</div>
            <div [style.fontSize.px]="subtitlePx" [style.opacity]="1 - transformPercent">
                {{ subtitle }}
            </div>
            <div [style.fontSize.px]="infoPx" [style.marginTop.px]="infoMargin">
                {{ info }}
            </div>
        </div>
    `,
    styles: [
        `
            .pxb-app-bar-dynamic-content * {
                transition: all 350ms;
            }
        `,
    ],
})
export class AppBarDynamicContent implements OnInit {
    @Input() title;
    @Input() subtitle;
    @Input() info;

    @Input() titleExpandHeight = 30;
    @Input() subtitleExpandHeight = 16;
    @Input() infoExpandHeight = 14;

    @Input() titleCollapseHeight = 20;
    @Input() subtitleCollapseHeight = 0;
    @Input() infoCollapseHeight = 16;

    titlePx: number;
    subtitlePx: number;
    infoPx: number;
    infoMargin: number;
    transformPercent: number;

    ngOnInit(): void {
        this.transform(false);
    }

    transform(isCollapsed: boolean): void {
        this.titlePx = isCollapsed ? this.titleCollapseHeight : this.titleExpandHeight;
        this.subtitlePx = isCollapsed ? this.subtitleCollapseHeight : this.subtitleExpandHeight;
        this.infoPx = isCollapsed ? this.infoCollapseHeight : this.infoExpandHeight;
        this.infoMargin = isCollapsed ? -8 : 0;
    }
}

@Component({
    selector: 'pxb-app-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app-bar.component.scss'],
    template: `
        <mat-toolbar
            color="primary"
            class="pxb-app-bar-content"
            [class.collapsed]="isCollapsed"
            [style.marginBottom.px]="marginBottom"
            [style.height.px]="currentHeight"
        >
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
    @Input() scrollThreshold = 100;

    // The thing that scrolls, we listen to this.
    @Input() scrollContainerElement: Element;
    @Input() scrollContainerClassName: { name: string; index: number };
    @Input() scrollContainerId: string;
    scrollEl;

    isWindow = false;
    isCollapsed = true;
    useDefaultCollapsedHeight = true;
    currentHeight: number;
    marginBottom = 0;

    scrollListener: Subscription;
    resizeListener: Subscription;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.expandedHeight;
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
        if (this.mode !== 'dynamic') {
            return this._handleLockedModes();
        }
        const scrollDistance = this.isWindow ? document.scrollingElement.scrollTop : this.scrollEl.scrollTop;
        if (scrollDistance > this.scrollThreshold && !this.isCollapsed) {
            this._setNewCollapsedHeight();
            this.isCollapsed = true;
            this.marginBottom = this.expandedHeight - this.collapsedHeight;
            this.currentHeight = this.collapsedHeight;
            this._transformDynamicContent();
            this._ref.detectChanges();
        } else if (scrollDistance <= this.collapsedHeight && this.isCollapsed) {
            this._setNewCollapsedHeight();
            this.isCollapsed = false;
            this.currentHeight = this.expandedHeight;
            this.marginBottom = 0;
            this._transformDynamicContent();
            this._ref.detectChanges();
        }
    }

    private _transformDynamicContent(): void {
        if (this.threeLiner) {
            this.threeLiner.transform(this.isCollapsed);
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
