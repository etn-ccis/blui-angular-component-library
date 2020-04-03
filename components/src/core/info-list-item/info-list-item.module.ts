import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListItemComponent } from './info-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [InfoListItemComponent],
  imports: [
    NgModule,
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [InfoListItemComponent]
})
export class InfoListItemModule { }
