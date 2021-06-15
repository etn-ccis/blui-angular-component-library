import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBarModule } from './app-bar.module';
import { count } from '../../utils/test-utils';
import { Component } from '@angular/core';

@Component({
    template: `
        <pxb-app-bar mode="collapsed">
            <div>title</div>
        </pxb-app-bar>
    `,
})
class TestBasicUsage {}

describe('AppBarComponent', () => {
    let component: TestBasicUsage;
    let fixture: ComponentFixture<TestBasicUsage>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [TestBasicUsage],
            imports: [AppBarModule],
        }).compileComponents();
        fixture = TestBed.createComponent(TestBasicUsage);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = [
            '.pxb-app-bar-content',
            '.pxb-app-bar-background',
            '.pxb-app-bar-collapsed',
            '.pxb-app-bar-body-wrapper',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
