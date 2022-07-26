import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerSubheaderDocComponent } from './drawer-subheader-doc.component';

@NgModule({
    declarations: [DrawerSubheaderDocComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerSubheaderDocComponent],
})
export class DrawerSubheaderDocModule {}
