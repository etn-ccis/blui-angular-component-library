import {NgModule} from '@angular/core';
import {HeroModule} from '@brightlayer-ui/angular-components';
import {SharedCompDocsModule} from '../../shared/shared-comp-docs.module';
import {MatIconModule} from '@angular/material/icon';
import {HeroDocComponent} from "./hero-doc.component";

@NgModule({
    declarations: [HeroDocComponent],
    imports: [HeroModule, SharedCompDocsModule, MatIconModule],
    exports: [HeroDocComponent],
})
export class HeroDocModule {}
