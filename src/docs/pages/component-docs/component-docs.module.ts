import { NgModule } from '@angular/core';
import { SharedCompDocsModule } from './shared/shared-comp-docs.module';
import { EmptyStateDocModule } from './components/empty-state/empty-state-doc.module';
import { ListItemTagDocModule } from './components/list-item-tag/list-item-tag-doc.module';
import { DrawerNavItemDocModule } from './components/drawer/drawer-nav-item/drawer-nav-item-doc.module';
import { DrawerNavGroupDocModule } from './components/drawer/drawer-nav-group/drawer-nav-group-doc.module';
import { DrawerFooterDocModule } from './components/drawer/drawer-footer/drawer-footer-doc.module';
import { DrawerHeaderDocModule } from './components/drawer/drawer-header/drawer-header-doc.module';
import { DrawerBodyDocModule } from './components/drawer/drawer-body/drawer-body-doc.module';
import { DrawerSubheaderDocModule } from './components/drawer/drawer-subheader/drawer-subheader-doc.module';
import { DrawerDocModule } from './components/drawer/drawer/drawer-doc.module';
import { DrawerLayoutDocModule } from './components/drawer/drawer-layout/drawer-layout-doc.module';
import { AppBarDocModule } from './components/app-bar/app-bar-doc.module';
import { HeroDocModule } from './components/hero/hero-doc.module';
import { MobileStepperDocModule } from './components/mobile-stepper/mobile-stepper-doc.module';
import { ChannelValueDocModule } from './components/channel-value/channel-value-doc.module';

@NgModule({
    exports: [
        AppBarDocModule,
        ChannelValueDocModule,
        DrawerHeaderDocModule,
        DrawerFooterDocModule,
        DrawerNavGroupDocModule,
        DrawerNavItemDocModule,
        DrawerLayoutDocModule,
        DrawerBodyDocModule,
        DrawerSubheaderDocModule,
        DrawerDocModule,
        EmptyStateDocModule,
        HeroDocModule,
        ListItemTagDocModule,
        MobileStepperDocModule,
        SharedCompDocsModule,
    ],
})
export class ComponentDocsModule {}
