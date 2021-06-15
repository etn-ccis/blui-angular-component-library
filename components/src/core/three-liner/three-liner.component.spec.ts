import { ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { Component } from '@angular/core';
import {ThreeLinerModule} from "./three-liner.module";

@Component({
    template: `
        <pxb-three-liner>
            <div pxb-title>title</div>
            <div pxb-subtitle>title</div>
            <div pxb-info>title</div>
        </pxb-three-liner>
    `,
})
class TestBasicUsage {}

describe('ThreeLinerComponent', () => {
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
            '.pxb-three-liner-content',
            '.pxb-three-liner-title',
            '.pxb-three-liner-subtitle',
            '.pxb-three-liner-info',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
