import { ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { DrawerComponent } from './drawer.component';
import { DrawerModule } from './drawer.module';
import { Component } from '@angular/core';

@Component({
    template: `
        <blui-drawer>
            <blui-drawer-header id="test-header"></blui-drawer-header>
        </blui-drawer>
    `,
})
class DrawerHeaderRenderTest {}

@Component({
    template: `
        <blui-drawer>
            <blui-drawer-subheader id="test-subheader"></blui-drawer-subheader>
        </blui-drawer>
    `,
})
class DrawerSubheaderRenderTest {}

@Component({
    template: `
        <blui-drawer>
            <blui-drawer-body id="test-body"></blui-drawer-body>
        </blui-drawer>
    `,
})
class DrawerBodyRenderTest {}

@Component({
    template: `
        <blui-drawer>
            <blui-drawer-footer id="test-footer"></blui-drawer-footer>
        </blui-drawer>
    `,
})
class DrawerFooterRenderTest {}

describe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [
                DrawerHeaderRenderTest,
                DrawerSubheaderRenderTest,
                DrawerBodyRenderTest,
                DrawerFooterRenderTest,
            ],
            imports: [DrawerModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerComponent);
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

    it('should render the drawer header', () => {
        const customFixture = TestBed.createComponent(DrawerHeaderRenderTest);
        customFixture.detectChanges();
        void expect(customFixture.nativeElement.querySelector('#test-header')).toBeTruthy();
    });

    it('should render the drawer subheader', () => {
        const customFixture = TestBed.createComponent(DrawerSubheaderRenderTest);
        customFixture.detectChanges();
        void expect(customFixture.nativeElement.querySelector('#test-subheader')).toBeTruthy();
    });

    it('should render the drawer body', () => {
        const customFixture = TestBed.createComponent(DrawerBodyRenderTest);
        customFixture.detectChanges();
        void expect(customFixture.nativeElement.querySelector('#test-body')).toBeTruthy();
    });

    it('should render the drawer footer', () => {
        const customFixture = TestBed.createComponent(DrawerFooterRenderTest);
        customFixture.detectChanges();
        void expect(customFixture.nativeElement.querySelector('#test-footer')).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = ['.blui-drawer-content', '.blui-drawer-hover-area'];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
