import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMenuHeaderComponent } from './user-menu-header.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { count } from 'src/utils/test-utils';
import { UserMenuModule } from '../user-menu.module';
import { MatIconModule } from '@angular/material/icon';

@Component({
    template: `<pxb-user-menu-header title="title" subtitle="subtitle"></pxb-user-menu-header>`,
})
class TestUserMenuHeader {}

@Component({
    template: `
        <pxb-user-menu-header>
            <div pxb-title-content id="test-title-content">test title content</div>
        </pxb-user-menu-header>
    `,
})
class TestUserMenuHeaderWithTitleContent {}

@Component({
    template: `
        <pxb-user-menu-header>
            <button id="test-icon" mat-icon-button pxb-icon>
                <mat-icon>menu</mat-icon>
            </button>
        </pxb-user-menu-header>
    `,
})
class TestUserMenuHeaderWithIcon {}

describe('UserMenuHeaderComponent', () => {
    let component: UserMenuHeaderComponent;
    let fixture: ComponentFixture<UserMenuHeaderComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestUserMenuHeader, TestUserMenuHeaderWithTitleContent, TestUserMenuHeaderWithIcon],
            imports: [UserMenuModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(UserMenuHeaderComponent);
        component = fixture.componentInstance;
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
        const title = fixture.debugElement.query(By.css('.pxb-user-menu-header-title'));
        void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render subtitle', () => {
        component.title = 'test title';
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.pxb-user-menu-header-subtitle'));
        void expect(subtitle.nativeElement.innerHTML.trim()).toBe('test subtitle');
    });

    it('should render titleContent', () => {
        const customFixture = TestBed.createComponent(TestUserMenuHeaderWithTitleContent);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-title-content');
        void expect(content.innerHTML).toBe('test title content');
    });

    it('should render icon', () => {
        const customFixture = TestBed.createComponent(TestUserMenuHeaderWithIcon);
        customFixture.detectChanges();
        const icon: HTMLElement = customFixture.nativeElement.querySelector('#test-icon');
        void expect(icon.innerHTML).toBe(
            '<mat-icon role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">menu</mat-icon>'
        );
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(TestUserMenuHeader);
        customFixture.detectChanges();
        const classList = [
            '.pxb-user-menu-header',
            '.pxb-user-menu-header-content',
            '.pxb-user-menu-header-icon-wrapper',
            '.pxb-user-menu-header-title-wrapper',
            '.pxb-user-menu-header-title',
            '.pxb-user-menu-header-subtitle',
        ];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
