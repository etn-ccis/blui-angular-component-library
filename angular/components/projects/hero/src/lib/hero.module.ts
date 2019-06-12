import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { ChannelValueModule } from '@pxblue/angular-components/core/channel-value';
import { CommonModule } from '@angular/common';  
import { MatDividerModule } from '@angular/material';



@NgModule({
  declarations: [HeroComponent, HeroBannerComponent ],
  imports: [
    MatDividerModule,
    ChannelValueModule,
    CommonModule
    
  ],
  exports: [HeroComponent, HeroBannerComponent]
})
export class HeroModule { }
