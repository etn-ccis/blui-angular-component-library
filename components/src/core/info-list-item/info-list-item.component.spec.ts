import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { InfoListItemModule } from './info-list-item.module';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <blui-info-list-item
            [statusColor]="statusColor"
            [chevron]="chevron"
            [dense]="dense"
            [avatar]="avatar"
            [hidePadding]="hidePadding"
            [wrapSubtitle]="wrapSubtitle"
            [wrapTitle]="wrapTitle"
            [divider]="divider"
        >
            <div blui-title>Test Title</div>
            <div blui-subtitle>Test Subtitle</div>
            <mat-icon blui-icon>mail</mat-icon>
        </blui-info-list-item>
    `,
})
class TestBasicUsage {
    @Input() statusColor;
    @Input() chevron;
    @Input() dense;
    @Input() avatar;
    @Input() hidePadding;
    @Input() wrapSubtitle;
    @Input() wrapTitle;
    @Input() divider: any;
}

@Component({
    template: `
        <blui-info-list-item>
            <div blui-title>title</div>
            <mat-icon blui-icon>mail</mat-icon>
        </blui-info-list-item>
    `,
})
class TestIconComponent {}

@Component({
    template: ` <blui-info-list-item> </blui-info-list-item> `,
})
class TestMissingTitle {}

@Component({
    template: `
        <blui-info-list-item>
            <div blui-title>title</div>
            <div blui-left-content class="test-left">lefty</div>
        </blui-info-list-item>
    `,
})
class TestLeftContent {}

@Component({
    template: `
        <blui-info-list-item>
            <div blui-title>title</div>
            <div blui-right-content class="test-right">righty</div>
        </blui-info-list-item>
    `,
})
class TestRightContent {}

describe('InfoListItemComponent', () => {
    let component: TestBasicUsage;
    let fixture: ComponentFixture<TestBasicUsage>;

    beforeEach(
        waitForAsync(() => {
            void TestBed.configureTestingModule({
                declarations: [TestBasicUsage, TestMissingTitle, TestIconComponent, TestLeftContent, TestRightContent],
                imports: [InfoListItemModule],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestBasicUsage);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render a title', () => {
        fixture.detectChanges();
        void expect(fixture.nativeElement.querySelector('.blui-info-list-item-title-wrapper').innerHTML).toContain(
            'Test Title'
        );
    });

    it('should render a subtitle', () => {
        fixture.detectChanges();
        void expect(fixture.nativeElement.querySelector('.blui-info-list-item-subtitle-wrapper').innerHTML).toContain(
            'Test Subtitle'
        );
    });

    it('should throw a warning if a title is not provided', () => {
        const customFixture = TestBed.createComponent(TestMissingTitle);
        const warnSpy = spyOn(console, 'warn').and.stub();
        customFixture.detectChanges();
        void expect(warnSpy).toHaveBeenCalledTimes(1);
    });

    it('should render an icon', () => {
        const customFixture = TestBed.createComponent(TestIconComponent);
        customFixture.detectChanges();
        void expect(customFixture.nativeElement.querySelector('mat-icon').innerHTML).toBe('mail');
    });

    it('should render a left component', () => {
        const customFixture = TestBed.createComponent(TestLeftContent);
        customFixture.detectChanges();
        void expect(customFixture.nativeElement.querySelector('.test-left').innerHTML).toBe('lefty');
    });

    it('should render a right component', () => {
        const customFixture = TestBed.createComponent(TestRightContent);
        customFixture.detectChanges();
        void expect(customFixture.nativeElement.querySelector('.test-right').innerHTML).toBe('righty');
    });

    it('should have a default height of 72px', () => {
        fixture.detectChanges();
        const root = fixture.debugElement.query(By.css('.blui-info-list-item-content'));
        void expect(root.nativeElement.children[0].offsetHeight).toBe(72);
    });

    it('should have a dense height of 52px', () => {
        component.dense = true;
        fixture.detectChanges();
        const root = fixture.debugElement.query(By.css('.blui-info-list-item-content'));
        void expect(root.nativeElement.children[0].offsetHeight).toBe(52);
    });

    it('should enforce class naming conventions', () => {
        component.divider = 'full';
        component.avatar = true;
        component.hidePadding = true;
        fixture.detectChanges();
        const classList = [
            '.blui-info-list-item-content',
            '.blui-info-list-item-icon-wrapper',
            '.blui-info-list-item-left-content-wrapper',
            '.blui-info-list-item-title-wrapper',
            '.blui-info-list-item-subtitle-wrapper',
            '.blui-info-list-item-spacer',
            '.blui-info-list-item-divider',
            '.blui-info-list-item-avatar',
            '.blui-info-list-item-hide-padding',
            '.blui-info-list-item-right-content',
            '.blui-info-list-item-right-content-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
