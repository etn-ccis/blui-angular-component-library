import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-user-menu-avatar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-user-menu-avatar" [class.non-text-avatar]="!value">
            <ng-container *ngIf="value">{{ value }}</ng-container>
            <img *ngIf="src" [src]="src" alt="User Menu Avatar" />
            <ng-content></ng-content>
        </div>
    `,
})
export class UserMenuAvatarComponent {
    @Input() value: string;
    @Input() src: string;
}
