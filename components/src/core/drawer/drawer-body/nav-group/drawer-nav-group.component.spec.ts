import { ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from '../../../../utils/test-utils';
import { DrawerBodyModule } from '../drawer-body.module';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';

describe('DrawerNavGroupComponent', () => {
    let component: DrawerNavGroupComponent;
    let fixture: ComponentFixture<DrawerNavGroupComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [],
            imports: [DrawerBodyModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerNavGroupComponent);
        component = fixture.componentInstance;
        spyOn(component, 'ngOnInit').and.stub();
        spyOn(component, 'ngOnDestroy').and.stub();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render the title if the drawer is open', () => {
        component.title = 'test';
        spyOn(component, 'isOpen').and.returnValue(true);
        fixture.detectChanges();
        void expect(fixture.nativeElement.querySelector('.pxb-drawer-nav-group-title').innerHTML).toContain('test');
    });

    it('should hide the group title if the drawer is not open', () => {
        component.title = 'test';
        spyOn(component, 'isOpen').and.returnValue(false);
        fixture.detectChanges();
        void expect(fixture.nativeElement.querySelector('.pxb-drawer-nav-group-title-closed')).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        component.title = 'test';
        spyOn(component, 'isOpen').and.returnValue(true);
        fixture.detectChanges();
        const classList = ['.pxb-drawer-nav-group', '.pxb-drawer-nav-group-title'];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
