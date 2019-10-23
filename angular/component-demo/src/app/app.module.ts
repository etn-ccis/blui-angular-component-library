import {MatGridListModule} from "@angular/material/grid-list";
import {MatTabsModule} from "@angular/material/tabs";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import {SubcontentComponent} from './empty-state/subcontent.component';

//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { HeroModule } from '@pxblue/angular-components/core/hero';
import { ChannelValueModule } from '@pxblue/angular-components/core/channel-value';
import { EmptyStateModule } from '@pxblue/angular-components/core/empty-state';

//material modules
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent, SubcontentComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    //pxblue
    NgProgressIconsModule,
    ChannelValueModule,
    HeroModule,
    EmptyStateModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
