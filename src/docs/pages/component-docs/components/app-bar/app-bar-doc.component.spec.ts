import { TestBed } from '@angular/core/testing';
import { AppBarDocModule } from './app-bar-doc.module';
import { AppBarDocComponent } from './app-bar-doc.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppBarDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [AppBarDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppBarDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
