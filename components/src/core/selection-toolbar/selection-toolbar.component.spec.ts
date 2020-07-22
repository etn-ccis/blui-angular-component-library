import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { count } from '../../utils/test-utils';
import { SelectionToolbarComponent } from './selection-toolbar.component';
import { SelectionToolbarModule } from './selection-toolbar.module';

describe('SelectionToolbarComponent', () => {
    let component: SelectionToolbarComponent;
    let fixture: ComponentFixture<SelectionToolbarComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [],
            imports: [SelectionToolbarModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(SelectionToolbarComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        const classList = [
            '.pxb-selection-header',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
