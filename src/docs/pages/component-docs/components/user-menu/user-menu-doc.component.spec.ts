import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserMenuDocModule } from './user-menu-doc.module';
import { UserMenuDocComponent } from './user-menu-doc.component';

describe('UserMenuComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [UserMenuDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(UserMenuDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
