import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerHeaderComponent } from './drawer-header.component';
import { DrawerHeaderModule } from './drawer-header.module';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { count } from 'src/lib/utils/test-utils';

@Component({
    template: ` <blui-drawer-header title="title" subtitle="subtitle"></blui-drawer-header> `,
})
class TestDrawerHeader {}

@Component({
    template: `
        <blui-drawer-header>
            <div blui-title-content id="test-title-content">test title content</div>
        </blui-drawer-header>
    `,
})
class TestDrawerHeaderWithTitleContent {}

@Component({
    template: `
        <blui-drawer-header>
            <button id="test-icon" mat-icon-button blui-icon>
                <mat-icon>menu</mat-icon>
            </button>
        </blui-drawer-header>
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

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render title', () => {
        component.title = 'test title';
        fixture.detectChanges();
        const title = fixture.debugElement.query(By.css('.blui-drawer-header-title'));
        void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render subtitle', () => {
        component.title = 'test title';
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.blui-drawer-header-subtitle'));
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
        void expect(icon).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(TestDrawerHeader);
        customFixture.detectChanges();
        const classList = [
            '.blui-drawer-header',
            '.blui-drawer-header-content',
            '.blui-drawer-header-background',
            '.blui-drawer-header-content',
            '.blui-drawer-header-icon-wrapper',
            '.blui-drawer-header-title-wrapper',
            '.blui-drawer-header-title',
            '.blui-drawer-header-subtitle',
        ];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
