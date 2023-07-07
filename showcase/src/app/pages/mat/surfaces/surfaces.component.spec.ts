import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSurfacesComponent } from './surfaces.component';
import { AppModule } from '../../../app.module';

describe('MatSurfacesComponent', () => {
    let component: MatSurfacesComponent;
    let fixture: ComponentFixture<MatSurfacesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatSurfacesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
