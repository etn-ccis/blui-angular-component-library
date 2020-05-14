import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerLayoutComponent } from './drawer-layout.component';
import { MatSidenavModule } from '@angular/material';

@NgModule({
    declarations: [DrawerLayoutComponent],
    imports: [CommonModule, MatSidenavModule],
    exports: [DrawerLayoutComponent],
})
export class DrawerLayoutModule {}
