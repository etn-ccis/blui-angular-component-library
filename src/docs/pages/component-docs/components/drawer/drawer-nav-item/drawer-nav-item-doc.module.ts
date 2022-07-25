import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerNavItemDocComponent } from './drawer-nav-item-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { WithIconsExampleComponent } from './examples/with-icons.component';
import { WithNestedItemsComponent } from './examples/with-nested-items.component';
import { WithSelectedItemComponent } from './examples/with-selected-item.component';

@NgModule({
    declarations: [
        DrawerNavItemDocComponent,
        WithIconsExampleComponent,
        BasicExampleComponent,
        WithNestedItemsComponent,
        WithSelectedItemComponent,
    ],
    imports: [DrawerModule, SharedCompDocsModule],
})
export class DrawerNavItemDocModule {}
