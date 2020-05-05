import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-drawer-subheader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-subheader">
            <div
                [ngStyle]="{ visibility: drawerOpen ? 'inherit' : 'hidden' }"
                class="pxb-drawer-subheader-content-wrapper"
            >
                <ng-content></ng-content>
            </div>
        </div>
        <mat-divider></mat-divider>
    `,
    styleUrls: ['./drawer-subheader.component.scss'],
})
export class DrawerSubheaderComponent {
    @Input() drawerOpen: boolean;
}
