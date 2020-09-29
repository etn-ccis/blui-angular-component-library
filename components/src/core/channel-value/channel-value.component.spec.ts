import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelValueComponent } from './channel-value.component';
import { count } from '../../utils/test-utils';
import { ChannelValueModule } from './channel-value.module';
import { Component } from '@angular/core';

@Component({
    template: `
        <pxb-channel-value value="Icon Test">
            <div id="channel-value-test-icon"></div>
        </pxb-channel-value>
    `,
})
class TestIcon {}

describe('ChannelValueComponent', () => {
    let component: ChannelValueComponent;
    let fixture: ComponentFixture<ChannelValueComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [TestIcon],
            imports: [ChannelValueModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChannelValueComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render a value', () => {
        component.value = 'Test Value';
        fixture.detectChanges();
        const value = fixture.nativeElement.querySelector('.pxb-channel-value-value');
        void expect(value.innerHTML).toBe('Test Value');
    });

    it('should render units to the left', () => {
        component.value = 'Test Value';
        component.units = 'hz';
        component.prefix = false;
        fixture.detectChanges();
        const container = fixture.nativeElement.querySelector('.pxb-channel-value-content');
        const units = fixture.nativeElement.querySelector('.pxb-channel-value-units');
        void expect(units.innerHTML).toBe('hz');
        void expect(container.children[2]).toBe(units);
    });

    it('should render units to the right', () => {
        component.value = '74';
        component.units = 'C';
        component.prefix = true;
        fixture.detectChanges();
        const container = fixture.nativeElement.querySelector('.pxb-channel-value-content');
        const units = fixture.nativeElement.querySelector('.pxb-channel-value-units');
        void expect(units.innerHTML).toBe('C');
        void expect(container.children[1]).toBe(units);
    });

    it('should render an icon', () => {
        const iconFixture = TestBed.createComponent(TestIcon);
        iconFixture.detectChanges();
        const icon = iconFixture.nativeElement.querySelector('#channel-value-test-icon');
        void expect(icon).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        component.value = '123';
        component.units = 'hz';
        fixture.detectChanges();
        const classList = [
            '.pxb-channel-value-content',
            '.pxb-channel-value-units',
            '.pxb-channel-value-icon-wrapper',
            '.pxb-channel-value-value',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
