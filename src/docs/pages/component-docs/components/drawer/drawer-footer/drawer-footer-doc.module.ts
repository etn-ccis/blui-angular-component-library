import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerFooterDocComponent } from './drawer-footer-doc.component';
import { BasicExampleComponent } from './examples/basic.component';

@NgModule({
    declarations: [DrawerFooterDocComponent, BasicExampleComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerFooterDocComponent],
})
export class DrawerFooterDocModule {}
