import { TestBed } from '@angular/core/testing';
import { ListItemTagDocModule } from './list-item-tag-doc.module';
import { ListItemTagDocComponent } from './list-item-tag-doc.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListItemTagDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [ListItemTagDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ListItemTagDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
