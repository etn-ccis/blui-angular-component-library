import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerNavItemComponent } from './drawer-nav-item.component';
import { DrawerNavItemModule } from './drawer-nav-item.module';
import { Component } from '@angular/core';
import { count } from 'src/utils/test-utils';

@Component({
    template: `
        <pxb-drawer-nav-item></pxb-drawer-nav-item>
    `,
})
class TestDrawerNavItem {}

describe('DrawerNavItemComponent', () => {
    let component: DrawerNavItemComponent;
    let fixture: ComponentFixture<DrawerNavItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestDrawerNavItem],
            imports: [DrawerNavItemModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerNavItemComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
