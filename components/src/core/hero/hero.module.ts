import { NgModule } from '@angular/core';
import { ChannelValueModule } from '../channel-value/public_api';
import { HeroBannerComponent } from './hero-banner.component';
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material';

@NgModule({
    declarations: [HeroComponent, HeroBannerComponent],
    imports: [MatDividerModule, ChannelValueModule, CommonModule],
    exports: [HeroComponent, HeroBannerComponent],
})
export class HeroModule {}
