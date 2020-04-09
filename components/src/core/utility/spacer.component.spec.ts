import { ComponentFixture, TestBed } from '@angular/core/testing';
import {SpacerComponent, SpacerModule} from "./spacer.module";

describe('SpacerComponent', () => {
    let component: SpacerComponent;
    let fixture: ComponentFixture<SpacerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SpacerModule],
        }).compileComponents();
        fixture = TestBed.createComponent(SpacerComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
