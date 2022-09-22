import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SpacerDocModule } from './spacer-doc.module';
import { SpacerDocComponent } from './spacer-doc.component';

describe('SpacerDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [SpacerDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(SpacerDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
