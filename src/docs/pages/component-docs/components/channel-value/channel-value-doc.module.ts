import { NgModule } from '@angular/core';
import { ChannelValueModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ChannelValueDocComponent } from './channel-value-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { IconComponent } from './examples/icon.component';

@NgModule({
    declarations: [ChannelValueDocComponent, BasicExampleComponent, IconComponent],
    imports: [ChannelValueModule, SharedCompDocsModule, MatIconModule, RouterModule],
    exports: [ChannelValueDocComponent],
})
export class ChannelValueDocModule {}
