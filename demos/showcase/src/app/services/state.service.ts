import { Injectable } from '@angular/core';
import {ViewportService} from "./viewport.service";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private drawerOpen: boolean;

  constructor(viewportService: ViewportService) {
    this.drawerOpen = !viewportService.isSmall();
    console.log('default for state service: ' + this.drawerOpen);
  }

  setDrawerOpen(drawerOpen: boolean): void {
    this.drawerOpen = drawerOpen;
  }

  getDrawerOpen(): boolean {
    console.log(this.drawerOpen);
    return this.drawerOpen;
  }
}
