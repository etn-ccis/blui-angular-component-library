import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DrawerService {
    drawerOpen;
    drawerOpenObs = new Subject<boolean>();
    drawerSelectObs = new Subject<string>();

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen;
        this.drawerOpenObs.next(this.drawerOpen);
    }

    getDrawerOpen(): boolean {
        return this.drawerOpen;
    }

    drawerOpenChanges(): Observable<boolean> {
        return this.drawerOpenObs;
    }

    select(): void {
        this.drawerSelectObs.next();
    }

    drawerSelectionChanges(): Observable<string> {
        return this.drawerSelectObs;
    }
}
