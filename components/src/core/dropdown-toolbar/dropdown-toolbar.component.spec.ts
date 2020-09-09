import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { DropdownToolbarComponent } from './dropdown-toolbar.component';
import { DropdownToolbarModule } from './dropdown-toolbar.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { count } from '../../utils/test-utils';

@Component({
    template: `
        <pxb-dropdown-toolbar title="title" subtitle="subtitle">
            <button id="test-icon" mat-icon-button pxb-icon>
                <mat-icon>menu</mat-icon>
            </button>
            <div pxb-menu id="test-menu">menu text</div>
        </pxb-dropdown-toolbar>
    `,
})
class TestDropdownToolbar {}

describe('DropdownToolbarComponent', () => {
    let component: DropdownToolbarComponent;
    let fixture: ComponentFixture<DropdownToolbarComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestDropdownToolbar],
            imports: [DropdownToolbarModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DropdownToolbarComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render title', () => {
        component.title = 'test title';
        fixture.detectChanges();
        const title = fixture.debugElement.query(By.css('.pxb-dropdown-toolbar-title'));
        void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render subtitle', () => {
        component.title = 'test title';
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.pxb-dropdown-toolbar-subtitle'));
        void expect(subtitle.nativeElement.innerHTML.trim()).toBe('test subtitle');
    });

    it('should render icon', () => {
        const customFixture = TestBed.createComponent(TestDropdownToolbar);
        customFixture.detectChanges();
        const icon: HTMLElement = customFixture.nativeElement.querySelector('#test-icon');
        void expect(icon.innerHTML).toBe(
            '<mat-icon class="mat-icon notranslate material-icons mat-icon-no-color" role="img" aria-hidden="true">menu</mat-icon>'
        );
    });

    const clickMenu = (customFixture): void => {
        customFixture.detectChanges();
        const menuTrigger = document.getElementsByClassName('pxb-dropdown-toolbar-subtitle-container')[0];
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
            '.pxb-dropdown-toolbar-content',
            '.pxb-dropdown-toolbar-icon-wrapper',
            '.pxb-dropdown-toolbar-title',
            '.pxb-dropdown-toolbar-subtitle',
        ];

        for (const className of classList) {
            count(customFixture, className);
        }

        // Overlay classes
        void expect(document.getElementsByClassName('pxb-dropdown-toolbar-menu-wrapper').length).toBe(1);
    });
});
