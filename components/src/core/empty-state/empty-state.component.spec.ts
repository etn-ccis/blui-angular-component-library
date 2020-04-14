import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EmptyStateComponent } from './empty-state.component';
import { count } from '../../utils/test-utils';
import { EmptyStateModule } from './empty-state.module';

/** Test component that contains an MatButton. */
@Component({
    selector: 'test-app',
    template: `
        <pxb-empty-state class="withIcon">
            <span empty-icon></span>
        </pxb-empty-state>
        <pxb-empty-state class="empty"></pxb-empty-state>

        <pxb-empty-state class="withActions">
            <span actions></span>
        </pxb-empty-state>
    `,
})
class TestEmpty {}

describe('Empty State Component', () => {
    let fixture: ComponentFixture<EmptyStateComponent>;
    let component: EmptyStateComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [EmptyStateModule],
            declarations: [TestEmpty],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyStateComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should show title when supplied', () => {
        component.title = 'title';
        fixture.detectChanges();
        const titleElement = fixture.debugElement.query(By.css('h2'));
        expect(titleElement.nativeElement.innerHTML).toBe('title');
    });

    it('should not show empty title', () => {
        component.title = undefined;
        fixture.detectChanges();
        const titleElement = fixture.debugElement.query(By.css('h2'));
        expect(titleElement.nativeElement.innerHTML).toBeFalsy();
    });

    it('should show description when supplied', () => {
        component.description = 'description';
        fixture.detectChanges();
        const descriptionElement = fixture.debugElement.query(By.css('h4'));
        expect(descriptionElement.nativeElement.innerHTML).toBe('description');
    });

    it('should not show empty description', () => {
        component.description = '';
        fixture.detectChanges();
        const descriptionElement = fixture.debugElement.query(By.css('h4'));
        expect(descriptionElement).toBeFalsy();
    });

    // Action Check
    it('should show actions when supplied', () => {
        const actikonFixture = TestBed.createComponent(TestEmpty);
        let actionElement = actikonFixture.debugElement.query(By.css('.withActions [actions]'));
        expect(actionElement).not.toBeNull();

        actionElement = actikonFixture.debugElement.query(By.css('.empty [actions]'));
        expect(actionElement).toBeNull();
    });

    // Icon Check
    it('should show icon when supplied', () => {
        const iconFixture = TestBed.createComponent(TestEmpty);
        let actionElement = iconFixture.debugElement.query(By.css('.withIcon [empty-icon]'));
        expect(actionElement).not.toBeNull();

        actionElement = iconFixture.debugElement.query(By.css('.empty [empty-icon]'));
        expect(actionElement).toBeNull();
    });

    it('should enforce class naming conventions', () => {
        component.title = 'title';
        component.description = 'description';
        fixture.detectChanges();
        const classList = [
            '.pxb-empty-state',
            '.pxb-empty-state-empty-icon-wrapper',
            '.pxb-empty-state-title',
            '.pxb-empty-state-description',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
