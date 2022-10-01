import { NgModule } from '@angular/core';
import { DrawerModule, SpacerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerDocComponent } from './drawer-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { AnatomyComponent } from './examples/anatomy.component';
import { RouterModule } from '@angular/router';
import { FromListComponent } from './examples/from-list.component';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [DrawerDocComponent, BasicExampleComponent, AnatomyComponent, FromListComponent, PlaygroundComponent],
    imports: [DrawerModule, SpacerModule, SharedCompDocsModule, RouterModule],
    exports: [DrawerDocComponent],
})
export class DrawerDocModule {}
