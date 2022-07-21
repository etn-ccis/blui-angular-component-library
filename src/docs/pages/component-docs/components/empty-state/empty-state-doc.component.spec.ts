import { TestBed } from '@angular/core/testing';
import { EmptyStateDocModule } from './empty-state-doc.module';
import { EmptyStateDocComponent } from './empty-state-doc.component';

describe('EmptyStateDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [EmptyStateDocModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(EmptyStateDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
