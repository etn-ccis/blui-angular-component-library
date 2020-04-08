import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemTagComponent } from './list-item-tag.component';

describe('ListItemTagComponent', () => {
  let component: ListItemTagComponent;
  let fixture: ComponentFixture<ListItemTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
