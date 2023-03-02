import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChannelValueComponent } from './channel-value.component';
import { count } from '../../utils/test-utils';
import { ChannelValueModule } from './channel-value.module';
import { Component } from '@angular/core';

@Component({
    template: `
        <blui-channel-value value="Icon Test">
            <div id="channel-value-test-icon"></div>
        </blui-channel-value>
    `,
})
class TestIcon {}

describe('ChannelValueComponent', () => {
    let component: ChannelValueComponent;
    let fixture: ComponentFixture<ChannelValueComponent>;

    beforeEach(waitForAsync(() => {
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
        const value = fixture.nativeElement.querySelector('.blui-channel-value-value');
        void expect(value.innerText).toBe('Test Value');
    });

    it('should render 0 integer value', () => {
        component.value = 0;
        fixture.detectChanges();
        const value = fixture.nativeElement.querySelector('.blui-channel-value-value');
        void expect(value.innerText).toBe('0');
    });

    it('should render units to the left', () => {
        component.value = 'Test Value';
        component.units = 'hz';
        component.prefix = false;
        fixture.detectChanges();
        const container = fixture.nativeElement.querySelector('.blui-channel-value-content');
        const units = fixture.nativeElement.querySelector('.blui-channel-value-units');
        void expect(units.innerText).toBe('hz');
        void expect(container.children[2]).toBe(units);
    });

    it('should render units to the right', () => {
        component.value = '74';
        component.units = 'C';
        component.prefix = true;
        fixture.detectChanges();
        const container = fixture.nativeElement.querySelector('.blui-channel-value-content');
        const units = fixture.nativeElement.querySelector('.blui-channel-value-units');
        void expect(units.innerText).toBe('C');
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
            '.blui-channel-value-content',
            '.blui-channel-value-units',
            '.blui-channel-value-icon-wrapper',
            '.blui-channel-value-value',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });

    it('should add space between value and unit since default is auto', () => {
        component.value = '123';
        component.units = 'hz';
        component.prefix = true;
        fixture.detectChanges();
        const classList = [
            '.blui-channel-value-content',
            '.blui-channel-value-units',
            '.blui-channel-value-icon-wrapper',
            '.blui-channel-value-value',
            '.blui-channel-value-units-prefix',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });

    it('should not add space between value and unit', () => {
        component.value = '123';
        component.units = 'hz';
        component.unitSpace = 'hide';
        fixture.detectChanges();
        const classList = [
            '.blui-channel-value-content',
            '.blui-channel-value-units',
            '.blui-channel-value-icon-wrapper',
            '.blui-channel-value-value',
            '.blui-channel-value-remove-space',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });

    it('should not add space between value and unit if whitelist prefix added', () => {
        component.value = '74';
        component.units = '$';
        component.prefix = true;
        component.isWhiteListedUnit = true;
        fixture.detectChanges();
        const units = fixture.nativeElement.querySelector('.blui-channel-value-units-prefix');
        void expect(units).toBeNull();
    });

    it('should not add space between value and unit if whitelist prefix added', () => {
        component.value = '74';
        component.units = '%';
        component.isWhiteListedUnit = true;
        fixture.detectChanges();
        const units = fixture.nativeElement.querySelector('.blui-channel-value-units-suffix');
        void expect(units).toBeNull();
    });
});
