import { NgModule } from '@angular/core';
import {MobileStepperModule, SpacerModule} from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { BasicExampleComponent } from './examples/basic.component';
import { RouterModule } from '@angular/router';
import {SpacerDocComponent} from "./spacer-doc.component";

@NgModule({
    declarations: [
        SpacerDocComponent,
        BasicExampleComponent,
    ],
    imports: [SpacerModule, SharedCompDocsModule, MatIconModule, RouterModule],
    exports: [SpacerDocComponent],
})
export class SpacerDocModule {}
