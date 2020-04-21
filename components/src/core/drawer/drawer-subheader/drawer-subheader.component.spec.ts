import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerSubheaderComponent } from './drawer-subheader.component';
import { DrawerSubheaderModule } from './drawer-subheader.module';
import { Component } from '@angular/core';
import { count } from 'src/utils/test-utils';

@Component({
    template: `
        <pxb-drawer-subheader [drawerOpen]=true>
            <div id="test-subheader-content" subheaderContent>test subheader content</div>
        </pxb-drawer-subheader>
    `,
})
class TestDrawerSubheader {}

describe('DrawerSubheaderComponent', () => {
    let component: DrawerSubheaderComponent;
    let fixture: ComponentFixture<DrawerSubheaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestDrawerSubheader],
            imports: [DrawerSubheaderModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerSubheaderComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render subheaderContent', () => {
        const customFixture = TestBed.createComponent(TestDrawerSubheader);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-subheader-content');
        expect(content.innerHTML).toBe('test subheader content');
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(TestDrawerSubheader);
        customFixture.detectChanges();
        const classList = ['.pxb-drawer-subheader', '.pxb-drawer-subheader-content-wrapper'];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
