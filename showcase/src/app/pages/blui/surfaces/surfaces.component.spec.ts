import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BluiSurfacesComponent } from './surfaces.component';
import { BluiModule } from '../blui.module';

describe('BluiSurfacesComponent', () => {
    let component: BluiSurfacesComponent;
    let fixture: ComponentFixture<BluiSurfacesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BluiModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BluiSurfacesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
