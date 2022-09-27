import { NgModule } from '@angular/core';
import { ListItemTagDocComponent } from './list-item-tag-doc.component';
import { BasicExample } from './examples/basic.component';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { ChannelValueModule, InfoListItemModule, ListItemTagModule } from '@brightlayer-ui/angular-components';
import { ComplexExample } from './examples/complex.component';
import { RouterModule } from '@angular/router';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [ListItemTagDocComponent, BasicExample, ComplexExample, PlaygroundComponent],
    imports: [SharedCompDocsModule, ListItemTagModule, ChannelValueModule, InfoListItemModule, RouterModule],
    exports: [ListItemTagDocComponent],
})
export class ListItemTagDocModule {}
