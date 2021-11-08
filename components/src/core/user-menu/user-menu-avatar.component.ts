import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'blui-user-menu-avatar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="blui-user-menu-avatar-content">
            <div *ngIf="avatarValue" class="mat-h2 blui-user-menu-text-avatar">{{ avatarValue }}</div>
            <img *ngIf="avatarImage" [src]="avatarImage" alt="User Menu Avatar" />
            <ng-content></ng-content>
        </div>
    `,
    host: {
        class: 'blui-user-menu-avatar',
    },
})
export class UserMenuAvatarComponent {
    @Input() avatarValue: string;
    @Input() avatarImage: string;
}
