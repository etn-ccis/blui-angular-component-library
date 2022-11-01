import { TestBed } from '@angular/core/testing';
import { DrawerFooterDocModule } from './drawer-footer-doc.module';
import { DrawerFooterDocComponent } from './drawer-footer-doc.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DrawerNavItemDoc', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [DrawerFooterDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(DrawerFooterDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
