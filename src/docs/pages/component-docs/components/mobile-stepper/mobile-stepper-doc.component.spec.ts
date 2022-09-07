import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MobileStepperDocModule } from './mobile-stepper-doc.module';
import { MobileStepperDocComponent } from './mobile-stepper-doc.component';

describe('MobileStepperDoc', () => {
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
