import {ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core';
import {DrawerService} from '../service/drawer.service';
import {StateListener} from '../state-listener.component';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

export type DrawerLayoutVariantType = 'permanent' | 'persistent' | 'temporary';

@Component({
    selector: 'pxb-drawer-layout',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./drawer-layout.component.scss'],
    animations: [
        trigger('sidenavAnimationIsExpanded', [
            state('true', style({
                width: '360px'
            })),
            state('false', style({
                width: '56px'
            })),
            transition('false <=> true', animate('300ms ease'))
        ])
    ],
    template: `
        <mat-sidenav-container class="pxb-drawer-layout" (backdropClick)="closeDrawer()" autosize>
            <mat-sidenav
                fixedInViewport 
                [mode]="getMode()" 
                [opened]="isOpen()"
                [@sidenavAnimationIsExpanded]="!isCollapsed()" 
                (@sidenavAnimationIsExpanded.start)="start()" 
                (@sidenavAnimationIsExpanded.done)="done()">
                <ng-content select="pxb-drawer"></ng-content>
            </mat-sidenav>
            <mat-sidenav-content>
                {{isOpen()}}
                <ng-content select="[content]"></ng-content>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
})
export class DrawerLayoutComponent extends StateListener {
    @Input() variant: DrawerLayoutVariantType;
    @Input() width: number;
    animating = false;

    constructor(public readonly drawerService: DrawerService, changeDetectorRef: ChangeDetectorRef) {
        super(drawerService, changeDetectorRef);
    }

    ngOnChanges(): void {
        this.drawerService.setDrawerVariant(this.variant);
    }

    start(): void {
        this.animating = true;
        this.tick();
    }

    done(): void {
        this.animating = false;
    }

    tick(): void {
        if (this.animating) requestAnimationFrame(() => this.tick());
    }

    getMode(): string {
        return this.variant === 'temporary' ? 'over' : 'side';
    }

    closeDrawer(): void {
        this.drawerService.setDrawerOpen(false);
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
