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
        <pxb-drawer-nav-item *ngFor="let item of items" [statusColor]="item.statusColor" [title]="item.title" [subtitle]="item.subtitle" [itemID]="item.itemID" [icon]="item.icon">
            <!-- <div icon>{{item.icon}}</div> -->
        </pxb-drawer-nav-item>
    `,
    styleUrls: ['./drawer-nav-group.component.scss'],
})
export class DrawerNavGroupComponent {
    @Input() title: string
    @Input() items // @TODO: Define type
    @Input() itemID: string;
    @Input() icon: string;
}
