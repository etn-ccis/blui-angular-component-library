import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'pxb-drawer-body',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-body">
            <pxb-drawer-nav-group *ngFor="let item of items" [title]="item.title" [items]="item.items">

            </pxb-drawer-nav-group>
        </div>
    `,
    styleUrls: ['./drawer-body.component.scss'],
})
export class DrawerBodyComponent {
    @Input() items // @TODO: Define type
}
