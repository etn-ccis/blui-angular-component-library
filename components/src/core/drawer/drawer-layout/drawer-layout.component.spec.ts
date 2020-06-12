import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DrawerLayoutComponent, DrawerLayoutModule } from './public-api';
import { count } from 'src/utils/test-utils';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    template: `
        <pxb-drawer-layout [variant]="'persistent'">
            <div drawer id="test-drawer"></div>
            <div content id="test-content"></div>
        </pxb-drawer-layout>
    `,
})
class DrawerRenderTest {}

describe('DrawerLayoutComponent', () => {
    let component: DrawerLayoutComponent;
    let fixture: ComponentFixture<DrawerLayoutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DrawerRenderTest],
            imports: [DrawerLayoutModule, NoopAnimationsModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerLayoutComponent);
        component = fixture.componentInstance;
        spyOn(component, 'ngOnInit').and.stub();
        spyOn(component, 'ngOnDestroy').and.stub();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render the drawer', () => {
        const customFixture = TestBed.createComponent(DrawerRenderTest);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('#test-drawer')).toBeTruthy();
    });

    it('should render the content', () => {
        const customFixture = TestBed.createComponent(DrawerRenderTest);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('#test-content')).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(DrawerRenderTest);
        customFixture.detectChanges();
        const classList = ['.pxb-drawer-layout', '.pxb-drawer-layout-sidenav'];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
