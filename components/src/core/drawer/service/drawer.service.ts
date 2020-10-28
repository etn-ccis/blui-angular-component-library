import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DrawerLayoutVariantType } from '../..';

@Injectable({
    providedIn: 'root',
})
export class DrawerService {
    private drawerOpen: boolean;
    private variant: DrawerLayoutVariantType;
    private navItemCount = 0;
    private tempOpen = false;
    private isCondensed: boolean;
    drawerOpenObs = new Subject<boolean>();
    drawerSelectObs = new Subject<boolean>();
    drawerActiveItemChangeObs = new Subject<boolean>();

    setDrawerTempOpen(open: boolean): void {
        this.tempOpen = open;
        this.drawerOpenObs.next(this.isDrawerOpen());
    }

    setIsCondensed(condensed: boolean): void {
        this.isCondensed = condensed;
    }

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen;
        this.drawerOpenObs.next(this.isDrawerOpen());
    }

    setDrawerVariant(variant: DrawerLayoutVariantType): void {
        this.variant = variant;
        this.drawerOpenObs.next(this.isDrawerOpen());
    }

    getDrawerVariant(): DrawerLayoutVariantType {
        return this.variant;
    }

    isDrawerOpen(): boolean {
        return (
            this.drawerOpen ||
            this.getDrawerVariant() === 'permanent' ||
            this.tempOpen ||
            this.getDrawerVariant() === 'rail'
        );
    }

    isTempOpen(): boolean {
        return this.tempOpen;
    }

    isRailCondensed(): boolean {
        return this.isCondensed;
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
    
    emitChangeActiveItemEvent(): void {
        this.drawerActiveItemChangeObs.next();
    }

    drawerActiveItemChanges(): Observable<boolean> {
        return this.drawerActiveItemChangeObs;
    }

    createNavItemID(): number {
        return ++this.navItemCount;
    }
}
