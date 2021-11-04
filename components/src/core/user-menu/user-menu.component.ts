import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { fromEvent, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * [UserMenu Component](https://brightlayer-ui-components.github.io/angular/?path=/info/components-user-menu--readme)
 *
 * The `<blui-user-menu>` is an Avatar that opens a Menu when clicked.
 * It is typically used in the top-right corner of an application and indicates who is logged in.
 */
@Component({
    selector: 'blui-user-menu',
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
        <blui-user-menu-avatar
            cdkOverlayOrigin
            [avatarValue]="avatarValue"
            [avatarImage]="avatarImage"
            (click)="openMenu()"
            #trigger="cdkOverlayOrigin"
        >
            <ng-content select="[blui-avatar]"></ng-content>
        </blui-user-menu-avatar>

        <ng-template #menu>
            <blui-drawer-header
                *ngIf="menuTitle"
                class="blui-user-menu-header"
                [title]="menuTitle"
                [subtitle]="menuSubtitle"
                [divider]="true"
            >
                <blui-user-menu-avatar
                    blui-icon
                    [avatarValue]="avatarValue"
                    [avatarImage]="avatarImage"
                    class="blui-user-menu-header-avatar"
                >
                    <ng-content select="[blui-menu-avatar]"></ng-content>
                </blui-user-menu-avatar>
            </blui-drawer-header>
            <ng-content select="[blui-menu-header]"></ng-content>
            <ng-content select="[blui-menu-body]"></ng-content>
        </ng-template>

        <ng-template
            cdkConnectedOverlay
            (backdropClick)="onClickMenuBackdrop()"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayHasBackdrop]="true"
            [cdkConnectedOverlayOrigin]="trigger"
            [cdkConnectedOverlayOpen]="isMenuOpen"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayViewportMargin]="16"
            [cdkConnectedOverlayBackdropClass]="'blui-user-menu-overlay-backdrop'"
        >
            <mat-card class="blui-user-menu-overlay mat-elevation-z8" [@fade-in-out]>
                <ng-template [ngTemplateOutlet]="menu"></ng-template>
            </mat-card>
        </ng-template>
    `,
    host: {
        class: 'blui-user-menu',
    },
})
export class UserMenuComponent {
    /** Image source for avatar */
    @Input() avatarImage: string;

    /** Text value for avatar */
    @Input() avatarValue: string;

    /** Subtitle shown when menu is open */
    @Input() menuSubtitle: string;

    /** Title shown when menu is open */
    @Input() menuTitle: string;

    /** Where to render the menu relative to the avatar */
    @Input() positions = [
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    ];

    /** Whether the menu overlay appears on screen.
     *
     * @default false
     */
    @Input() open = false;

    /** Window pixel width at which the responsive bottom sheet menu is triggered (set to 0 to disable responsive behavior)
     *
     * @default 600
     * */
    @Input() useBottomSheetAt = 600;

    /** Emits event when backdrop is clicked */
    @Output() backdropClick: EventEmitter<void> = new EventEmitter<void>();

    /** Emits an event when the open prop changes */
    @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild(TemplateRef) menu: TemplateRef<any>;

    constructor(private readonly _bottomSheet: MatBottomSheet, private readonly _ref: ChangeDetectorRef) {}

    screenSizeChangeListener: Subscription;
    useBottomSheet: boolean;
    isBottomSheetOpen: boolean;
    isMenuOpen: boolean;

    checkScreenSize = (): boolean => document.body.offsetWidth < this.useBottomSheetAt;

    ngOnInit(): void {
        // Subscribe to resize events and transition from menu to bottomsheet (or vise versa) when open & resizing
        this.screenSizeChangeListener = fromEvent(window, 'resize')
            .pipe(map(this.checkScreenSize))
            .pipe(startWith(this.checkScreenSize()))
            .subscribe((isMobile: boolean) => {
                // Transition from Desktop to Mobile
                if (this.open && isMobile && !this.useBottomSheet) {
                    this.isMenuOpen = false;
                    this._openBottomSheet();
                    this._ref.detectChanges();
                }
                // Transition from Mobile to Desktop
                else if (this.open && !isMobile && this.useBottomSheet) {
                    this._bottomSheet.dismiss(true);
                }
                this.useBottomSheet = isMobile;
            });
    }

    ngOnChanges(simpleChanges: SimpleChanges): void {
        // Set state and dismiss bottom sheet when open() changes.
        if (simpleChanges.open) {
            this.isBottomSheetOpen = this.open && this.useBottomSheet;
            this.isMenuOpen = this.open && !this.useBottomSheet;
            if (!this.open) {
                this._bottomSheet.dismiss(false);
            }
        }
        if (simpleChanges.useBottomSheetAt) {
            this.useBottomSheet = this.checkScreenSize();
        }
    }

    ngOnDestroy(): void {
        if (this.screenSizeChangeListener) {
            this.screenSizeChangeListener.unsubscribe();
        }
    }

    onClickMenuBackdrop(): void {
        this.open = false;
        this.isMenuOpen = false;
        this.openChange.emit(this.open);
        this.backdropClick.emit();
    }

    openMenu(): void {
        this.open = true;
        this.openChange.emit(this.open);
        if (this.useBottomSheet) {
            this._openBottomSheet();
        } else {
            this.isMenuOpen = true;
        }
    }

    private _openBottomSheet(): void {
        this.isBottomSheetOpen = true;
        this._bottomSheet
            .open(this.menu, {
                backdropClass: 'blui-user-menu-bottomsheet-backdrop',
                panelClass: 'blui-user-menu-bottomsheet',
                hasBackdrop: true,
            })
            .afterDismissed()
            .subscribe((openMenu: true) => {
                this.isBottomSheetOpen = false;
                if (openMenu) {
                    this.isMenuOpen = true;
                    this._ref.detectChanges();
                }
            });
    }
}
