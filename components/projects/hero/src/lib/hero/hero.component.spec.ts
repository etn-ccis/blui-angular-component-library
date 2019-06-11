import { TestBed, async} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
 
  MatCardModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import { HeroComponent } from '../hero/hero.component';

describe('HeroComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent
      ],
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));


  it(`Div element should have class as 'wrapper'`, () => {
    const fixture = TestBed.createComponent(HeroComponent);
    const heroComponent = fixture.debugElement;
    const wrapperDiv: HTMLElement = heroComponent.query(By.css('div')).nativeElement;
    expect(wrapperDiv.getAttribute('class')).toEqual('wrapper');
  });
  it(`H5 element should have class as 'label'`, () => {
    const fixture = TestBed.createComponent(HeroComponent);
    const heroComponent = fixture.debugElement;
    const labelEle: HTMLElement = heroComponent.query(By.css('h5')).nativeElement;
    expect(labelEle.getAttribute('class')).toEqual('label');
  });

});