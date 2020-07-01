import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerFooterComponent } from './drawer-footer.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [DrawerFooterComponent],
    imports: [CommonModule, MatDividerModule],
    exports: [DrawerFooterComponent],
})
export class DrawerFooterModule {}
