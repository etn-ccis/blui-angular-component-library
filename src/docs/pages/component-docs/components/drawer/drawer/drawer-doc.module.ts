import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerDocComponent } from './drawer-doc.component';

@NgModule({
    declarations: [DrawerDocComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerDocComponent],
})
export class DrawerDocModule {}
