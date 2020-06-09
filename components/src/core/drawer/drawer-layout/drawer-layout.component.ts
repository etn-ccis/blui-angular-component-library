import {ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {DrawerService} from '../service/drawer.service';
import {StateListener} from '../state-listener.component';

export type DrawerLayoutVariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer-layout',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-layout.component.scss'],
    template: `
        <mat-sidenav-container class="pxb-drawer-layout" (backdropClick)="closeDrawer()">
            <mat-sidenav class="sidenav"
                [fixedInViewport]="true"
                [class.open]="!isCollapsed()"
                [class.temporary]="variant==='temporary'"
                [mode]="getMode()" 
                [opened]="isOpen()">
                <ng-content select="[drawer]"></ng-content>
            </mat-sidenav>
            <mat-sidenav-content class="nav-content" 
                 [class.open]="!isCollapsed()"
                 [class.mobile]="variant==='temporary'">
                <ng-content select="[content]"></ng-content>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
})
export class DrawerLayoutComponent extends StateListener {
    @Input() variant: DrawerLayoutVariantType;
    @Input() width: number;
    @Output() backdropClick: EventEmitter<void> = new EventEmitter();

    constructor(public readonly drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    ngOnChanges(): void {
        this.drawerService.setDrawerVariant(this.variant);
    }

    getMode(): string {
        return this.variant === 'temporary' ? 'over' : 'side';
    }

    closeDrawer(): void {
        this.drawerService.setDrawerOpen(false);
        this.backdropClick.emit();
    }

    // Is the drawer seen on the screen and expanded.
    isOpen(): boolean {
        if (this.variant === 'temporary') return this.drawerOpen;
        return true;
    }

    // Is the drawer condensed.
    isCollapsed(): boolean {
        if (this.variant === 'persistent') return !this.drawerOpen;
        return false;
    }
}
