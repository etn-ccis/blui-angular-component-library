import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerNavItemDocComponent } from './drawer-nav-item-doc.component';

@NgModule({
    declarations: [DrawerNavItemDocComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerNavItemDocComponent],
})
export class DrawerNavItemDocModule {}
