import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerBodyComponent } from './drawer-body.component';
import { DrawerNavGroupModule } from '../drawer-nav-group/public-api';

@NgModule({
    declarations: [DrawerBodyComponent],
    imports: [CommonModule, DrawerNavGroupModule],
    exports: [DrawerBodyComponent],
})
export class DrawerBodyModule {}
