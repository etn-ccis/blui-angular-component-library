import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'pxb-user-menu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./user-menu.component.scss'],
    animations: [
        trigger('fade-in-out', [
            state('*', style({ opacity: 1, transform: 'scaleY(1)', 'transform-origin': 'top' })),
            // Create
            transition('void => *', [
                style({ opacity: 0, transform: 'scaleY(0.9)', 'transform-origin': 'top' }),
                animate('120ms cubic-bezier(0, 0, 0.2, 1)'),
            ]),
            // Destroy
            transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 }))),
        ]),
    ],
    template: `
        <!-- This button triggers the overlay and is it's origin -->
        <pxb-user-menu-avatar
            [avatarValue]="avatarValue"
            [avatarImage]="avatarImage"
            (click)="openMenu()"
            cdkOverlayOrigin
            #trigger="cdkOverlayOrigin"
        >
            <ng-content select="[pxb-avatar]"></ng-content>
        </pxb-user-menu-avatar>

        <ng-template
            cdkConnectedOverlay
            (backdropClick)="onClickBackdrop()"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayHasBackdrop]="true"
            [cdkConnectedOverlayOrigin]="trigger"
            [cdkConnectedOverlayOpen]="open"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayViewportMargin]="16"
            [cdkConnectedOverlayBackdropClass]="'pxb-user-menu-overlay-backdrop'"
        >
            <mat-card class="pxb-user-menu-overlay mat-elevation-z8" [@fade-in-out]>
                <pxb-drawer-header
                    *ngIf="menuTitle"
                    class="pxb-user-menu-header"
                    [title]="menuTitle"
                    [subtitle]="menuSubtitle"
                >
                    <pxb-user-menu-avatar
                        pxb-icon
                        [avatarValue]="avatarValue"
                        [avatarImage]="avatarImage"
                        class="pxb-user-menu-header-avatar"
                    >
                        <ng-content select="[pxb-menu-avatar]"></ng-content>
                    </pxb-user-menu-avatar>
                </pxb-drawer-header>
                <ng-content select="[pxb-menu-header]"></ng-content>
                <ng-content select="[pxb-menu-body]"></ng-content>
            </mat-card>
        </ng-template>
    `,
    host: {
        class: 'pxb-user-menu',
    },
})
export class UserMenuComponent {
    @Input() avatarValue: string;
    @Input() avatarImage: string;
    @Input() menuTitle: string;
    @Input() menuSubtitle: string;
    @Input() open = false;
    @Input() positions = [
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    ];

    @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() backdropClick: EventEmitter<void> = new EventEmitter<void>();

    onClickBackdrop(): void {
        this.open = false;
        this.openChange.emit(this.open);
        this.backdropClick.emit();
    }

    openMenu(): void {
        this.open = true;
        this.openChange.emit(this.open);
    }
}
