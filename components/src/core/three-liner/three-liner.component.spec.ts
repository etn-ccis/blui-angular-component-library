import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreeLinerModule } from './three-liner.module';
import { count } from '../../utils/test-utils';
import { Component } from '@angular/core';

@Component({
    template: `
        <pxb-app-bar mode="collapsed">
            <pxb-app-bar-dynamic-content>
                <div pxb-title>title</div>
                <div pxb-subtitle>title</div>
                <div pxb-info>title</div>
            </pxb-app-bar-dynamic-content>
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
            imports: [ThreeLinerModule],
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
            '.pxb-app-bar-dynamic-content',
            '.pxb-app-bar-dynamic-content-title',
            '.pxb-app-bar-dynamic-content-subtitle',
            '.pxb-app-bar-dynamic-content-info',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
