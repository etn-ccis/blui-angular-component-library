import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';
import { DrawerModule } from './drawer.module';
import { Component } from '@angular/core';

@Component({
    template: `
        <pxb-drawer> </pxb-drawer>
    `,
})
class TestDrawer {}

describe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestDrawer],
            imports: [DrawerModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
