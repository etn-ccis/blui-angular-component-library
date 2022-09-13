import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_NAV_ITEMS, COMPONENT_NAV_ITEMS, DRAWER_NAV_ITEMS } from './navigation/nav-items';
import { HomeComponent } from './pages/home/home.component';
import { ListItemTagDocComponent } from './pages/component-docs/components/list-item-tag/list-item-tag-doc.component';
import { DrawerNavItemDocComponent } from './pages/component-docs/components/drawer/drawer-nav-item/drawer-nav-item-doc.component';
import { DrawerNavGroupDocComponent } from './pages/component-docs/components/drawer/drawer-nav-group/drawer-nav-group-doc.component';
import { DrawerFooterDocComponent } from './pages/component-docs/components/drawer/drawer-footer/drawer-footer-doc.component';
import { DrawerHeaderDocComponent } from './pages/component-docs/components/drawer/drawer-header/drawer-header-doc.component';
import { DrawerBodyDocComponent } from './pages/component-docs/components/drawer/drawer-body/drawer-body-doc.component';
import { DrawerSubheaderDocComponent } from './pages/component-docs/components/drawer/drawer-subheader/drawer-subheader-doc.component';
import { DrawerDocComponent } from './pages/component-docs/components/drawer/drawer/drawer-doc.component';
import { DrawerLayoutDocComponent } from './pages/component-docs/components/drawer/drawer-layout/drawer-layout-doc.component';
import { AppBarDocComponent } from './pages/component-docs/components/app-bar/app-bar-doc.component';
import { HeroDocComponent } from './pages/component-docs/components/hero/hero-doc.component';
import { MobileStepperDocComponent } from './pages/component-docs/components/mobile-stepper/mobile-stepper-doc.component';
import { ChannelValueDocComponent } from './pages/component-docs/components/channel-value/channel-value-doc.component';
import { EmptyStateDocComponent } from './pages/component-docs/components/empty-state/empty-state-doc.component';
import { InfoListItemDocComponent } from './pages/component-docs/components/info-list-item/info-list-item-doc.component';
import { UserMenuDocComponent } from './pages/component-docs/components/user-menu/user-menu-doc.component';

const routes: Routes = [
    { path: '', redirectTo: APP_NAV_ITEMS.home.route, pathMatch: 'full' },
    { path: APP_NAV_ITEMS.home.route, component: HomeComponent },
    { path: `${COMPONENT_NAV_ITEMS.appBar.route}/:tab`, component: AppBarDocComponent },
    { path: `${COMPONENT_NAV_ITEMS.channelValue.route}/:tab`, component: ChannelValueDocComponent },
    { path: `${COMPONENT_NAV_ITEMS.hero.route}/:tab`, component: HeroDocComponent },
    { path: `${COMPONENT_NAV_ITEMS.listItemTag.route}/:tab`, component: ListItemTagDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerLayout.route}/:tab`, component: DrawerLayoutDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerDrawer.route}/:tab`, component: DrawerDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerHeader.route}/:tab`, component: DrawerHeaderDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerSubheader.route}/:tab`, component: DrawerSubheaderDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerBody.route}/:tab`, component: DrawerBodyDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerNavGroup.route}/:tab`, component: DrawerNavGroupDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerNavItem.route}/:tab`, component: DrawerNavItemDocComponent },
    { path: `${DRAWER_NAV_ITEMS.drawerFooter.route}/:tab`, component: DrawerFooterDocComponent },
    { path: `${COMPONENT_NAV_ITEMS.emptyState.route}/:tab`, component: EmptyStateDocComponent },
    { path: `${COMPONENT_NAV_ITEMS.infoListItem.route}/:tab`, component: InfoListItemDocComponent },
    { path: `${COMPONENT_NAV_ITEMS.mobileStepper.route}/:tab`, component: MobileStepperDocComponent },
    { path: `${COMPONENT_NAV_ITEMS.userMenu.route}/:tab`, component: UserMenuDocComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
