import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoListItemDocModule } from './info-list-item-doc.module';
import { InfoListItemDocComponent } from './info-list-item-doc.component';

describe('InfoListItemDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [InfoListItemDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(InfoListItemDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
