import { NgModule } from '@angular/core';
import { DrawerModule } from 'src/lib/core';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerFooterDocComponent } from './drawer-footer-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { ComplexExampleComponent } from './examples/complex.component';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [DrawerFooterDocComponent, BasicExampleComponent, ComplexExampleComponent, PlaygroundComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerFooterDocComponent],
})
export class DrawerFooterDocModule {}
