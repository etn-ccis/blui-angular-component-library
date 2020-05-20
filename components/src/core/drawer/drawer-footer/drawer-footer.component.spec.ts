import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerFooterComponent } from './drawer-footer.component';
import { DrawerFooterModule } from './drawer-footer.module';
import { Component } from '@angular/core';
import { count } from 'src/utils/test-utils';

@Component({
    template: `
        <pxb-drawer-footer>
            <div id="test-footer-content" footerContent>test footer content</div>
        </pxb-drawer-footer>
    `,
})
class TestDrawerFooter {}

describe('DrawerFooterComponent', () => {
    let component: DrawerFooterComponent;
    let fixture: ComponentFixture<DrawerFooterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestDrawerFooter],
            imports: [DrawerFooterModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerFooterComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render footerContent', () => {
        const customFixture = TestBed.createComponent(TestDrawerFooter);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-footer-content');
        expect(content.innerHTML).toBe('test footer content');
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(TestDrawerFooter);
        customFixture.detectChanges();
        const classList = ['.pxb-drawer-footer', '.pxb-drawer-footer-content-wrapper'];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
