import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';
import { DrawerService } from '../drawer.service';

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
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./drawer-footer.component.scss'],
})
export class DrawerFooterComponent implements OnInit {
    drawerOpen: boolean;

    constructor(public drawerService: DrawerService, private changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.drawerOpen = this.drawerService.getDrawerOpen();
        this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
            this.drawerOpen = res;
            this.changeDetector.detectChanges();
        });
    }
}
