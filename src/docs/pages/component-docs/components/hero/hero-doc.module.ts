import { NgModule } from '@angular/core';
import { ChannelValueModule, HeroModule } from '@brightlayer-ui/angular-components';
import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';
import { MatIconModule } from '@angular/material/icon';
import { HeroDocComponent } from './hero-doc.component';
import { BasicExampleComponent } from './examples/basic.component';
import { ValueUnitsComponent } from './examples/value-units.component';
import { ChannelValueChildrenComponent } from './examples/channel-value-children.component';
import { IconDiffsComponent } from './examples/icon-diffs.component';
import { WithinBannerComponent } from './examples/within-banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeroDocComponent,
        BasicExampleComponent,
        IconDiffsComponent,
        ValueUnitsComponent,
        ChannelValueChildrenComponent,
        WithinBannerComponent,
    ],
    imports: [HeroModule, ChannelValueModule, SharedCompDocsModule, MatIconModule, RouterModule],
    exports: [HeroDocComponent],
})
export class HeroDocModule {}
