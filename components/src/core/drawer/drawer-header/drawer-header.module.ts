import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerHeaderComponent } from './drawer-header.component';
import { MatToolbarModule, MatIconModule, MatDividerModule } from '@angular/material';

@NgModule({
    declarations: [DrawerHeaderComponent],
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatDividerModule],
    exports: [DrawerHeaderComponent],
})
export class DrawerHeaderModule {}
