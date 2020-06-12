import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

/** Test component that contains an MatButton. */
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
class TestEmpty {}

describe('Empty State Component', () => {
    let fixture: ComponentFixture<EmptyStateBasicUsageComponent>;
    let component: EmptyStateBasicUsageComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [EmptyStateModule],
            declarations: [EmptyStateBasicUsageComponent, TestEmpty],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyStateBasicUsageComponent);
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

    it('should throw a warning when the title is not supplied', () => {
        component.title = undefined;
        const warnSpy = spyOn(console, 'warn').and.stub();
        fixture.detectChanges();
        expect(warnSpy).toHaveBeenCalledTimes(1);
    });

    it('should not show empty title', () => {
        component.title = undefined;
        spyOn(console, 'warn').and.stub();
        fixture.detectChanges();
        const titleElement = fixture.debugElement.query(By.css('h2'));
        expect(titleElement.nativeElement.innerHTML).toBeFalsy();
    });

    it('should show description when supplied', () => {
        component.description = 'description';
        fixture.detectChanges();
        const descriptionElement = fixture.debugElement.query(By.css('p'));
        expect(descriptionElement.nativeElement.innerHTML).toBe('description');
    });

    it('should not show empty description', () => {
        component.description = '';
        fixture.detectChanges();
        const descriptionElement = fixture.debugElement.query(By.css('p'));
        expect(descriptionElement).toBeFalsy();
    });

    // Action Check
    it('should show actions when supplied', () => {
        const actionFixture = TestBed.createComponent(TestEmpty);
        let actionElement = actionFixture.debugElement.query(By.css('.withActions [pxb-actions]'));
        expect(actionElement).not.toBeNull();

        actionElement = actionFixture.debugElement.query(By.css('.empty [pxb-actions]'));
        expect(actionElement).toBeNull();
    });

    // Icon Check
    it('should show icon when supplied', () => {
        const iconFixture = TestBed.createComponent(TestEmpty);
        let actionElement = iconFixture.debugElement.query(By.css('.withIcon [pxb-empty-icon]'));
        expect(actionElement).not.toBeNull();

        actionElement = iconFixture.debugElement.query(By.css('.empty [pxb-empty-icon]'));
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
            '.pxb-empty-state-actions-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
