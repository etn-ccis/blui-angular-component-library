import { ComponentFixture, TestBed } from '@angular/core/testing';
import {count} from "../../utils/test-utils";
import { DrawerComponent } from './drawer.component';
import { DrawerModule } from './drawer.module';
import { Component } from '@angular/core';

@Component({
    template: `
        <pxb-drawer>
            <pxb-drawer-header id="test-header"></pxb-drawer-header>
        </pxb-drawer>
    `,
})
class DrawerHeaderRenderTest {}

@Component({
    template: `
        <pxb-drawer>
            <pxb-drawer-subheader id="test-subheader"></pxb-drawer-subheader>
        </pxb-drawer>
    `,
})
class DrawerSubheaderRenderTest {}

@Component({
    template: `
        <pxb-drawer>
            <pxb-drawer-body id="test-body"></pxb-drawer-body>
        </pxb-drawer>
    `,
})
class DrawerBodyRenderTest {}

@Component({
    template: `
        <pxb-drawer>
            <pxb-drawer-footer id="test-footer"></pxb-drawer-footer>
        </pxb-drawer>
    `,
})
class DrawerFooterRenderTest {}


describe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DrawerHeaderRenderTest, DrawerSubheaderRenderTest, DrawerBodyRenderTest, DrawerFooterRenderTest],
            imports: [DrawerModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render the drawer header', () => {
        const customFixture = TestBed.createComponent(DrawerHeaderRenderTest);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('#test-header')).toBeTruthy();
    });

    it('should render the drawer subheader', () => {
        const customFixture = TestBed.createComponent(DrawerSubheaderRenderTest);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('#test-subheader')).toBeTruthy();
    });

    it('should render the drawer body', () => {
        const customFixture = TestBed.createComponent(DrawerBodyRenderTest);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('#test-body')).toBeTruthy();
    });

    it('should render the drawer footer', () => {
        const customFixture = TestBed.createComponent(DrawerFooterRenderTest);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('#test-footer')).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = [
            '.pxb-drawer',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
