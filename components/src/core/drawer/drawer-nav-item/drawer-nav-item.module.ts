import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavItemComponent } from './drawer-nav-item.component';
import { InfoListItemModule } from '../../info-list-item/public-api';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [DrawerNavItemComponent],
    imports: [CommonModule, InfoListItemModule, MatIconModule],
    exports: [DrawerNavItemComponent],
})
export class DrawerNavItemModule {}
