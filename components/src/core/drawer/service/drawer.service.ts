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
    drawerSelectObs = new Subject<boolean>();

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

    select(hasChildren: boolean): void {
        this.drawerSelectObs.next(hasChildren);
    }

    drawerSelectionChanges(): Observable<boolean> {
        return this.drawerSelectObs;
    }
}
