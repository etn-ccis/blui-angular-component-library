import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelValueComponent } from './channel-value.component';

describe('ChannelValueComponent', () => {
  let component: ChannelValueComponent;
  let fixture: ComponentFixture<ChannelValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
