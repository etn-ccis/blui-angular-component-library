import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ThreeLinerDocModule } from './three-liner-doc.module';
import { ThreeLinerDocComponent } from './three-liner-doc.component';

describe('ThreeLinerDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [ThreeLinerDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ThreeLinerDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
