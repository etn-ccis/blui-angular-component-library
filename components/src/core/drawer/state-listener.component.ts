import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DrawerService } from './service/drawer.service';
import { Subscription } from 'rxjs';

export class StateListener implements OnInit, OnDestroy {
    drawerOpen: boolean;
    drawerOpenListener: Subscription;

    constructor(public readonly drawerService: DrawerService, public readonly changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.drawerOpen = this.drawerService.getDrawerOpen();
        this.listenForDrawerChanges();
    }

    ngOnDestroy(): void {
        this.drawerOpenListener.unsubscribe();
    }

    listenForDrawerChanges(): void {
        this.drawerOpenListener = this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
            this.drawerOpen = res;
            this.changeDetector.detectChanges();
        });
    }
}
