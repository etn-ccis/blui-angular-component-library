import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMenuModule } from './user-menu.module';
import { UserMenuComponent } from './user-menu.component';

describe('ScoreCardComponent', () => {
    let component: UserMenuComponent;
    let fixture: ComponentFixture<UserMenuComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [UserMenuModule],
        }).compileComponents();
        fixture = TestBed.createComponent(UserMenuComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });
});
