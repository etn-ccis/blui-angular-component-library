import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DrawerSubheaderDocModule } from './drawer-subheader-doc.module';
import { DrawerSubheaderDocComponent } from './drawer-subheader-doc.component';

describe('DrawerBodyDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [DrawerSubheaderDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(DrawerSubheaderDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
