import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { InfoListItemComponent } from './info-list-item.component';
import { InfoListItemModule } from './info-list-item.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <pxb-info-list-item title="Icon Test">
            <mat-icon icon>mail</mat-icon>
        </pxb-info-list-item>
    `,
})
class TestIconComponent {}

@Component({
    template: `
        <pxb-info-list-item title="Left Component Test">
            <div left-component class="test-left">lefty</div>
        </pxb-info-list-item>
    `,
})
class TestLeftComponent {}

@Component({
    template: `
        <pxb-info-list-item title="Right Component Test">
            <div right-component class="test-right">righty</div>
        </pxb-info-list-item>
    `,
})
class TestRightComponent {}

describe('InfoListItemComponent', () => {
    let component: InfoListItemComponent;
    let fixture: ComponentFixture<InfoListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestIconComponent, TestLeftComponent, TestRightComponent],
            imports: [InfoListItemModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoListItemComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render a title', () => {
        component.title = 'Test Title';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.pxb-info-list-item-title').innerHTML.trim()).toBe('Test Title');
    });

    it('should render a subtitle', () => {
        component.subtitle = 'Test Subtitle';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.pxb-info-list-item-subtitle').innerHTML).toContain(
            'Test Subtitle'
        );
    });

    it('should render an icon', () => {
        const customFixture = TestBed.createComponent(TestIconComponent);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('mat-icon').innerHTML).toBe('mail');
    });

    it('should render a left component', () => {
        const customFixture = TestBed.createComponent(TestLeftComponent);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('.test-left').innerHTML).toBe('lefty');
    });

    it('should render a right component', () => {
        const customFixture = TestBed.createComponent(TestRightComponent);
        customFixture.detectChanges();
        expect(customFixture.nativeElement.querySelector('.test-right').innerHTML).toBe('righty');
    });

    it('should have a default height of 72px', () => {
        fixture.detectChanges();
        const root = fixture.debugElement.query(By.css('.pxb-info-list-item'));
        expect(root.nativeElement.children[0].offsetHeight).toBe(72);
    });

    it('should have a dense height of 56px', () => {
        component.dense = true;
        fixture.detectChanges();
        const root = fixture.debugElement.query(By.css('.pxb-info-list-item'));
        expect(root.nativeElement.children[0].offsetHeight).toBe(56);
    });

    it('should enforce class naming conventions', () => {
        component.divider = 'full';
        component.avatar = true;
        component.hidePadding = true;
        fixture.detectChanges();
        const classList = [
            '.pxb-info-list-item',
            '.pxb-info-list-item-icon',
            '.pxb-info-list-item-left-component',
            '.pxb-info-list-item-title',
            '.pxb-info-list-item-subtitle',
            '.pxb-info-list-item-spacer',
            '.pxb-info-list-item-right-component',
            '.pxb-info-list-item-divider',
            '.pxb-info-list-item-avatar',
            '.pxb-info-list-item-hide-padding',
            '.pxb-info-list-item-right-component-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
