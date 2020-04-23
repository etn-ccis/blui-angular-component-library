import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-drawer-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-footer">
            <div
                [ngStyle]="{ visibility: drawerOpen ? 'inherit' : 'hidden' }"
                class="pxb-drawer-footer-content-wrapper"
            >
                <ng-content select="[footerContent]"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer-footer.component.scss'],
})
export class DrawerFooterComponent {
    @Input() drawerOpen: boolean;
}
