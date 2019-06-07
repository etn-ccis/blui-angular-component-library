import { TestBed, async} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatBottomSheetModule,
  MatBottomSheet
} from '@angular/material';
import { HeroComponent } from '../hero/hero.component';

fdescribe('HeroComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent
      ],
      imports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatBottomSheetModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

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
  it(`H5 element should have class as 'label'`, () => {
    const fixture = TestBed.createComponent(HeroComponent);
    const heroComponent = fixture.debugElement;
    const iconEle: HTMLElement = heroComponent.query(By.css('h5')).nativeElement;
    expect(iconEle.getAttribute('class')).toEqual('label');
  });
});