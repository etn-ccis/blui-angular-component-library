import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DrawerService } from './service/drawer.service';
import { Subscription } from 'rxjs';

export class StateListener implements OnInit, OnDestroy {
    drawerOpen: boolean;
    drawerOpenListener: Subscription;

    constructor(protected drawerService: DrawerService, protected changeDetector: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.drawerOpen = this.drawerService.isDrawerOpen();
        this.listenForDrawerChanges();
    }

    public ngOnDestroy(): void {
        if (this.drawerOpenListener) {
            this.drawerOpenListener.unsubscribe();
        }
    }

    listenForDrawerChanges(): void {
        this.drawerOpenListener = this.drawerService.drawerOpenChanges().subscribe((res: boolean) => {
            this.drawerOpen = res;
            this.changeDetector.detectChanges();
        });
    }
}
