import { ChangeDetectionStrategy, Component, ViewEncapsulation, ChangeDetectorRef, Input } from '@angular/core';
import { DrawerService } from '../service/drawer.service';
import { StateListener } from '../state-listener.component';

@Component({
    selector: 'pxb-drawer-subheader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-subheader" [class.pxb-drawer-subheader-closed]="!isOpen()">
            <ng-content></ng-content>
        </div>
        <mat-divider *ngIf="divider"></mat-divider>
    `,
    styleUrls: ['./drawer-subheader.component.scss'],
})
export class DrawerSubheaderComponent extends StateListener {
    @Input() divider = true;

    constructor(drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }
}
