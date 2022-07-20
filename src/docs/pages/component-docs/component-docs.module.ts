import { NgModule } from '@angular/core';
import { SharedCompDocsModule } from './shared/shared-comp-docs.module';
import { EmptyStateDocModule } from './components/empty-state/empty-state-doc.module';
import { ListItemTagDocModule } from './components/list-item-tag/list-item-tag-doc.module';

@NgModule({
    imports: [SharedCompDocsModule, EmptyStateDocModule, ListItemTagDocModule],
    exports: [SharedCompDocsModule, EmptyStateDocModule, ListItemTagDocModule],
})
export class ComponentDocsModule {}
