import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerSubheaderComponent } from './drawer-subheader.component';
import { MatDividerModule } from '@angular/material';

@NgModule({
    declarations: [DrawerSubheaderComponent],
    imports: [CommonModule, MatDividerModule],
    exports: [DrawerSubheaderComponent],
})
export class DrawerSubheaderModule {}
