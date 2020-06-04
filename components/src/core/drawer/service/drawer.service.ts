import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DrawerService {
    drawerOpen;
    drawerOpenObs = new Subject<boolean>();

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen;
        console.log('new state: ' + this.drawerOpen);
        this.drawerOpenObs.next(this.drawerOpen);
    }

    getDrawerOpen(): boolean {
        return this.drawerOpen;
    }

    drawerOpenChanges(): Observable<boolean> {
        return this.drawerOpenObs;
    }
}