import { ChangeDetectorRef, OnDestroy, OnInit, Directive } from '@angular/core';
import { DrawerService } from './service/drawer.service';
import { Subscription } from 'rxjs';

@Directive()
export class StateListener implements OnInit, OnDestroy {
    drawerOpenListener: Subscription;

    constructor(protected drawerService: DrawerService, protected changeDetector: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.listenForDrawerChanges();
    }

    public ngOnDestroy(): void {
        this.unsubscribeListeners();
    }

    public isOpen(): boolean {
        return this.drawerService.isDrawerOpen();
    }

    public unsubscribeListeners(): void {
        if (this.drawerOpenListener) {
            this.drawerOpenListener.unsubscribe();
        }
    }

    listenForDrawerChanges(): void {
        this.drawerOpenListener = this.drawerService.drawerOpenChanges().subscribe(() => {
            this.changeDetector.detectChanges();
        });
    }
}
