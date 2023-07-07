import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BluiDisplayComponent } from './display.component';
import { BluiModule } from '../blui.module';

describe('BluiDisplayComponent', () => {
    let component: BluiDisplayComponent;
    let fixture: ComponentFixture<BluiDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BluiModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BluiDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should call handleInfoListItemClick method', () => {
        fixture.detectChanges();
        const infoListItem = document.getElementsByClassName('display-info-list-item')[0];
        const mouseEvent = new MouseEvent('click');
        infoListItem.dispatchEvent(mouseEvent);
        const handleInfoListItemClickSpy = spyOn(component, 'handleInfoListItemClick');
        fixture.detectChanges();
        void expect(handleInfoListItemClickSpy).toBeTruthy();
    });
});
