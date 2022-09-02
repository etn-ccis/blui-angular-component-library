import { NgModule } from '@angular/core';
import {AppBarModule, ThreeLinerModule} from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { BasicAppBarComponent } from './examples/basic.component';
import { AppBarDocComponent } from './app-bar-doc.component';
import {ThreeLinerComponent} from "./examples/three-liner.component";

@NgModule({
    declarations: [AppBarDocComponent, BasicAppBarComponent, ThreeLinerComponent],
    imports: [AppBarModule, ThreeLinerModule, SharedCompDocsModule],
    exports: [AppBarDocComponent],
})
export class AppBarDocModule {}
