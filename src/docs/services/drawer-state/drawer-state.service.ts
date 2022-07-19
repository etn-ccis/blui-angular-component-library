import { Injectable } from '@angular/core';
import { ViewportService } from '../viewport/viewport.service';

@Injectable({
    providedIn: 'root',
})
export class DrawerStateService {
    private drawerOpen: boolean;
    private selectedItem: string;

    constructor(viewportService: ViewportService) {
        this.drawerOpen = !viewportService.isSmall();
    }

    setDrawerOpen(drawerOpen: boolean): void {
        this.drawerOpen = drawerOpen;
    }

    getDrawerOpen(): boolean {
        return this.drawerOpen;
    }

    setSelectedItem(item: string): void {
        this.selectedItem = item;
    }

    getSelectedItem(): string {
        return this.selectedItem;
    }
}
