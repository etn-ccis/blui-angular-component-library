import { NgModule } from '@angular/core';
import { ChannelValueComponent } from './channel-value.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [ChannelValueComponent],
  imports: [
    CommonModule
  ],
  exports: [ChannelValueComponent]
})
export class ChannelValueModule { }
