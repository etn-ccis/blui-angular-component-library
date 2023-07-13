import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { DrawerSubheaderDocComponent } from './drawer-subheader-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { ComplexComponent } from './examples/complex.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { PlaygroundComponent } from './examples/playground.component';

@NgModule({
    declarations: [DrawerSubheaderDocComponent, BasicExampleComponent, ComplexComponent, PlaygroundComponent],
    imports: [DrawerModule, SharedCompDocsModule, MatFormFieldModule, MatSelectModule],
    exports: [DrawerSubheaderDocComponent],
})
export class DrawerSubheaderDocModule {}
