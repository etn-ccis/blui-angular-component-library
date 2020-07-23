import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DrawerService } from './service/drawer.service';
import { Subscription } from 'rxjs';
import { BidiComponent } from '../utility/bidi.component';
import { Directionality } from '@angular/cdk/bidi';

export class StateListener extends BidiComponent implements OnInit, OnDestroy {
    drawerOpen: boolean;
    drawerOpenListener: Subscription;

    constructor(
        protected dir: Directionality,
        protected drawerService: DrawerService,
        protected changeDetector: ChangeDetectorRef
    ) {
        super(dir, changeDetector);
    }

    public ngOnInit(): void {
        this.drawerOpen = this.drawerService.isDrawerOpen();
        this.listenForDrawerChanges();
    }

    public ngOnDestroy(): void {
        this.unsubscribeDir();
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
