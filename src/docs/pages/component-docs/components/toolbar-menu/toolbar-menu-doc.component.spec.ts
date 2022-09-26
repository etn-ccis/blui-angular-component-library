import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarMenuDocModule } from './toolbar-menu-doc.module';
import { ToolbarMenuDocComponent } from './toolbar-menu-doc.component';

describe('ToolbarDocComponent', () => {
    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [ToolbarMenuDocModule, RouterTestingModule],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(ToolbarMenuDocComponent);
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });
});
