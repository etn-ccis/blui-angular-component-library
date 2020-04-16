import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerHeaderComponent } from './drawer-header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [DrawerHeaderComponent],
    imports: [
        CommonModule,
        MatDividerModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [DrawerHeaderComponent],
})
export class DrawerHeaderModule {}
