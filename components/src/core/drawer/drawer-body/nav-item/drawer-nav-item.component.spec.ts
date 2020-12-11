import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerNavItemComponent } from './drawer-nav-item.component';
import { DrawerNavItemModule } from './drawer-nav-item.module';
import { Component } from '@angular/core';
import { count } from 'src/utils/test-utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    template: `
        <pxb-drawer-nav-item [hidden]="true"></pxb-drawer-nav-item>
    `,
})
class DrawerHiddenNavItem {}

describe('DrawerNavItemComponent', () => {
    let component: DrawerNavItemComponent;
    let fixture: ComponentFixture<DrawerNavItemComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [DrawerHiddenNavItem],
            imports: [DrawerNavItemModule, BrowserAnimationsModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerNavItemComponent);
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

    it('should not render the nav item if hidden is true', () => {
        const hiddenFixture = TestBed.createComponent(DrawerHiddenNavItem);
        hiddenFixture.detectChanges();
        const navItem = hiddenFixture.nativeElement.querySelector('.pxb-drawer-nav-item-content');
        void expect(navItem).toBeFalsy();
    });

    it('should enforce class naming conventions', () => {
        component.hasChildren = true;
        component.selected = true;
        spyOn(component, 'isOpen').and.returnValue(true);
        spyOn(component, 'ngAfterContentInit').and.stub();
        spyOn(component, 'isEmpty').and.returnValue(true);
        fixture.detectChanges();
        let classList = [
            '.pxb-drawer-nav-item-content',
            //       '.pxb-drawer-nav-item-expand-icon', // TODO: Fix me.
            '.pxb-drawer-nested-nav-item',
            '.pxb-drawer-nav-item-active-square',
            '.pxb-drawer-nav-item-active',
            '.pxb-drawer-nav-item-active-highlight',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
        spyOn(component, 'isRail').and.returnValue(true);
        fixture.detectChanges();
        classList = ['.pxb-drawer-nav-item-rail', '.pxb-drawer-nav-item-rail-text'];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
