import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoListItemComponent } from './info-list-item.component';

describe('InfoListItemComponent', () => {
  let component: InfoListItemComponent;
  let fixture: ComponentFixture<InfoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
