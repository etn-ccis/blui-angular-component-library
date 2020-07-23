import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
// import { count } from '../../utils/test-utils';
import { SelectionToolbarComponent } from './selection-toolbar.component';
import { SelectionToolbarModule } from './selection-toolbar.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <pxb-selection-toolbar title="title" subtitle="subtitle">
            <button id="test-icon" mat-icon-button pxb-icon>
                <mat-icon>menu</mat-icon>
            </button>
            <div pxb-menu id="test-menu">menu text</div>
            <div pxb-right-content id="test-right-content">right content</div>
        </pxb-selection-toolbar>
    `,
})
class TestSelectionToolbar {}

describe('SelectionToolbarComponent', () => {
    let component: SelectionToolbarComponent;
    let fixture: ComponentFixture<SelectionToolbarComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestSelectionToolbar],
            imports: [SelectionToolbarModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(SelectionToolbarComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render title', () => {
        component.title = 'test title';
        fixture.detectChanges();
        const title = fixture.debugElement.query(By.css('.pxb-selection-toolbar-title'));
        void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render subtitle', () => {
        component.title = 'test title';
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.pxb-selection-toolbar-subtitle'));
        void expect(subtitle.nativeElement.innerHTML.trim()).toBe('test subtitle');
    });

    it('should render icon', () => {
        const customFixture = TestBed.createComponent(TestSelectionToolbar);
        customFixture.detectChanges();
        const icon: HTMLElement = customFixture.nativeElement.querySelector('#test-icon');
        void expect(icon.innerHTML).toBe(
            '<mat-icon class="mat-icon notranslate material-icons mat-icon-no-color" role="img" aria-hidden="true">menu</mat-icon>'
        );
    });

    it('should render right content', () => {
        const customFixture = TestBed.createComponent(TestSelectionToolbar);
        customFixture.detectChanges();
        const rightContent: HTMLElement = customFixture.nativeElement.querySelector('#test-right-content');
        void expect(rightContent.innerHTML).toBe('right content');
    });

    // it('should render menu', () => {
    //     const customFixture = TestBed.createComponent(TestSelectionToolbar);
    //     customFixture.menuTrigger.openMenu();  // @TODO: should be able to do this if i can to the following
    //     component.menuTrigger.openMenu();
    //     customFixture.detectChanges();
    //     const content: HTMLElement = customFixture.nativeElement.querySelector('#test-menu');
    //     void expect(content.innerHTML).toBe('menu text');
    // });

    // it('should enforce class naming conventions', () => {
    //     const customFixture = TestBed.createComponent(TestSelectionToolbar);
    //     const classList = [
    //         '.pxb-selection-toolbar',
    //         '.pxb-selection-toolbar-icon-wrapper',
    //         '.pxb-selection-toolbar-title-wrapper',
    //         '.pxb-selection-toolbar-title',
    //         '.pxb-selection-toolbar-subtitle-wrapper',
    //         '.pxb-selection-toolbar-subtitle',
    //         '.pxb-selection-toolbar-right-content-wrapper',
    //         '.pxb-selection-toolbar-menu'
    //     ];
    //     for (const className of classList) {
    //         count(customFixture, className);
    //     }
    // });
});
