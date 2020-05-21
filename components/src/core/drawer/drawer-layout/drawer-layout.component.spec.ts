import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { DrawerLayoutComponent, DrawerLayoutModule } from './public-api';
import { count } from 'src/utils/test-utils';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    template: `
        <pxb-drawer-layout>
            <div drawer id="test-drawer"></div>
        </pxb-drawer-layout>
    `,
})
class DrawerRenderTest {}

@Component({
    template: `
        <pxb-drawer-layout>
            <div content id="test-content"></div>
        </pxb-drawer-layout>
    `,
})
class ContentRenderTest {}

describe('DrawerLayoutComponent', () => {
    let component: DrawerLayoutComponent;
    let fixture: ComponentFixture<DrawerLayoutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DrawerRenderTest, ContentRenderTest],
            imports: [DrawerLayoutModule, NoopAnimationsModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerLayoutComponent);
        component = fixture.componentInstance;
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
        const customFixture = TestBed.createComponent(ContentRenderTest);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('#test-content')).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = ['.pxb-drawer-layout', '.pxb-side-nav-container', '.pxb-nav-content'];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
