import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerHeaderDocComponent } from './drawer-header-doc.component';

@NgModule({
    declarations: [DrawerHeaderDocComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerHeaderDocComponent],
})
export class DrawerHeaderDocModule {}
