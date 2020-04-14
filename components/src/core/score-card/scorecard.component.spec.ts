import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreCardComponent } from './scorecard.component';
import { ScoreCardModule } from './scorecard.module';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { count } from '../../utils/test-utils';

@Component({
    template: `
        <pxb-scorecard>
            <ng-container action-items>
                <mat-icon>mail</mat-icon>
                <mat-icon>cloud</mat-icon>
                <mat-icon>search</mat-icon>
            </ng-container>
        </pxb-scorecard>
    `,
})
class TestScoreCardActions {}

@Component({
    template: `
        <pxb-scorecard><div body id="test-content">Content Goes Here</div></pxb-scorecard>
    `,
})
class TestScoreCardContent {}

@Component({
    template: `
        <pxb-scorecard><div action-row id="test-action-row">Show Details</div></pxb-scorecard>
    `,
})
class TestScoreCardActionRow {}

describe('ScoreCardComponent', () => {
    let component: ScoreCardComponent;
    let fixture: ComponentFixture<ScoreCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestScoreCardActions, TestScoreCardContent, TestScoreCardActionRow],
            imports: [ScoreCardModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ScoreCardComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should display a header', () => {
        component.headerTitle = 'Header Title';
        fixture.detectChanges();
        const title = fixture.nativeElement.querySelector('.pxb-scorecard-title');
        expect(title.innerHTML).toBe('Header Title');
    });

    it('should display a subheader', () => {
        component.headerSubtitle = 'Header Subheader';
        fixture.detectChanges();
        const subtitle = fixture.nativeElement.querySelector('.pxb-scorecard-subtitle');
        expect(subtitle.innerHTML).toBe('Header Subheader');
    });

    it('should display a third line of text in the header', () => {
        component.headerInfo = 'Header Info';
        fixture.detectChanges();
        const info = fixture.nativeElement.querySelector('.pxb-scorecard-info');
        expect(info.innerHTML).toBe('Header Info');
    });

    it('should display three action icons', () => {
        const customFixture = TestBed.createComponent(TestScoreCardActions);
        customFixture.detectChanges();
        const actions = customFixture.nativeElement.querySelectorAll('mat-icon');
        expect(actions.length).toBe(3);
    });

    it('should render the supplied content', () => {
        const customFixture = TestBed.createComponent(TestScoreCardContent);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-content');
        expect(content.innerHTML).toBe('Content Goes Here');
    });

    it('should render the supplied action row', () => {
        const customFixture = TestBed.createComponent(TestScoreCardActionRow);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-action-row');
        expect(content.innerHTML).toBe('Show Details');
    });

    it('should enforce class naming conventions', () => {
        const classList = [
            '.pxb-scorecard',
            '.pxb-scorecard-header',
            '.pxb-scorecard-header-background',
            '.pxb-scorecard-header-wrapper',
            '.pxb-scorecard-header-text',
            '.pxb-scorecard-title',
            '.pxb-scorecard-subtitle',
            '.pxb-scorecard-info',
            '.pxb-scorecard-action-items-wrapper',
            '.pxb-scorecard-body',
            '.pxb-scorecard-badge-wrapper',
            '.pxb-scorecard-action-row-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
