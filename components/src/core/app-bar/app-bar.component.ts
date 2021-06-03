import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, ContentChild,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges, TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
    selector: 'pxb-app-bar-content',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['app-bar-three-liner.component.scss'],
    template: `
        <div #titleVc [style.fontSize.px]="titlePx">{{title}}</div>
        <div #subtitleVc [style.fontSize.px]="subtitlePx" [style.opacity]="1 - transformPercent">{{subtitle}}</div>
        <div #infoVc [style.fontSize.px]="infoPx" [style.marginTop.px]="getInfoMarginTop()">{{info}}</div>
  `,
})
export class AppBarThreeLiner {
    @Input() title;
    @Input() subtitle;
    @Input() info;

    @Input() titleExpandHeight = 30;
    @Input() subtitleExpandHeight = 16;
    @Input() infoExpandHeight = 14;

    @Input() titleCollapseHeight = 20;
    @Input() subtitleCollapseHeight = 0;
    @Input() infoCollapseHeight = 16;

    titlePx: string;
    subtitlePx: string;
    infoPx: string;

    transformPercent: number;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    transform(percent: number): void {
        this.transformPercent = percent;
        this.titlePx =  `${this.titleExpandHeight -
        (this.titleExpandHeight - this.titleCollapseHeight) * percent}`;
        this.subtitlePx =  `${this.subtitleExpandHeight -
        (this.subtitleExpandHeight - this.subtitleCollapseHeight) * percent}`;
        this.infoPx =  `${this.infoExpandHeight -
        (this.infoExpandHeight - this.infoCollapseHeight) * percent}`;
    }

    getInfoMarginTop(): number {
        return - (this.transformPercent * 8);
    }
}

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
      [style.marginTop.px]="getMarginTop()"
      [class.pxb-app-bar-sticky]="collapsedHeight === currentHeight || mode !== 'dynamic'"
    >
      <ng-content select='pxb-app-bar-content'></ng-content>
    </mat-toolbar>
  `,
    host: {
        class: 'pxb-app-bar',
    },
})
export class AppBarComponent implements OnInit, AfterViewInit, OnChanges {
    @ViewChild('pxbAppBar', { read: ElementRef, static: false }) bar: ElementRef;
    @ContentChild(AppBarThreeLiner) threeLiner: AppBarThreeLiner;

    @Input() expandedHeight = 200;
    @Input() collapsedHeight = this._calcDefaultCollapsedHeight();
    @Input() mode: 'collapsed' | 'expanded' | 'dynamic' = 'collapsed';

    // The thing that scrolls, we listen to this.
    @Input() scrollContainerElement: Element;
    @Input() scrollContainerClassName: { name: string; index: number };
    @Input() scrollContainerId: string;
    scrollEl;


    @Input() ref: TemplateRef<AppBarThreeLiner>;

    isWindow = false;
    currentHeight: number;
    scrollDistance: number;
    useDefaultCollapsedHeight = true;
    toolbar: HTMLElement;

    constructor(private readonly _ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.currentHeight = this.expandedHeight;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.collapsedHeight && !isNaN(Number(changes.collapsedHeight))) {
            this.useDefaultCollapsedHeight = false;
        }
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

        fromEvent(window, 'resize').subscribe(() => {
            this._resizeEl();
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
            this.scrollDistance = 0;
            this._ref.detectChanges();
            return;
        }
        if (this.mode === 'expanded') {
            this.currentHeight = this.expandedHeight;
            this.scrollDistance = 0;
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
        }
        const scrollPercentage = this.scrollDistance / this.expandedHeight;
        if (scrollPercentage >= 1 && this.currentHeight === collapsedHeight) {
            // Do nothing
            return;
        }
        this.threeLiner.transform(scrollPercentage);

        if (scrollPercentage >= 1) {
            this.currentHeight = collapsedHeight;
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

    getMarginTop(): number {
        return Math.min(this.expandedHeight, this.scrollDistance);
    }
}
