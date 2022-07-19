import { NgModule } from '@angular/core';
import { PxbLogoComponent } from './pxb-logo/pxb-logo.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CommonModule } from '@angular/common';
import { EmptyStateModule } from '@brightlayer-ui/angular-components';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PxbLogoComponent, ComingSoonComponent],
    imports: [CommonModule, EmptyStateModule, MatIconModule],
    exports: [PxbLogoComponent, ComingSoonComponent],
})
export class AppCommonComponentsModule {}
