import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  drawerOpen = true;
  
  constructor() { }

  setDrawerOpen(drawerOpen: boolean): void {
    this.drawerOpen = drawerOpen;
  }

  getDrawerOpen(): Observable<boolean> {
    return of(this.drawerOpen);
  }
}
