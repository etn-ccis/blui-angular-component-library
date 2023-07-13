import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerSubheaderComponent } from './drawer-subheader.component';
import { DrawerSubheaderModule } from './drawer-subheader.module';
import { Component } from '@angular/core';
import { count } from 'src/lib/utils/test-utils';

@Component({
    template: `
        <blui-drawer-subheader>
            <div id="test-subheader-content">test subheader content</div>
        </blui-drawer-subheader>
    `,
})
class TestDrawerSubheader {}

describe('DrawerSubheaderComponent', () => {
    let component: DrawerSubheaderComponent;
    let fixture: ComponentFixture<DrawerSubheaderComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestDrawerSubheader],
            imports: [DrawerSubheaderModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerSubheaderComponent);
        component = fixture.componentInstance;
        spyOn(component, 'ngOnInit').and.stub();
        spyOn(component, 'ngOnDestroy').and.stub();
    });

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render subheaderContent', () => {
        const customFixture = TestBed.createComponent(TestDrawerSubheader);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-subheader-content');
        void expect(content.innerHTML).toBe('test subheader content');
    });

    it('should enforce class naming conventions', () => {
        const customFixture = TestBed.createComponent(TestDrawerSubheader);
        customFixture.detectChanges();
        const classList = ['.blui-drawer-subheader', '.blui-drawer-subheader-content'];
        for (const className of classList) {
            count(customFixture, className);
        }
    });
});
