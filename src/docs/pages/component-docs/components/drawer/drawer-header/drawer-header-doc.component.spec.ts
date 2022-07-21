import { TestBed } from '@angular/core/testing';
import { DrawerHeaderDocModule } from './drawer-header-doc.module';
import { DrawerHeaderDocComponent } from './drawer-header-doc.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DrawerNavItemDoc', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [DrawerHeaderDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(DrawerHeaderDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
