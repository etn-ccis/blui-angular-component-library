import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

export type UserMenuGroupItem = {
    chevron?: boolean;
    divider?: boolean;
    icon?: string;
    statusColor?: string;
    title: string;
    subtitle?: string;
}

export type UserMenuGroup = {
    title?: string;
    items: UserMenuGroupItem[];
};

@Component({
    selector: 'pxb-user-menu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
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
            (backdropClick)="backdropClick()"
            [cdkConnectedOverlayPush]="true"
            [cdkConnectedOverlayHasBackdrop]="true"
            [cdkConnectedOverlayOrigin]="trigger"
            [cdkConnectedOverlayOpen]="open"
            [cdkConnectedOverlayPositions]="positions"
            [cdkConnectedOverlayBackdropClass]="'pxb-user-menu-overlay'"
        >
            <mat-card class="pxb-user-menu-container">
                <pxb-drawer-header *ngIf="menuTitle"
                    class="pxb-user-menu-header"
                    [title]="menuTitle"
                    [subtitle]="menuSubtitle"
                >
                    <pxb-user-menu-avatar pxb-icon [avatarValue]="avatarValue" [avatarImage]="avatarImage" class="pxb-user-menu-header-avatar">
                        <ng-content select="[pxb-menu-avatar]"></ng-content>
                    </pxb-user-menu-avatar>
                </pxb-drawer-header>
                <ng-content select="[pxb-header]"></ng-content>
                <div *ngIf="menuGroups.length > 0" class="pxb-user-menu-items-container">
                    <div *ngFor="let group of menuGroups">
                        <ng-container *ngIf="group.title">
                            <div class="pxb-user-menu-group-title">{{ group.title }}</div>
                            <mat-divider></mat-divider>
                        </ng-container>
                        <mat-nav-list [style.paddingTop.px]="0">
                            <pxb-info-list-item
                                *ngFor="let item of group.items"
                                [dense]="true"
                                [hidePadding]="true"
                                [chevron]="item.chevron"
                                [statusColor]="item.statusColor"
                                [divider]="item.divider ? 'full' : undefined"
                                (click)="selectItem(item.title)"
                            >
                                <mat-icon pxb-icon *ngIf="item.icon">{{ item.icon }}</mat-icon>
                                <div pxb-title>{{ item.title }}</div>
                                <div pxb-subtitle *ngIf="item.subtitle">{{ item.title }}</div>
                            </pxb-info-list-item>
                        </mat-nav-list>
                    </div>
                </div>
                <ng-content select="[pxb-body]"></ng-content>
                <ng-content select="[pxb-footer]"></ng-content>
            </mat-card>
        </ng-template>
    `,
    styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
    @Input() avatarValue: string;
    @Input() avatarImage: string;
    @Input() menuTitle: string;
    @Input() menuSubtitle: string;
    @Input() menuGroups: UserMenuGroup[] = [];
    @Input() open = false;

    @Output() select: EventEmitter<string> = new EventEmitter<string>();
    @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    positions = [
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'center', overlayY: 'top' }),
        new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    ];

    backdropClick(): void {
        this.open = false;
        this.openChange.emit(this.open);
    }

    openMenu(): void {
        this.open = true;
        this.openChange.emit(this.open);
    }

    selectItem(id: string): void {
        this.select.emit(id);
        this.open = false;
        this.openChange.emit(this.open);
    }
}
