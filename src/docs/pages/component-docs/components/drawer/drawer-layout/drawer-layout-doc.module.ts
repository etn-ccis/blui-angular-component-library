import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';
import { PlaygroundComponent } from './examples/playground.component';
import { DrawerLayoutDocComponent } from './drawer-layout-doc.component';
import { PersistentVariantExampleComponent } from './examples/persistent.component';
import { PermanentVariantExampleComponent } from './examples/permanent.component';
import { TemporaryVariantExampleComponent } from './examples/temporary.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RailVariantExampleComponent } from './examples/rail.component';
import { RailCondensedVariantExampleComponent } from './examples/rail-condensed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        DrawerLayoutDocComponent,
        TemporaryVariantExampleComponent,
        RailVariantExampleComponent,
        PersistentVariantExampleComponent,
        PermanentVariantExampleComponent,
        PlaygroundComponent,
        RailCondensedVariantExampleComponent,
    ],
    imports: [DrawerModule, BrowserAnimationsModule, SharedCompDocsModule, MatToolbarModule],
    exports: [DrawerLayoutDocComponent],
})
export class DrawerLayoutDocModule {}
