import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerNavItemDocComponent } from './drawer-nav-item-doc.component';
import {BasicExampleComponent} from "./examples/basic.component";
import {WithIconsExampleComponent} from "./examples/with-icons.component";

@NgModule({
    declarations: [
        DrawerNavItemDocComponent,
        WithIconsExampleComponent,
        BasicExampleComponent
    ],
    imports: [DrawerModule, SharedCompDocsModule]
})
export class DrawerNavItemDocModule {}
