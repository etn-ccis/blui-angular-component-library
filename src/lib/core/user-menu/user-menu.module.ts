import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { InfoListItemModule } from '../info-list-item/info-list-item.module';
import { UserMenuAvatarComponent } from './user-menu-avatar.component';
import { DrawerHeaderModule } from '../drawer/drawer-header/drawer-header.module';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { UserMenuHeaderComponent } from './user-menu-header/user-menu-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [UserMenuComponent, UserMenuAvatarComponent, UserMenuHeaderComponent],
    imports: [
        CommonModule,
        DrawerHeaderModule,
        InfoListItemModule,
        OverlayModule,
        MatBottomSheetModule,
        MatCardModule,
        MatToolbarModule,
    ],
    exports: [UserMenuComponent, UserMenuAvatarComponent, UserMenuHeaderComponent],
})
export class UserMenuModule {}
