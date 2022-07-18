import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';
import { AppModule } from '../../app.module';

describe('PageTwoComponent', () => {
    let component: PageTwoComponent;
    let fixture: ComponentFixture<PageTwoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageTwoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
