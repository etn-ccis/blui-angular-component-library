import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {MatDividerModule} from "@angular/material/divider";
import {HeroModule} from '../hero/hero.module';
import {HeroBannerComponent} from "./hero-banner.component";

@NgModule({
  declarations: [HeroBannerComponent],
  imports: [
     HeroModule,
     MatDividerModule,
     CommonModule,
  ],
  exports: [HeroBannerComponent, HeroModule]
})
export class HeroBannerModule { }
