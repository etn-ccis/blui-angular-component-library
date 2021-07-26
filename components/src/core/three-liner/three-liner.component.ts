import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { isEmptyView } from '../../utils/utils';

/**
 * The `<pxb-three-liner>` can display up to three lines of stylized text or other ng-content.
 * It is most commonly used within the context of a `<pxb-app-bar>` component where the text can grow / shrink as the App Bar is expanded and collapsed.
 */
@Component({
    selector: 'pxb-three-liner',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['three-liner.component.scss'],
    template: `
        <div class="pxb-three-liner-content">
            <div class="pxb-three-liner-title">
                <div #titleVc>
                    <ng-content select="[pxb-title]"></ng-content>
                </div>
                <ng-container *ngIf="isEmpty(titleEl)">
                    {{ title }}
                </ng-container>
            </div>

            <div class="pxb-three-liner-subtitle">
                <div #subtitleVc>
                    <ng-content select="[pxb-subtitle]"></ng-content>
                </div>
                <ng-container *ngIf="isEmpty(subtitleEl)">
                    {{ subtitle }}
                </ng-container>
            </div>

            <div class="pxb-three-liner-info">
                <div #infoVc>
                    <ng-content select="[pxb-info]"></ng-content>
                </div>
                <ng-container *ngIf="isEmpty(infoEl)">
                    {{ info }}
                </ng-container>
            </div>
        </div>
    `,
    host: {
        class: 'pxb-three-liner',
    },
})
export class ThreeLinerComponent implements AfterViewInit {
    /** First line content */
    @Input() title;
    /** Second line content */
    @Input() subtitle;
    /** Third line content */
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
