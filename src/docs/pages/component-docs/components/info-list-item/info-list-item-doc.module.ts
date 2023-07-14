import { NgModule } from '@angular/core';
import { ChannelValueModule, InfoListItemModule } from 'src/lib/core';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { BasicExampleComponent } from './examples/basic.component';
import { MatIconModule } from '@angular/material/icon';
import { InfoListItemDocComponent } from './info-list-item-doc.component';
import { WithSubtitleComponent } from './examples/with-subtitle.component';
import { WithIconComponent } from './examples/with-icon.component';
import { WithStatusComponent } from './examples/with-status.component';
import { WithinListComponent } from './examples/within-list.component';
import { PlaygroundComponent } from './examples/playground.component';
import { DenseComponent } from './examples/dense.component';
import { WithLeftRightContentComponent } from './examples/with-left-right-content.component';

@NgModule({
    declarations: [
        InfoListItemDocComponent,
        BasicExampleComponent,
        WithSubtitleComponent,
        WithIconComponent,
        WithStatusComponent,
        WithLeftRightContentComponent,
        WithinListComponent,
        PlaygroundComponent,
        DenseComponent,
    ],
    imports: [InfoListItemModule, ChannelValueModule, SharedCompDocsModule, MatIconModule],
    exports: [InfoListItemDocComponent],
})
export class InfoListItemDocModule {}
