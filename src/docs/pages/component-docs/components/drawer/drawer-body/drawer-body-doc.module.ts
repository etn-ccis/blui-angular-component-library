import { NgModule } from '@angular/core';
import { DrawerModule } from 'src/lib/core';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerBodyDocComponent } from './drawer-body-doc.component';

@NgModule({
    declarations: [DrawerBodyDocComponent],
    imports: [DrawerModule, SharedCompDocsModule],
    exports: [DrawerBodyDocComponent],
})
export class DrawerBodyDocModule {}
