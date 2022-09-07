import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MobileStepperDocModule } from './hero-doc.module';
import { MobileStepperDocComponent } from './hero-doc.component';

describe('HeroDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [MobileStepperDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(MobileStepperDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
