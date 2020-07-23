import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-user-menu-avatar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-user-menu-avatar">
            <div *ngIf="avatarValue" class="mat-h2 pxb-user-menu-text-avatar">{{ avatarValue }}</div>
            <img *ngIf="avatarImage" [src]="avatarImage" alt="User Menu Avatar" />
            <ng-content></ng-content>
        </div>
    `,
})
export class UserMenuAvatarComponent {
    @Input() avatarValue: string;
    @Input() avatarImage: string;
}
