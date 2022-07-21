import { NgModule } from '@angular/core';
import { SharedCompDocsModule } from './shared/shared-comp-docs.module';
import { EmptyStateDocModule } from './components/empty-state/empty-state-doc.module';
import { ListItemTagDocModule } from './components/list-item-tag/list-item-tag-doc.module';
import { DrawerNavItemDocModule } from './components/drawer/drawer-nav-item/drawer-nav-item-doc.module';

@NgModule({
    imports: [SharedCompDocsModule, EmptyStateDocModule, ListItemTagDocModule, DrawerNavItemDocModule],
    exports: [SharedCompDocsModule, EmptyStateDocModule, ListItemTagDocModule, DrawerNavItemDocModule],
})
export class ComponentDocsModule {}
