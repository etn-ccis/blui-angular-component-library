import { ChangeDetectionStrategy, Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';
import { DrawerService } from '../drawer.service';

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
export class DrawerSubheaderComponent implements OnInit {
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
