import { ComponentFixture, TestBed } from '@angular/core/testing';
import {count} from "../../../utils/test-utils";
import { DrawerBodyComponent } from './drawer-body.component';
import { DrawerBodyModule } from './drawer-body.module';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';

fdescribe('DrawerNavGroupComponent', () => {
    let component: DrawerNavGroupComponent;
    let fixture: ComponentFixture<DrawerNavGroupComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [DrawerBodyModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerNavGroupComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render the title if the drawer is open', () => {


    });

    it('should not render the title if the drawer is not open', () => {

    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = [
            '.pxb-drawer-nav-group',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
