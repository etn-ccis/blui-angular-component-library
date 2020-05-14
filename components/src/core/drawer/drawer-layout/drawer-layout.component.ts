import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

type VariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer-layout',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="pxb-drawer-layout">
            <mat-sidenav-container class="pxb-side-nav-container" (backdropClick)="closeDrawer()">
                <mat-sidenav
                    [mode]="variant === 'temporary' ? 'over' : 'side'"
                    class="px-blue-side-nav"
                    [ngClass]="[
                        variant === 'permanent'
                            ? 'pxb-drawer-permanent'
                            : variant === 'persistent'
                            ? 'pxb-drawer-persistent'
                            : 'pxb-drawer-temporary',
                        drawerOpen ? 'pxb-drawer-open' : 'pxb-drawer-closed'
                    ]"
                    [opened]="variant === 'permanent' || variant === 'persistent' ? true : drawerOpen"
                >
                    <ng-content select="[drawer]"></ng-content>
                </mat-sidenav>
                <mat-sidenav-content class="nav-content">
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

    closeDrawer(): void {
        this.onDrawerClose.emit();
    }
}
