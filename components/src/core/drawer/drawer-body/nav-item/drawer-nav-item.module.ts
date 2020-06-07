import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavItemComponent } from './drawer-nav-item.component';
import { InfoListItemModule } from '../../../info-list-item/public-api';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [DrawerNavItemComponent],
    imports: [CommonModule, InfoListItemModule, MatIconModule, MatDividerModule, MatRippleModule, MatExpansionModule],
    exports: [DrawerNavItemComponent],
})
export class DrawerNavItemModule {}
