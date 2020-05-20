import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { DrawerService } from '../drawer.service';

@Component({
    selector: 'pxb-drawer-body',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-body">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./drawer-body.component.scss'],
})
export class DrawerBodyComponent implements OnInit {
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
