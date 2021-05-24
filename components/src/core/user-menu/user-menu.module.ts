import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { InfoListItemModule } from '../info-list-item/info-list-item.module';
import { UserMenuAvatarComponent } from './user-menu-avatar.component';
import { DrawerHeaderModule } from '../drawer/drawer-header/drawer-header.module';
import { MatCardModule } from '@angular/material/card';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";

@NgModule({
    declarations: [UserMenuComponent, UserMenuAvatarComponent],
    imports: [CommonModule, DrawerHeaderModule, InfoListItemModule, OverlayModule, MatBottomSheetModule, MatCardModule ],
    exports: [UserMenuComponent, UserMenuAvatarComponent],
})
export class UserMenuModule {}
