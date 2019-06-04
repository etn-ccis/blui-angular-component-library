import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';



//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';

//material modules
import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card'; 
import { AppComponent } from './app.component';
import { HeroBannerComponent, HeroComponent } from '../../../hero/src/public_api';
import { ChannelValueComponent } from '../../../channel-value/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    HeroComponent,
    ChannelValueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    //pxblue
    NgProgressIconsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
