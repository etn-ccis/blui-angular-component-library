import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_NAV_ITEMS, COMPONENT_NAV_ITEMS } from './navigation/nav-items';
import { HomeComponent } from './pages/home/home.component';
import { ListItemTagDocComponent } from './pages/component-docs/list-item-tag/list-item-tag.component';
import { EmptyStateDocComponent } from './pages/component-docs/empty-state/empty-state.component';

const routes: Routes = [
    { path: '', redirectTo: APP_NAV_ITEMS.home.route, pathMatch: 'full' },
    { path: APP_NAV_ITEMS.home.route, component: HomeComponent },
    { path: COMPONENT_NAV_ITEMS.emptyState.route, component: EmptyStateDocComponent },
    { path: COMPONENT_NAV_ITEMS.listItemTag.route, component: ListItemTagDocComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}