import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerNavGroupDocComponent } from './drawer-nav-group-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { MultipleGroupsComponent } from './examples/multiple-groups.component';
import { WithSpacerComponent } from './examples/with-spacer.component';
import {PlaygroundComponent} from "./examples/playground.component";

@NgModule({
    declarations: [DrawerNavGroupDocComponent, BasicExampleComponent, MultipleGroupsComponent, WithSpacerComponent, PlaygroundComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerNavGroupDocComponent],
})
export class DrawerNavGroupDocModule {}
