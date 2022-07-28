import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerSubheaderDocComponent } from './drawer-subheader-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { ComplexComponent } from './examples/complex.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [DrawerSubheaderDocComponent, BasicExampleComponent, ComplexComponent],
    imports: [DrawerModule, SharedCompDocsModule, MatFormFieldModule, MatSelectModule],
    exports: [DrawerSubheaderDocComponent],
})
export class DrawerSubheaderDocModule {}
