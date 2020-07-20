import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

export type UserMenuItem = {
    chevron?: boolean;
    divider?: boolean;
    icon?: string;
    statusColor?: string;
    title: string;
    subtitle?: string;
};

@Component({
    selector: 'pxb-user-menu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <!-- This button triggers the overlay and is it's origin -->
        <pxb-user-menu-avatar
            [value]="value"
            [src]="src"
            (click)="isOpen = !isOpen"
            cdkOverlayOrigin
            #trigger="cdkOverlayOrigin"
        >
            <ng-content select="[pxb-avatar]"></ng-content>
        </pxb-user-menu-avatar>

        <!-- This template displays the overlay content and is connected to the button -->
        <ng-template
            cdkConnectedOverlay
            (backdropClick)="backdropClick()"
            [cdkConnectedOverlayHasBackdrop]="true"
            [cdkConnectedOverlayOrigin]="trigger"
            [cdkConnectedOverlayOpen]="isOpen"
        >
            <mat-card class="pxb-user-menu-container">
                <div class="pxb-user-menu-header" *ngIf="title">
                    <pxb-drawer-header [title]="title" [subtitle]="subtitle">
                        <pxb-user-menu-avatar pxb-icon [value]="value" [src]="src" class="pxb-user-menu-header-avatar">
                            <ng-content select="[pxb-avatar]"></ng-content>
                        </pxb-user-menu-avatar>
                    </pxb-drawer-header>
                </div>
                <ng-content></ng-content>
                <div *ngIf="items.length > 0" class="pxb-user-menu-items-container">
                    <mat-nav-list [style.paddingTop.px]="0">
                        <pxb-info-list-item
                            *ngFor="let item of items"
                            [dense]="true"
                            [hidePadding]="true"
                            [chevron]="item.chevron"
                            [statusColor]="item.statusColor"
                            (click)="selectItem(item.title)"
                        >
                            <mat-icon pxb-icon *ngIf="item.icon">{{ item.icon }}</mat-icon>
                            <div pxb-title>{{ item.title }}</div>
                            <div pxb-subtitle *ngIf="item.subtitle">{{ item.title }}</div>
                        </pxb-info-list-item>
                    </mat-nav-list>
                </div>
            </mat-card>
        </ng-template>
    `,
    styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
    @Input() value: string;
    @Input() src: string;
    @Input() title: string;
    @Input() subtitle: string;
    @Input() items: UserMenuItem[] = [];
    isOpen = false;

    @Output() select: EventEmitter<string> = new EventEmitter<string>();

    backdropClick(): void {
        this.isOpen = false;
    }

    selectItem(id: string): void {
        this.select.emit(id);
        this.isOpen = false;
    }
}
