import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ScoreCardComponent} from "./scorecard.component";

describe('ScoreCardComponent', () => {
    let component: ScoreCardComponent;
    let fixture: ComponentFixture<ScoreCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScoreCardComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScoreCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
