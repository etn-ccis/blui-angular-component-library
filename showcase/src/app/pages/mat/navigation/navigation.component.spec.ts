import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNavigationComponent } from './navigation.component';
import { AppModule } from '../../../app.module';

describe('MatNavigationComponent', () => {
    let component: MatNavigationComponent;
    let fixture: ComponentFixture<MatNavigationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatNavigationComponent],
            imports: [AppModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
