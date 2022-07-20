import { NgModule } from '@angular/core';
import { EmptyStateModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { EmptyStateDocComponent } from './empty-state-doc.component';

@NgModule({
    declarations: [EmptyStateDocComponent],
    imports: [EmptyStateModule, SharedCompDocsModule],
    exports: [EmptyStateDocComponent],
})
export class EmptyStateDocModule {}
