import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerLayoutComponent } from './drawer-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {BidiModule} from "@angular/cdk/bidi";

@NgModule({
    declarations: [DrawerLayoutComponent],
    imports: [CommonModule, MatSidenavModule],
    exports: [DrawerLayoutComponent],
})
export class DrawerLayoutModule {}
