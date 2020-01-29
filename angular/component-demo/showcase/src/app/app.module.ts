import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { HeroModule } from '@pxblue/angular-components';
import { ChannelValueModule } from '@pxblue/angular-components';
import { EmptyStateModule } from '@pxblue/angular-components';

//material modules
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
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
