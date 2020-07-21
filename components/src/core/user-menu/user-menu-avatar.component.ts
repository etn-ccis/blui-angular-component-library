import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-user-menu-avatar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-user-menu-avatar" [class.non-text-avatar]="!avatarValue">
            <ng-container *ngIf="avatarValue">{{ avatarValue }}</ng-container>
            <img *ngIf="avatarImage" [src]="avatarImage" alt="User Menu Avatar" />
            <ng-content></ng-content>
        </div>
    `,
})
export class UserMenuAvatarComponent {
    @Input() avatarValue: string;
    @Input() avatarImage: string;
}
