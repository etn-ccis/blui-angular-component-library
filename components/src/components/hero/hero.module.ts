import { NgModule } from '@angular/core';
import {ChannelValueModule} from "../channel-value/public-api";
import { HeroComponent } from './hero.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    MatDividerModule,
    ChannelValueModule,
    CommonModule
  ],
  exports: [HeroComponent]
})
export class HeroModule { }
