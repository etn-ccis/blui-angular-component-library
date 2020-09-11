import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { ListItemTagComponent } from './list-item-tag.component';
import { ListItemTagModule } from './list-item-tag.module';

describe('ListItemTagComponent', () => {
    let component: ListItemTagComponent;
    let fixture: ComponentFixture<ListItemTagComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [ListItemTagModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListItemTagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = ['.pxb-list-item-tag-content', '.pxb-list-item-tag-label'];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
