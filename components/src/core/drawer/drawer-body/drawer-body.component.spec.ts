import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerBodyComponent } from './drawer-body.component';
import { DrawerBodyModule } from './drawer-body.module';

describe('DrawerBodyComponent', () => {
    let component: DrawerBodyComponent;
    let fixture: ComponentFixture<DrawerBodyComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [DrawerBodyModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerBodyComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
