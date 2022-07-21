import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerFooterDocComponent } from './drawer-footer-doc.component';

@NgModule({
    declarations: [DrawerFooterDocComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerFooterDocComponent],
})
export class DrawerFooterDocModule {}
