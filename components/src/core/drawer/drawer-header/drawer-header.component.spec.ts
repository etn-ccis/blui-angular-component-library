import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerHeaderComponent } from './drawer-header.component';
import { DrawerHeaderModule } from './drawer-header.module';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { count } from 'src/utils/test-utils';

@Component({
    template: `
        <pxb-drawer-header title="title" subtitle="subtitle"></pxb-drawer-header>
    `,
})
class TestDrawerHeader {}

@Component({
    template: `
        <pxb-drawer-header>
            <div pxb-title-content id="test-title-content">test title content</div>
        </pxb-drawer-header>
    `,
})
class TestDrawerHeaderWithTitleContent {}

@Component({
    template: `
        <pxb-drawer-header>
            <button id="test-icon" mat-icon-button pxb-icon>
                <mat-icon>menu</mat-icon>
            </button>
        </pxb-drawer-header>
    `,
})
class TestDrawerHeaderWithIcon {}

describe('DrawerHeaderComponent', () => {
    let component: DrawerHeaderComponent;
    let fixture: ComponentFixture<DrawerHeaderComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestDrawerHeader, TestDrawerHeaderWithTitleContent, TestDrawerHeaderWithIcon],
            imports: [DrawerHeaderModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerHeaderComponent);
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

    it('should render title', () => {
        component.title = 'test title';
        fixture.detectChanges();
        const title = fixture.debugElement.query(By.css('.pxb-drawer-header-title'));
        void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render subtitle', () => {
        component.title = 'test title';
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.pxb-drawer-header-subtitle'));
        void expect(subtitle.nativeElement.innerHTML.trim()).toBe('test subtitle');
    });

    it('should render titleContent', () => {
        const customFixture = TestBed.createComponent(TestDrawerHeaderWithTitleContent);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-title-content');
        void expect(content.innerHTML).toBe('test title content');
    });

    it('should render icon', () => {
        const customFixture = TestBed.createComponent(TestDrawerHeaderWithIcon);
        customFixture.detectChanges();
        const icon: HTMLElement = customFixture.nativeElement.querySelector('#test-icon');
        void expect(icon.innerHTML).toBe(
            '<mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">menu</mat-icon>'
        );
    });

    it('should enforce class naming conventions', () => {
        component.title = 'test title';
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const classList = [
            '.pxb-drawer-header-content',
            '.pxb-drawer-header-background',
            '.pxb-drawer-header-content',
            '.pxb-drawer-header-icon-wrapper',
            '.pxb-drawer-header-title-wrapper',
            '.pxb-drawer-header-title',
            '.pxb-drawer-header-subtitle',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
