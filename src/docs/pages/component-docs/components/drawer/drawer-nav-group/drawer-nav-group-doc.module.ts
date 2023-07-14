import { NgModule } from '@angular/core';
import { DrawerModule, ListItemTagModule } from 'src/lib/core';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerNavGroupDocComponent } from './drawer-nav-group-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { MultipleGroupsComponent } from './examples/multiple-groups.component';
import { WithSpacerComponent } from './examples/with-spacer.component';
import { PlaygroundComponent } from './examples/playground.component';
import { WithCustomContentComponent } from './examples/with-custom-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DrawerNavGroupDocComponent,
        BasicExampleComponent,
        WithCustomContentComponent,
        MultipleGroupsComponent,
        WithSpacerComponent,
        PlaygroundComponent,
    ],
    imports: [DrawerModule, ListItemTagModule, SharedCompDocsModule, RouterModule],
    exports: [DrawerNavGroupDocComponent],
})
export class DrawerNavGroupDocModule {}
