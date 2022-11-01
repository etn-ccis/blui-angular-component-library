import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { COMPONENT_NAV_ITEMS, DRAWER_NAV_ITEMS } from './navigation/nav-items';
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
import { ChannelValueDocComponent } from './pages/component-docs/components/channel-value/channel-value-doc.component';
import { EmptyStateDocComponent } from './pages/component-docs/components/empty-state/empty-state-doc.component';
import { InfoListItemDocComponent } from './pages/component-docs/components/info-list-item/info-list-item-doc.component';
import { UserMenuDocComponent } from './pages/component-docs/components/user-menu/user-menu-doc.component';
import { MobileStepperDocComponent } from './pages/component-docs/components/mobile-stepper/mobile-stepper-doc.component';
import { SpacerDocComponent } from './pages/component-docs/components/spacer/spacer-doc.component';
import { ThreeLinerDocComponent } from './pages/component-docs/components/three-liner/three-liner-doc.component';
import { ScoreCardDocComponent } from './pages/component-docs/components/score-card/score-card-doc.component';
import { ToolbarMenuDocComponent } from './pages/component-docs/components/toolbar-menu/toolbar-menu-doc.component';

const routes: Routes = [
    { path: '', redirectTo: `${COMPONENT_NAV_ITEMS.appBar.route}/examples`, pathMatch: 'full' },

    { path: `${COMPONENT_NAV_ITEMS.appBar.route}`, redirectTo: `${COMPONENT_NAV_ITEMS.appBar.route}/examples` },
    { path: `${COMPONENT_NAV_ITEMS.appBar.route}/:tab`, component: AppBarDocComponent },

    {
        path: `${COMPONENT_NAV_ITEMS.channelValue.route}`,
        redirectTo: `${COMPONENT_NAV_ITEMS.channelValue.route}/examples`,
    },
    { path: `${COMPONENT_NAV_ITEMS.channelValue.route}/:tab`, component: ChannelValueDocComponent },

    { path: `${COMPONENT_NAV_ITEMS.hero.route}`, redirectTo: `${COMPONENT_NAV_ITEMS.hero.route}/examples` },
    { path: `${COMPONENT_NAV_ITEMS.hero.route}/:tab`, component: HeroDocComponent },

    {
        path: `${COMPONENT_NAV_ITEMS.listItemTag.route}`,
        redirectTo: `${COMPONENT_NAV_ITEMS.listItemTag.route}/examples`,
    },
    { path: `${COMPONENT_NAV_ITEMS.listItemTag.route}/:tab`, component: ListItemTagDocComponent },

    { path: `${DRAWER_NAV_ITEMS.drawerLayout.route}`, redirectTo: `${DRAWER_NAV_ITEMS.drawerLayout.route}/examples` },
    { path: `${DRAWER_NAV_ITEMS.drawerLayout.route}/:tab`, component: DrawerLayoutDocComponent },

    { path: `${DRAWER_NAV_ITEMS.drawerHeader.route}`, redirectTo: `${DRAWER_NAV_ITEMS.drawerHeader.route}/examples` },
    { path: `${DRAWER_NAV_ITEMS.drawerHeader.route}/:tab`, component: DrawerHeaderDocComponent },

    {
        path: `${DRAWER_NAV_ITEMS.drawerSubheader.route}`,
        redirectTo: `${DRAWER_NAV_ITEMS.drawerSubheader.route}/examples`,
    },
    { path: `${DRAWER_NAV_ITEMS.drawerSubheader.route}/:tab`, component: DrawerSubheaderDocComponent },

    { path: `${DRAWER_NAV_ITEMS.drawerBody.route}`, redirectTo: `${DRAWER_NAV_ITEMS.drawerBody.route}/examples` },
    { path: `${DRAWER_NAV_ITEMS.drawerBody.route}/:tab`, component: DrawerBodyDocComponent },

    {
        path: `${DRAWER_NAV_ITEMS.drawerNavGroup.route}`,
        redirectTo: `${DRAWER_NAV_ITEMS.drawerNavGroup.route}/examples`,
    },
    { path: `${DRAWER_NAV_ITEMS.drawerNavGroup.route}/:tab`, component: DrawerNavGroupDocComponent },

    { path: `${DRAWER_NAV_ITEMS.drawerNavItem.route}`, redirectTo: `${DRAWER_NAV_ITEMS.drawerNavItem.route}/examples` },
    { path: `${DRAWER_NAV_ITEMS.drawerNavItem.route}/:tab`, component: DrawerNavItemDocComponent },

    { path: `${DRAWER_NAV_ITEMS.drawerFooter.route}`, redirectTo: `${DRAWER_NAV_ITEMS.drawerFooter.route}/examples` },
    { path: `${DRAWER_NAV_ITEMS.drawerFooter.route}/:tab`, component: DrawerFooterDocComponent },

    { path: `${DRAWER_NAV_ITEMS.drawerDrawer.route}`, redirectTo: `${DRAWER_NAV_ITEMS.drawerDrawer.route}/examples` },
    { path: `${DRAWER_NAV_ITEMS.drawerDrawer.route}/:tab`, component: DrawerDocComponent },

    { path: `${COMPONENT_NAV_ITEMS.emptyState.route}`, redirectTo: `${COMPONENT_NAV_ITEMS.emptyState.route}/examples` },
    { path: `${COMPONENT_NAV_ITEMS.emptyState.route}/:tab`, component: EmptyStateDocComponent },

    {
        path: `${COMPONENT_NAV_ITEMS.infoListItem.route}`,
        redirectTo: `${COMPONENT_NAV_ITEMS.infoListItem.route}/examples`,
    },
    { path: `${COMPONENT_NAV_ITEMS.infoListItem.route}/:tab`, component: InfoListItemDocComponent },

    {
        path: `${COMPONENT_NAV_ITEMS.mobileStepper.route}`,
        redirectTo: `${COMPONENT_NAV_ITEMS.mobileStepper.route}/examples`,
    },
    { path: `${COMPONENT_NAV_ITEMS.mobileStepper.route}/:tab`, component: MobileStepperDocComponent },

    { path: `${COMPONENT_NAV_ITEMS.threeLiner.route}`, redirectTo: `${COMPONENT_NAV_ITEMS.threeLiner.route}/examples` },
    { path: `${COMPONENT_NAV_ITEMS.threeLiner.route}/:tab`, component: ThreeLinerDocComponent },

    { path: `${COMPONENT_NAV_ITEMS.scoreCard.route}`, redirectTo: `${COMPONENT_NAV_ITEMS.scoreCard.route}/examples` },
    { path: `${COMPONENT_NAV_ITEMS.scoreCard.route}/:tab`, component: ScoreCardDocComponent },

    { path: `${COMPONENT_NAV_ITEMS.spacer.route}`, redirectTo: `${COMPONENT_NAV_ITEMS.spacer.route}/examples` },
    { path: `${COMPONENT_NAV_ITEMS.spacer.route}/:tab`, component: SpacerDocComponent },

    {
        path: `${COMPONENT_NAV_ITEMS.toolbarMenu.route}`,
        redirectTo: `${COMPONENT_NAV_ITEMS.toolbarMenu.route}/examples`,
    },
    { path: `${COMPONENT_NAV_ITEMS.toolbarMenu.route}/:tab`, component: ToolbarMenuDocComponent },

    { path: `${COMPONENT_NAV_ITEMS.userMenu.route}`, redirectTo: `${COMPONENT_NAV_ITEMS.userMenu.route}/examples` },
    { path: `${COMPONENT_NAV_ITEMS.userMenu.route}/:tab`, component: UserMenuDocComponent },
    { path: '**', redirectTo: `${COMPONENT_NAV_ITEMS.appBar.route}/examples`, pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
