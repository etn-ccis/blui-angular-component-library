import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerBodyComponent } from './drawer-body.component';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';
import { InfoListItemModule } from '../../info-list-item/public-api';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [DrawerBodyComponent, DrawerNavGroupComponent],
    imports: [CommonModule, InfoListItemModule, MatDividerModule],
    exports: [DrawerBodyComponent, DrawerNavGroupComponent],
})
export class DrawerBodyModule {}
