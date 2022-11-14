import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { count } from '../../utils/test-utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarMenuComponent } from './toolbar-menu.component';
import { ToolbarMenuModule } from './toolbar-menu.module';

@Component({
    template: `
        <blui-toolbar-menu label="title">
            <button id="test-icon" mat-icon-button blui-icon>
                <mat-icon>menu</mat-icon>
            </button>
            <div blui-toolbar-menu-items id="test-menu">menu text</div>
        </blui-toolbar-menu>
    `,
})
class TestDropdownToolbar {}

describe('ToolbarMenuComponent', () => {
    let component: ToolbarMenuComponent;
    let fixture: ComponentFixture<ToolbarMenuComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestDropdownToolbar],
            imports: [ToolbarMenuModule, MatIconModule, BrowserAnimationsModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ToolbarMenuComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render label', () => {
        component.label = 'test title';
        fixture.detectChanges();
        const title = fixture.debugElement.query(By.css('.blui-toolbar-menu-label'));
        void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render icon', () => {
        const customFixture = TestBed.createComponent(TestDropdownToolbar);
        customFixture.detectChanges();
        const icon: HTMLElement = customFixture.nativeElement.querySelector('#test-icon');
        void expect(icon).toBeTruthy();
    });

    const clickMenu = (customFixture): void => {
        customFixture.detectChanges();
        const menuTrigger = document.getElementsByClassName('blui-toolbar-menu-trigger')[0];
        menuTrigger.dispatchEvent(new Event('click'));
        customFixture.detectChanges();
    };

    it('should render menu', () => {
        const customFixture = TestBed.createComponent(TestDropdownToolbar);
        customFixture.detectChanges();
        clickMenu(customFixture);
        const menu = document.getElementById('test-menu');
        void expect(menu.innerText).toBe('menu text');
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(TestDropdownToolbar);
        clickMenu(customFixture);

        // Non-overlay classes
        const classList = [
            '.blui-toolbar-menu',
            '.blui-toolbar-menu-toggle-icon',
            '.blui-toolbar-menu-label',
            '.blui-toolbar-menu-trigger',
            '.blui-toolbar-icon-wrapper',
        ];

        for (const className of classList) {
            count(customFixture, className);
        }

        // Overlay classes
        void expect(document.getElementsByClassName('blui-toolbar-menu-menu-wrapper').length).toBe(1);
    });
});
