import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDisplayComponent } from './display.component';
import { AppModule } from '../../../app.module';

describe('MatDisplayComponent', () => {
    let component: MatDisplayComponent;
    let fixture: ComponentFixture<MatDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
