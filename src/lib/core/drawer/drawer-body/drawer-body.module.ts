import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerBodyComponent } from './drawer-body.component';
import { DrawerNavGroupComponent } from './nav-group/drawer-nav-group.component';
import { InfoListItemModule } from '../../info-list-item/public-api';
import { DrawerNavGroupModule } from './nav-group/drawer-nav-group.module';
import { DrawerNavItemModule } from './nav-item/drawer-nav-item.module';

@NgModule({
    declarations: [DrawerBodyComponent],
    imports: [CommonModule, InfoListItemModule, DrawerNavGroupModule, DrawerNavItemModule],
    exports: [
        DrawerBodyComponent,
        DrawerNavGroupComponent,
        InfoListItemModule,
        DrawerNavGroupModule,
        DrawerNavItemModule,
    ],
})
export class DrawerBodyModule {}
