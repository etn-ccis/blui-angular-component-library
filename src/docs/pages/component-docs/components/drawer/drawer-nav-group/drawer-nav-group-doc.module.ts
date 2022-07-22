import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerNavGroupDocComponent } from './drawer-nav-group-doc.component';

@NgModule({
    declarations: [DrawerNavGroupDocComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerNavGroupDocComponent],
})
export class DrawerNavGroupDocModule {}
