import { ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { DotStepperModule } from './dot-stepper.module';
import { Component } from '@angular/core';

@Component({
    template: `
        <pxb-dot-stepper [steps]="4" [activeStepId]="0"></pxb-dot-stepper>
    `,
})
class TestDotStepper {}

describe('DotStepperComponent', () => {
    let component: TestDotStepper;
    let fixture: ComponentFixture<TestDotStepper>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestDotStepper],
            imports: [DotStepperModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestDotStepper);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render the correct number of steps', () => {
        fixture.detectChanges();
        const dots = fixture.nativeElement.querySelectorAll('.pxb-dot-stepper-dot');
        void expect(dots.length).toBe(4);
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = ['.pxb-dot-stepper', '.pxb-dot-stepper-active'];
        for (const className of classList) {
            count(fixture, className);
        }
        count(fixture, '.pxb-dot-stepper-dot', 4);
    });
});
