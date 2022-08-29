import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DrawerLayoutDocModule } from './drawer-layout-doc.module';
import { DrawerLayoutDocComponent } from './drawer-layout-doc.component';

describe('DrawerNavItemDoc', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [DrawerLayoutDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(DrawerLayoutDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
