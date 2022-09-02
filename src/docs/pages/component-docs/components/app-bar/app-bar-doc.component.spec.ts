import { TestBed } from '@angular/core/testing';
import { AppBarDocModule } from './empty-state-doc.module';
import { AppBarDocComponent } from './empty-state-doc.component';

describe('EmptyStateDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [AppBarDocModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppBarDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
