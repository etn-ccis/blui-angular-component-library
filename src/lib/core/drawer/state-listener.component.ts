import { ChangeDetectorRef, OnDestroy, OnInit, Directive, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerState } from './drawerState';

const stateMap = new Map<number, DrawerState>();

/** This service is used to manage the state of a Drawer component, responds to user behavior and input settings. */
@Injectable({
    providedIn: 'root',
})
export class DrawerStateManagerService {
    private numberOfDrawerInstances = 0;

    incrementNumberOfDrawerInstances(): number {
        this.numberOfDrawerInstances = this.numberOfDrawerInstances + 1;
        return this.numberOfDrawerInstances;
    }

    getNumberOfDrawerInstances(): number {
        return this.numberOfDrawerInstances;
    }
}

@Directive()
export class StateListener implements OnInit, OnDestroy {
    drawerOpenListener: Subscription;
    drawerState: DrawerState;

    constructor(
        protected drawerStateManagerService: DrawerStateManagerService,
        protected changeDetector: ChangeDetectorRef,
        public createNewStateListener = false
    ) {
        if (createNewStateListener || !stateMap.has(drawerStateManagerService.getNumberOfDrawerInstances())) {
            this._createNewDrawerServiceInstance();
        } else {
            this.drawerState = stateMap.get(drawerStateManagerService.getNumberOfDrawerInstances());
        }
    }

    private _createNewDrawerServiceInstance(): void {
        this.drawerStateManagerService.incrementNumberOfDrawerInstances();
        const newDrawerStateInstance = new DrawerState();
        const drawerId = this.drawerStateManagerService.getNumberOfDrawerInstances();
        stateMap.set(drawerId, newDrawerStateInstance);
        this.drawerState = newDrawerStateInstance;
    }

    public ngOnInit(): void {
        this.listenForDrawerChanges();
    }

    public ngOnDestroy(): void {
        this.unsubscribeListeners();
    }

    public isOpen(): boolean {
        return this.drawerState.isDrawerOpen();
    }

    public isOpenOnHover(): boolean {
        return this.drawerState.isOpenOnHover();
    }

    public unsubscribeListeners(): void {
        if (this.drawerOpenListener) {
            this.drawerOpenListener.unsubscribe();
        }
    }

    listenForDrawerChanges(): void {
        this.drawerOpenListener = this.drawerState.drawerOpenChanges().subscribe(() => {
            this.changeDetector.detectChanges();
        });
    }
}
