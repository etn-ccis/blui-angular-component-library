import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputsComponent } from './inputs.component';
import { AppModule } from '../../../app.module';

describe('MatInputsComponent', () => {
    let component: MatInputsComponent;
    let fixture: ComponentFixture<MatInputsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
