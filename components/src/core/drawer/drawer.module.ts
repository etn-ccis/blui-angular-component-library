import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { DrawerBodyModule } from './drawer-body/drawer-body.module';
import { DrawerHeaderModule } from './drawer-header/drawer-header.module';
import { DrawerSubheaderModule } from './drawer-subheader/drawer-subheader.module';
import { DrawerFooterModule } from './drawer-footer/drawer-footer.module';
import { DrawerNavItemModule } from './drawer-nav-item/drawer-nav-item.module';
import { DrawerLayoutModule } from './drawer-layout/drawer-layout.module';

@NgModule({
    declarations: [DrawerComponent],
    imports: [
        CommonModule,
        DrawerHeaderModule,
        DrawerSubheaderModule,
        DrawerBodyModule,
        DrawerFooterModule,
        DrawerNavItemModule,
        DrawerLayoutModule,
    ],
    exports: [
        DrawerComponent,
        DrawerHeaderModule,
        DrawerSubheaderModule,
        DrawerBodyModule,
        DrawerFooterModule,
        DrawerNavItemModule,
        DrawerLayoutModule,
    ],
})
export class DrawerModule {}
