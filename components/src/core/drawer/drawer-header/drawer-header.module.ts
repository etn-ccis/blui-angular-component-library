import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerHeaderComponent } from './drawer-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
    declarations: [DrawerHeaderComponent],
    imports: [CommonModule, MatToolbarModule, MatDividerModule],
    exports: [DrawerHeaderComponent],
})
export class DrawerHeaderModule {}
