import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerNavItemComponent } from './drawer-nav-item.component';
import { InfoListItemModule } from '../../info-list-item/public-api';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule, MatRippleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [DrawerNavItemComponent],
    imports: [
        CommonModule,
        InfoListItemModule,
        MatIconModule,
        MatDividerModule,
        BrowserAnimationsModule,
        MatRippleModule,
    ],
    exports: [DrawerNavItemComponent],
})
export class DrawerNavItemModule {}