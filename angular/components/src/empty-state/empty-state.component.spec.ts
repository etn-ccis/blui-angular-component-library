import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EmptyStateComponent } from './empty-state.component';

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
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [EmptyStateComponent, TestEmpty],
        });

        TestBed.compileComponents();
    }));

    // Title Check
    it('should show title when supplied', () => {
        const fixture = TestBed.createComponent(EmptyStateComponent);

        const testComponent = fixture.debugElement.componentInstance;
        const titleElement = fixture.debugElement.query(By.css('h2'));

        testComponent.title = 'TEST';
        fixture.detectChanges();
        expect(titleElement.nativeElement.innerHTML).toBe('TEST');

        testComponent.title = '';
        fixture.detectChanges();
        expect(titleElement.nativeElement.innerHTML).toBe('');

        testComponent.title = null;
        fixture.detectChanges();

        expect(titleElement.nativeElement.innerHTML).toBe('');
    });

    // Description Check
    it('should show description when supplied', () => {
        const fixture = TestBed.createComponent(EmptyStateComponent);

        const testComponent = fixture.debugElement.componentInstance;
        let descriptionElement = fixture.debugElement.query(By.css('h4'));

        testComponent.title = 'TEST';
        fixture.detectChanges();
        expect(descriptionElement).toBeNull();

        testComponent.description = 'SAMPLE';
        fixture.detectChanges();
        descriptionElement = fixture.debugElement.query(By.css('h4'));
        expect(descriptionElement.nativeElement.innerHTML).toBe('SAMPLE');

        testComponent.description = null;
        fixture.detectChanges();
        descriptionElement = fixture.debugElement.query(By.css('h4'));
        expect(descriptionElement).toBeNull();
    });

    // Action Check
    it('should show actions when supplied', () => {
        const fixture = TestBed.createComponent(TestEmpty);

        let actionElement = fixture.debugElement.query(By.css('.withActions [actions]'));
        expect(actionElement).not.toBeNull();

        actionElement = fixture.debugElement.query(By.css('.empty [actions]'));
        expect(actionElement).toBeNull();
    });

    // Icon Check
    it('should show icon when supplied', () => {
        const fixture = TestBed.createComponent(TestEmpty);

        let actionElement = fixture.debugElement.query(By.css('.withIcon [empty-icon]'));
        expect(actionElement).not.toBeNull();

        actionElement = fixture.debugElement.query(By.css('.empty [empty-icon]'));
        expect(actionElement).toBeNull();
    });
});
