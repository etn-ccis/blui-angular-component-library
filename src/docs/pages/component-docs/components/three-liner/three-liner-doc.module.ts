import { NgModule } from '@angular/core';
import { BasicExample } from './examples/basic.component';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { ThreeLinerModule, ToolbarMenuModule } from '@brightlayer-ui/angular-components';
import { ComplexExample } from './examples/complex.component';
import { ThreeLinerDocComponent } from './three-liner-doc.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PlaygroundComponent } from './examples/playground.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

@NgModule({
    declarations: [ThreeLinerDocComponent, BasicExample, ComplexExample, PlaygroundComponent],
    imports: [
        SharedCompDocsModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        ThreeLinerModule,
        RouterModule,
        ToolbarMenuModule,
    ],
    exports: [ThreeLinerDocComponent],
})
export class ThreeLinerDocModule {}
