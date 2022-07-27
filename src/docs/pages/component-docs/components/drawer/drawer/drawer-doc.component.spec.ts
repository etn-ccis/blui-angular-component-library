import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DrawerDocModule } from './drawer-doc.module';
import { DrawerDocComponent } from './drawer-doc.component';

describe('DrawerBodyDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [DrawerDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(DrawerDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
