import {
    ChangeDetectionStrategy, ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {fromEvent, Subscription} from "rxjs";
import {debounceTime, map, startWith} from "rxjs/operators";

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
                cdkOverlayOrigin
            [avatarValue]="avatarValue"
            [avatarImage]="avatarImage"
            (click)="openMenu()"
            #trigger="cdkOverlayOrigin"
        >
            <ng-content select="[pxb-avatar]"></ng-content>
        </pxb-user-menu-avatar>
        
        <ng-template #menu>
            <pxb-drawer-header
                    *ngIf="menuTitle"
                    class="pxb-user-menu-header"
                    [title]="menuTitle"
                    [subtitle]="menuSubtitle"
                    [divider]="true"
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
        </ng-template>
        
        <ng-template
            cdkConnectedOverlay
            (backdropClick)="onClickBackdrop()"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayHasBackdrop]="true"
            [cdkConnectedOverlayOrigin]="trigger"
            [cdkConnectedOverlayOpen]="isMenuOverlayOpen"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayViewportMargin]="16"
            [cdkConnectedOverlayBackdropClass]="'pxb-user-menu-overlay-backdrop'"
        >

            <mat-card class="pxb-user-menu-overlay mat-elevation-z8" [@fade-in-out]>
                <ng-template [ngTemplateOutlet]="menu"></ng-template>
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
    @Input() useBottomSheetAt = 600;
    @Input() positions = [
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    ];

    @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() backdropClick: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild(TemplateRef) menu: TemplateRef<any>;

    constructor(private readonly _bottomSheet: MatBottomSheet, private readonly _ref: ChangeDetectorRef) {}

    screenSizeChangeListener: Subscription;
    useBottomSheet: boolean;

    isBottomSheetOpen: boolean;
    isMenuOverlayOpen: boolean;

    checkScreenSize = (): boolean => document.body.offsetWidth < this.useBottomSheetAt;

    ngOnInit(): void {
        // Start off with the initial value use the isScreenSmall$ | async in the
        // view to get both the original value and the new value after resize.
        this.screenSizeChangeListener = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .pipe(map(this.checkScreenSize))
            .pipe(startWith(this.checkScreenSize()))
            .subscribe((isMobile: boolean) => {

                // Transition from Desktop to Mobile
                if (isMobile && !this.useBottomSheet) {
                    if (this.open) {
                        this.useBottomSheet = true;
                        this._closeDesktopMenu();
                        this._openBottomSheet();
                        this._ref.detectChanges();
                    }

                }
                // Transition from Mobile to Desktop
                else if (!isMobile && this.useBottomSheet) {
                    if (this.open) {
                        this._bottomSheet.dismiss(true)
                    }
                } else {
                    this.useBottomSheet = isMobile;
                }
        })
    }

    ngOnDestroy(): void {
        this.screenSizeChangeListener.unsubscribe();
    }

    onClickBackdrop(): void {
        this.open = false;
        this.isMenuOverlayOpen = false;
        this.openChange.emit(this.open);
        this.backdropClick.emit();
    }

    openMenu(): void {
        this.open = true;
        this.openChange.emit(this.open);
        if (this.useBottomSheet && !this.isBottomSheetOpen) {
            this._openBottomSheet();
        } else if (!this.useBottomSheet) {
            this._openDesktopMenu();
        }
    }

    private _openDesktopMenu(): void {
        this.isMenuOverlayOpen = true;
    }

    private _closeDesktopMenu(): void {
        this.isMenuOverlayOpen = false;
    }

    private _openBottomSheet(): void {
        this.isBottomSheetOpen = true;
        this._bottomSheet.open(this.menu, {
            backdropClass: 'pxb-user-menu-bottomsheet-overlay',
            panelClass: 'pxb-user-menu-bottomsheet',
            hasBackdrop: true,
        }).afterDismissed().subscribe((open: true) => {
            this.isBottomSheetOpen = false;
            if (open) {
                this._openDesktopMenu();
                this._ref.detectChanges();
            }
        })
    }
}
