import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-info-list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-list-item
            class="pxb-info-list-item"
            [class.pxb-info-list-item-wrap]="wrapSubtitle || wrapTitle"
            [class.pxb-info-list-item-dense]="dense"
            [class.pxb-info-list-item-status]="statusColor"
            [style.borderLeftColor]="statusColor"
        >
            <div
                mat-list-icon
                class="pxb-info-list-item-icon"
                [class.pxb-info-list-item-hide-padding]="hidePadding"
                [class.pxb-info-list-item-avatar]="avatar"
            >
                <ng-content select="[icon]"></ng-content>
            </div>
            <div class="pxb-info-list-item-left-content">
                <ng-content select="[leftContent]"></ng-content>
            </div>
            <div class="mat-body-1 pxb-info-list-item-title" matLine [class.pxb-info-list-item-wrap]="wrapTitle">
                <ng-content select="[title]"></ng-content>
            </div>
            <div class="mat-body-2 pxb-info-list-item-subtitle" matLine [class.pxb-info-list-item-wrap]="wrapSubtitle">
                <ng-content select="[subtitle]"></ng-content>
            </div>
            <pxb-spacer class="pxb-info-list-item-spacer"></pxb-spacer>
            <div class="pxb-info-list-item-right-content">
                <div #right class="pxb-info-list-item-right-content-wrapper">
                    <ng-content select="[rightContent]"></ng-content>
                </div>
                <mat-icon *ngIf="chevron && !right.innerHTML">chevron_right</mat-icon>
            </div>
        </mat-list-item>
        <mat-divider
            *ngIf="divider"
            class="pxb-info-list-item-divider"
            [class.pxb-info-list-item-partial-divider]="divider === 'partial'"
        >
        </mat-divider>
    `,
    styleUrls: ['./info-list-item.component.scss'],
})
export class InfoListItemComponent {
    @Input() statusColor: string;
    @Input() chevron = false;
    @Input() dense = false;
    @Input() avatar = false;
    @Input() hidePadding = false;
    @Input() wrapSubtitle = false;
    @Input() wrapTitle = false;
    @Input() divider: DividerType;
}

type DividerType = 'full' | 'partial' | undefined;
