import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DrawerService } from './service/drawer.service';
import { Subscription } from 'rxjs';

export class StateListener implements OnInit, OnDestroy {
    drawerOpen: boolean;
    drawerOpenListener: Subscription;

    constructor(public readonly drawerService: DrawerService, public readonly changeDetector: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.drawerOpen = this.drawerService.isDrawerOpen();
        this.listenForDrawerChanges();
    }

    public ngOnDestroy(): void {
        this.drawerOpenListener.unsubscribe();
    }

    listenForDrawerChanges(): void {
        this.drawerOpenListener = this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
            this.drawerOpen = res;
            this.changeDetector.detectChanges();
        });
    }
}
