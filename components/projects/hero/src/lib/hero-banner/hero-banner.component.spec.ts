import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from '../../../../component-demo/src/app/app.component';
import { HeroBannerComponent } from './hero-banner.component';
import { HeroComponent } from '../../public_api';
import { ChannelValueComponent } from '../../../../channel-value/src/public_api';
//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';


import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card'; 


describe('HeroBannerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeroBannerComponent, HeroComponent, ChannelValueComponent
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeroBannerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
