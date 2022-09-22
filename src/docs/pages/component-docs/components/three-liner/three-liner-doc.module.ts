import { NgModule } from '@angular/core';
import { BasicExample } from './examples/basic.component';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { ChannelValueModule, ThreeLinerModule, ToolbarMenuModule } from '@brightlayer-ui/angular-components';
import { ComplexExample } from './examples/complex.component';
import { ThreeLinerDocComponent } from './three-liner-doc.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PlaygroundComponent } from './examples/playground.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [ThreeLinerDocComponent, BasicExample, ComplexExample, PlaygroundComponent],
    imports: [
        SharedCompDocsModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        ThreeLinerModule,
        ChannelValueModule,
        RouterModule,
        ToolbarMenuModule,
    ],
    exports: [ThreeLinerDocComponent],
})
export class ThreeLinerDocModule {}
