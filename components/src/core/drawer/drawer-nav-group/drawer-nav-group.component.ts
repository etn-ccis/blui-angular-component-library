import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'pxb-drawer-nav-group',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-nav-group">
            <mat-list>
                <mat-list-item>{{title}}</mat-list-item>
            </mat-list>
            <mat-divider></mat-divider>
        </div>
    `,
    styleUrls: ['./drawer-nav-group.component.scss'],
})
export class DrawerNavGroupComponent {
    @Input() title: string
    @Input() itemID: string;
}
