import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerBodyComponent } from './drawer-body.component';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';
import { DrawerNavItemComponent } from './drawer-nav-item.component';
import { MatListModule } from '@angular/material/list';
import { InfoListItemModule } from '../../info-list-item/public-api';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [DrawerBodyComponent, DrawerNavGroupComponent, DrawerNavItemComponent],
    imports: [CommonModule, MatListModule, InfoListItemModule, MatDividerModule],
    exports: [DrawerBodyComponent, DrawerNavGroupComponent, DrawerNavItemComponent],
})
export class DrawerBodyModule {}
