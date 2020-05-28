import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerBodyComponent } from './drawer-body.component';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';
import { InfoListItemModule } from '../../info-list-item/public-api';

@NgModule({
    declarations: [DrawerBodyComponent, DrawerNavGroupComponent],
    imports: [CommonModule, InfoListItemModule],
    exports: [DrawerBodyComponent, DrawerNavGroupComponent],
})
export class DrawerBodyModule {}
