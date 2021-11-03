import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMenuHeaderComponent } from './user-menu-header.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { count } from 'src/utils/test-utils';
import { UserMenuModule } from '../user-menu.module';
import { MatIconModule } from '@angular/material/icon';

@Component({
    template: `<blui-user-menu-header title="title" subtitle="subtitle"></blui-user-menu-header>`,
})
class TestUserMenuHeader {}

@Component({
    template: `
        <blui-user-menu-header>
            <div blui-title-content id="test-title-content">test title content</div>
        </blui-user-menu-header>
    `,
})
class TestUserMenuHeaderWithTitleContent {}

@Component({
    template: `
        <blui-user-menu-header>
            <button id="test-icon" mat-icon-button blui-icon>
                <mat-icon>menu</mat-icon>
            </button>
        </blui-user-menu-header>
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
        const title = fixture.debugElement.query(By.css('.blui-user-menu-header-title'));
        void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render subtitle', () => {
        component.title = 'test title';
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.blui-user-menu-header-subtitle'));
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
            '.blui-user-menu-header',
            '.blui-user-menu-header-content',
            '.blui-user-menu-header-icon-wrapper',
            '.blui-user-menu-header-title-wrapper',
            '.blui-user-menu-header-title',
            '.blui-user-menu-header-subtitle',
        ];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
