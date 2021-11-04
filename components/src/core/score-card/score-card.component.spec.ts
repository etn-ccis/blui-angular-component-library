import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreCardComponent } from './score-card.component';
import { ScoreCardModule } from './score-card.module';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { count } from '../../utils/test-utils';

@Component({
    template: `
        <blui-score-card>
            <ng-container blui-action-items>
                <mat-icon>mail</mat-icon>
                <mat-icon>cloud</mat-icon>
                <mat-icon>search</mat-icon>
            </ng-container>
        </blui-score-card>
    `,
})
class TestScoreCardActions {}

@Component({
    template: `
        <blui-score-card><div blui-body id="test-content">Content Goes Here</div></blui-score-card>
    `,
})
class TestScoreCardContent {}

@Component({
    template: `
        <blui-score-card><div blui-action-row id="test-action-row">Show Details</div></blui-score-card>
    `,
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
        const title = fixture.nativeElement.querySelector('.blui-score-card-title');
        void expect(title.innerHTML).toBe('Header Title');
    });

    it('should display a subheader', () => {
        component.headerSubtitle = 'Header Subheader';
        fixture.detectChanges();
        const subtitle = fixture.nativeElement.querySelector('.blui-score-card-subtitle');
        void expect(subtitle.innerHTML).toBe('Header Subheader');
    });

    it('should display a third line of text in the header', () => {
        component.headerInfo = 'Header Info';
        fixture.detectChanges();
        const info = fixture.nativeElement.querySelector('.blui-score-card-info');
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
            '.blui-score-card-content',
            '.blui-score-card-header',
            '.blui-score-card-header-background',
            '.blui-score-card-header-wrapper',
            '.blui-score-card-header-text',
            '.blui-score-card-title',
            '.blui-score-card-subtitle',
            '.blui-score-card-info',
            '.blui-score-card-action-items-wrapper',
            '.blui-score-card-body',
            '.blui-score-card-badge-wrapper',
            '.blui-score-card-action-row-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
