import { NgModule } from '@angular/core';
import { ListItemTagDocComponent } from './list-item-tag-doc.component';
import { BasicExample } from './examples/basic.component';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { ChannelValueModule, InfoListItemModule, ListItemTagModule } from '@brightlayer-ui/angular-components';
import { ComplexExample } from './examples/complex.component';

@NgModule({
    declarations: [ListItemTagDocComponent, BasicExample, ComplexExample],
    imports: [SharedCompDocsModule, ListItemTagModule, ChannelValueModule, InfoListItemModule],
    exports: [ListItemTagDocComponent, BasicExample, ComplexExample],
})
export class ListItemTagDocModule {}
