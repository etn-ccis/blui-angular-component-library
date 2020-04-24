import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerNavGroupComponent } from './drawer-nav-group.component';
import { DrawerNavGroupModule } from './drawer-nav-group.module';
import { Component } from '@angular/core';

@Component({
    template: `
        <pxb-drawer-nav-group>
          
        </pxb-drawer-nav-group>
    `,
})
class TestDrawerNavGroup {}

describe('DrawerNavGroupComponent', () => {
    let component: DrawerNavGroupComponent;
    let fixture: ComponentFixture<DrawerNavGroupComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestDrawerNavGroup],
            imports: [DrawerNavGroupModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerNavGroupComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
