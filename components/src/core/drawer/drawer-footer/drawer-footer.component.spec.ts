import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerFooterComponent } from './drawer-footer.component';
import { DrawerFooterModule } from './drawer-footer.module';
import { Component } from '@angular/core';
import { count } from 'src/utils/test-utils';

@Component({
    template: `
        <pxb-drawer-footer>
            <div id="test-footer-content">test footer content</div>
        </pxb-drawer-footer>
    `,
})
class TestDrawerFooter {}

describe('DrawerFooterComponent', () => {
    let component: DrawerFooterComponent;
    let fixture: ComponentFixture<DrawerFooterComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestDrawerFooter],
            imports: [DrawerFooterModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerFooterComponent);
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

    it('should render footerContent', () => {
        const customFixture = TestBed.createComponent(TestDrawerFooter);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-footer-content');
        void expect(content.innerHTML).toBe('test footer content');
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(TestDrawerFooter);
        customFixture.detectChanges();
        const classList = ['.pxb-drawer-footer-content', '.pxb-drawer-footer-closed'];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
