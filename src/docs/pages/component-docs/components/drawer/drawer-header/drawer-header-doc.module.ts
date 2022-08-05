import { NgModule } from '@angular/core';
import { DrawerModule, ListItemTagModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerHeaderDocComponent } from './drawer-header-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { WithCustomContentComponent } from './examples/with-custom-content.component';
import { WithSubtitleComponent } from './examples/with-subtitle.component';
import { WithIconComponent } from './examples/with-icon.component';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [
        DrawerHeaderDocComponent,
        BasicExampleComponent,
        WithCustomContentComponent,
        WithSubtitleComponent,
        WithIconComponent,
        PlaygroundComponent,
    ],
    imports: [DrawerModule, SharedCompDocsModule, ListItemTagModule],
    exports: [DrawerHeaderDocComponent],
})
export class DrawerHeaderDocModule {}
