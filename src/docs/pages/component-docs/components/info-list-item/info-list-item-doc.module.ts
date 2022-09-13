import { NgModule } from '@angular/core';
import { ChannelValueModule, InfoListItemModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { BasicExampleComponent } from './examples/basic.component';
import { MatIconModule } from '@angular/material/icon';
import { InfoListItemDocComponent } from './info-list-item-doc.component';
import { WithSubtitleComponent } from './examples/with-subtitle.component';
import { WithIconComponent } from './examples/with-icon.component';
import { WithStatusComponent } from './examples/with-status.component';
import { WithLeftContentComponent } from './examples/with-left-content.component';
import { WithRightContentComponent } from './examples/with-right-content.component';
import { WithinListComponent } from './examples/within-list.component';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [
        InfoListItemDocComponent,
        BasicExampleComponent,
        WithSubtitleComponent,
        WithIconComponent,
        WithStatusComponent,
        WithLeftContentComponent,
        WithRightContentComponent,
        WithinListComponent,
        PlaygroundComponent,
    ],
    imports: [InfoListItemModule, ChannelValueModule, SharedCompDocsModule, MatIconModule],
    exports: [InfoListItemDocComponent],
})
export class InfoListItemDocModule {}
