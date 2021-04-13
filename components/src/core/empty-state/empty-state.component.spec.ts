import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { count } from '../../utils/test-utils';
import { EmptyStateModule } from './empty-state.module';

@Component({
    selector: 'empty-state-basic-usage-test',
    template: `
        <pxb-empty-state [title]="title" [description]="description">
            <span pxb-empty-icon></span>
        </pxb-empty-state>
    `,
})
class EmptyStateBasicUsageComponent {
    @Input() title = 'Placeholder Title';
    @Input() description: string;
}

@Component({
    selector: 'test-app',
    template: `
        <pxb-empty-state class="withIcon">
            <span pxb-empty-icon></span>
        </pxb-empty-state>
        <pxb-empty-state class="empty"></pxb-empty-state>

        <pxb-empty-state class="withActions">
            <span pxb-actions></span>
        </pxb-empty-state>
    `,
})
class TestIconActions {}

@Component({
    selector: 'test-description-content',
    template: `
        <pxb-empty-state>
            <span pxb-empty-icon></span>
            <div pxb-description>description</div>
        </pxb-empty-state>
    `,
})
class TestDescriptionContent {}

@Component({
    selector: 'test-title-content',
    template: `
        <pxb-empty-state>
            <span pxb-empty-icon></span>
            <div pxb-title>title</div>
        </pxb-empty-state>
    `,
})
class TestTitleContent {}

describe('Empty State Component', () => {
    let fixture: ComponentFixture<EmptyStateBasicUsageComponent>;
    let component: EmptyStateBasicUsageComponent;

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            imports: [EmptyStateModule],
            declarations: [EmptyStateBasicUsageComponent, TestIconActions, TestDescriptionContent, TestTitleContent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyStateBasicUsageComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should show title when input supplied', () => {
        component.title = 'title';
        fixture.detectChanges();
        const titleElement = fixture.debugElement.query(By.css('h2'));
        void expect(titleElement.nativeElement.innerHTML).toContain('title');
    });

    it('should show title when ng-content supplied', () => {
        const testFixture = TestBed.createComponent(TestTitleContent);
        testFixture.detectChanges();
        const titleElement = testFixture.debugElement.query(By.css('h2'));
        void expect(titleElement.nativeElement.innerHTML).toContain('title');
    });

    it('should show description when input supplied', () => {
        component.description = 'description';
        fixture.detectChanges();
        const descriptionElement = fixture.debugElement.query(By.css('p'));
        void expect(descriptionElement.nativeElement.innerHTML).toContain('description');
    });

    it('should show description when ng-content supplied', () => {
        const testFixture = TestBed.createComponent(TestDescriptionContent);
        testFixture.detectChanges();
        const descriptionElement = testFixture.debugElement.query(By.css('p'));
        void expect(descriptionElement.nativeElement.innerHTML).toContain('description');
    });

    // Action Check
    it('should show actions when supplied', () => {
        const actionFixture = TestBed.createComponent(TestIconActions);
        let actionElement = actionFixture.debugElement.query(By.css('.withActions [pxb-actions]'));
        void expect(actionElement).not.toBeNull();

        actionElement = actionFixture.debugElement.query(By.css('.empty [pxb-actions]'));
        void expect(actionElement).toBeNull();
    });

    // Icon Check
    it('should show icon when supplied', () => {
        const iconFixture = TestBed.createComponent(TestIconActions);
        let actionElement = iconFixture.debugElement.query(By.css('.withIcon [pxb-empty-icon]'));
        void expect(actionElement).not.toBeNull();

        actionElement = iconFixture.debugElement.query(By.css('.empty [pxb-empty-icon]'));
        void expect(actionElement).toBeNull();
    });

    it('should enforce class naming conventions', () => {
        component.title = 'title';
        component.description = 'description';
        fixture.detectChanges();
        const classList = [
            '.pxb-empty-state-content',
            '.pxb-empty-state-empty-icon-wrapper',
            '.pxb-empty-state-title',
            '.pxb-empty-state-description',
            '.pxb-empty-state-actions-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
