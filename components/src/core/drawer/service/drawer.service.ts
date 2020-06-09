import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DrawerLayoutVariantType } from '../..';

@Injectable({
    providedIn: 'root',
})
export class DrawerService {
    private drawerOpen: boolean;
    private variant: DrawerLayoutVariantType;
    drawerOpenObs = new Subject<boolean>();
    drawerSelectObs = new Subject<string>();

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen || this.getDrawerVariant() === 'permanent';
        this.drawerOpenObs.next(this.drawerOpen);
    }

    getDrawerVariant(): DrawerLayoutVariantType {
        return this.variant;
    }

    setDrawerVariant(variant: DrawerLayoutVariantType): void {
        this.variant = variant;
    }

    isDrawerOpen(): boolean {
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
