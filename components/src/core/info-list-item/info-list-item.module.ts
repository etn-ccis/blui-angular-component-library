import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { InfoListItemComponent } from './info-list-item.component';
import {SpacerModule} from "../utility/spacer.module";

@NgModule({
  declarations: [InfoListItemComponent],
  imports: [
     SpacerModule,
     MatIconModule,
     MatCardModule,
     CommonModule,
     MatListModule,
  ],
  exports: [InfoListItemComponent, MatIconModule, MatCardModule, MatListModule, SpacerModule]
})
export class InfoListItemModule { }
