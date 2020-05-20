import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  drawerOpen: boolean;
  drawerOpenObs = new Subject();
  
  constructor() {}

  setDrawerOpen(drawerOpen: boolean): void {
    this.drawerOpen = drawerOpen;
    this.drawerOpenObs.next(this.drawerOpen);
  }

  getDrawerOpen(): Observable<any> {
    return this.drawerOpenObs;
  }
}
