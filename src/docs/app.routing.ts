import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_NAV_ITEMS, COMPONENT_NAV_ITEMS, DRAWER_NAV_ITEMS } from './navigation/nav-items';
import { HomeComponent } from './pages/home/home.component';
import { EmptyStateDocComponent } from './pages/component-docs/components/empty-state/empty-state-doc.component';
import { ListItemTagDocComponent } from './pages/component-docs/components/list-item-tag/list-item-tag-doc.component';
import { DrawerNavItemDocComponent } from './pages/component-docs/components/drawer/drawer-nav-item/drawer-nav-item-doc.component';
import { DrawerNavGroupDocComponent } from './pages/component-docs/components/drawer/drawer-nav-group/drawer-nav-group-doc.component';
import { DrawerFooterDocComponent } from './pages/component-docs/components/drawer/drawer-footer/drawer-footer-doc.component';
import { DrawerHeaderDocComponent } from './pages/component-docs/components/drawer/drawer-header/drawer-header-doc.component';

const routes: Routes = [
    { path: '', redirectTo: APP_NAV_ITEMS.home.route, pathMatch: 'full' },
    { path: APP_NAV_ITEMS.home.route, component: HomeComponent },
    { path: COMPONENT_NAV_ITEMS.emptyState.route, component: EmptyStateDocComponent },
    { path: COMPONENT_NAV_ITEMS.listItemTag.route, component: ListItemTagDocComponent },
    { path: DRAWER_NAV_ITEMS.drawerNavItem.route, component: DrawerNavItemDocComponent },
    { path: DRAWER_NAV_ITEMS.drawerNavGroup.route, component: DrawerNavGroupDocComponent },
    { path: DRAWER_NAV_ITEMS.drawerFooter.route, component: DrawerFooterDocComponent },
    { path: DRAWER_NAV_ITEMS.drawerHeader.route, component: DrawerHeaderDocComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
