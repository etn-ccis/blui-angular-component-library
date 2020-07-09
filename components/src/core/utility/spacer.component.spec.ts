import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpacerComponent, SpacerModule } from './spacer.module';

describe('SpacerComponent', () => {
    let component: SpacerComponent;
    let fixture: ComponentFixture<SpacerComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [SpacerModule],
        }).compileComponents();
        fixture = TestBed.createComponent(SpacerComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should have a default flex value of 1', () => {
        fixture.detectChanges();
        void expect(component.flex).toBe(1);
        void expect(component.grow).toBe('1 1 0px');
    });
});
