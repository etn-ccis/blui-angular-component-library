import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroBannerComponent, HeroComponent } from '../../../hero/src/public_api';
import { ChannelValueComponent } from '../../../channel-value/src/public_api';

//pxblue modules
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';


import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card'; 



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Hero-Component'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Hero-Component');
  // });
});
