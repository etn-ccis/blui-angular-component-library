import { ChangeDetectorRef, OnDestroy, OnInit, Directive, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerState } from './drawerState';

const stateMap = new Map<number, DrawerState>();

/** This service is used to manage the state of a Drawer component, responds to user behavior and input settings. */
@Injectable({
    providedIn: 'root',
})
export class DrawerStateManagerService {
    private numberOfDrawerStateInstances = 0;

    incrementNumberOfDrawerStateInstances(): number {
        this.numberOfDrawerStateInstances++;
        return this.numberOfDrawerStateInstances;
    }

    getNumberOfDrawerStateInstances(): number {
        return this.numberOfDrawerStateInstances;
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
        const currentDrawerStateId = drawerStateManagerService.getNumberOfDrawerStateInstances();
        if (createNewStateListener || !stateMap.has(currentDrawerStateId)) {
            this._createNewDrawerServiceInstance();
        } else {
            this.drawerState = stateMap.get(currentDrawerStateId);
        }
    }

    private _createNewDrawerServiceInstance(): void {
        this.drawerStateManagerService.incrementNumberOfDrawerStateInstances();
        const newDrawerStateInstance = new DrawerState();
        const drawerId = this.drawerStateManagerService.getNumberOfDrawerStateInstances();
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
