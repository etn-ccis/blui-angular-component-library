import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreCardComponent } from './score-card.component';
import { ScoreCardModule } from './score-card.module';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { count } from '../../utils/test-utils';

@Component({
    template: `
        <pxb-score-card>
            <ng-container pxb-action-items>
                <mat-icon>mail</mat-icon>
                <mat-icon>cloud</mat-icon>
                <mat-icon>search</mat-icon>
            </ng-container>
        </pxb-score-card>
    `,
})
class TestScoreCardActions {}

@Component({
    template: ` <pxb-score-card><div pxb-body id="test-content">Content Goes Here</div></pxb-score-card> `,
})
class TestScoreCardContent {}

@Component({
    template: ` <pxb-score-card><div pxb-action-row id="test-action-row">Show Details</div></pxb-score-card> `,
})
class TestScoreCardActionRow {}

describe('ScoreCardComponent', () => {
    let component: ScoreCardComponent;
    let fixture: ComponentFixture<ScoreCardComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestScoreCardActions, TestScoreCardContent, TestScoreCardActionRow],
            imports: [ScoreCardModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ScoreCardComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should display a header', () => {
        component.headerTitle = 'Header Title';
        fixture.detectChanges();
        const title = fixture.nativeElement.querySelector('.pxb-score-card-title');
        void expect(title.innerHTML).toBe('Header Title');
    });

    it('should display a subheader', () => {
        component.headerSubtitle = 'Header Subheader';
        fixture.detectChanges();
        const subtitle = fixture.nativeElement.querySelector('.pxb-score-card-subtitle');
        void expect(subtitle.innerHTML).toBe('Header Subheader');
    });

    it('should display a third line of text in the header', () => {
        component.headerInfo = 'Header Info';
        fixture.detectChanges();
        const info = fixture.nativeElement.querySelector('.pxb-score-card-info');
        void expect(info.innerHTML).toBe('Header Info');
    });

    it('should display three action icons', () => {
        const customFixture = TestBed.createComponent(TestScoreCardActions);
        customFixture.detectChanges();
        const actions = customFixture.nativeElement.querySelectorAll('mat-icon');
        void expect(actions.length).toBe(3);
    });

    it('should render the supplied content', () => {
        const customFixture = TestBed.createComponent(TestScoreCardContent);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-content');
        void expect(content.innerHTML).toBe('Content Goes Here');
    });

    it('should render the supplied action row', () => {
        const customFixture = TestBed.createComponent(TestScoreCardActionRow);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-action-row');
        void expect(content.innerHTML).toBe('Show Details');
    });

    it('should enforce class naming conventions', () => {
        const classList = [
            '.pxb-score-card-content',
            '.pxb-score-card-header',
            '.pxb-score-card-header-background',
            '.pxb-score-card-header-wrapper',
            '.pxb-score-card-header-text',
            '.pxb-score-card-title',
            '.pxb-score-card-subtitle',
            '.pxb-score-card-info',
            '.pxb-score-card-action-items-wrapper',
            '.pxb-score-card-body',
            '.pxb-score-card-badge-wrapper',
            '.pxb-score-card-action-row-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
