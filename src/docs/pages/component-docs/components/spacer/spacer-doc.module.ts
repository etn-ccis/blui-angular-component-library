import { NgModule } from '@angular/core';
import { SpacerModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SpacerDocComponent } from './spacer-doc.component';
import { FlexComponent } from './examples/flex.component';
import { PixelComponent } from './examples/pixel.component';

@NgModule({
    declarations: [SpacerDocComponent, FlexComponent, PixelComponent],
    imports: [SpacerModule, SharedCompDocsModule, MatIconModule, RouterModule],
    exports: [SpacerDocComponent],
})
export class SpacerDocModule {}
