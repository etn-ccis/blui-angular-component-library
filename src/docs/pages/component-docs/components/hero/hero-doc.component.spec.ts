import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [HeroDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(HeroDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
