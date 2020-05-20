import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
    Output,
    EventEmitter,
    SimpleChanges,
} from '@angular/core';
import { DrawerService } from '../drawer.service';

type VariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-layout">
            <mat-sidenav-container class="pxb-side-nav-container" (backdropClick)="closeDrawer()" autosize>
                <mat-sidenav
                    [mode]="variant === 'temporary' ? 'over' : 'side'"
                    class="px-blue-side-nav"
                    [class.pxb-drawer-permanent]="variant === 'permanent'"
                    [class.pxb-drawer-persistent]="variant === 'persistent'"
                    [class.pxb-drawer-temporary]="variant === 'temporary'"
                    [ngClass]="[drawerOpen ? 'pxb-drawer-open' : 'pxb-drawer-closed']"
                    [opened]="isOpen()"
                >
                    <ng-content select="[drawer]"></ng-content>
                </mat-sidenav>
                <mat-sidenav-content class="pxb-nav-content">
                    <ng-content select="[content]"></ng-content>
                </mat-sidenav-content>
            </mat-sidenav-container>
        </div>
    `,
    styleUrls: ['./drawer-layout.component.scss'],
})
export class DrawerLayoutComponent {
    @Input() drawerOpen: boolean;
    @Input() variant: VariantType;
    @Output() onDrawerClose: EventEmitter<any> = new EventEmitter();

    constructor(public drawerService: DrawerService) {}

    ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes) {
            if (propName === 'drawerOpen') {
                this.drawerService.setDrawerOpen(this.drawerOpen);
            }
        }
    }

    closeDrawer(): void {
        this.onDrawerClose.emit();
    }

    isOpen(): boolean {
        return this.variant === 'permanent' || this.variant === 'persistent' ? true : this.drawerOpen;
    }
}
