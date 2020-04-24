import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material';
import { DrawerNavItemModule } from '../drawer-nav-item/public-api';

@NgModule({
    declarations: [DrawerNavGroupComponent],
    imports: [CommonModule, MatListModule, MatDividerModule, DrawerNavItemModule],
    exports: [DrawerNavGroupComponent],
})
export class DrawerNavGroupModule {}
