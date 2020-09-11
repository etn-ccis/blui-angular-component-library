import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { HeroComponent } from './hero.component';
import { HeroModule } from './hero.module';
import { Component } from '@angular/core';
import { ChannelValueModule } from '..';

@Component({
    template: `
        <pxb-hero label="Duration">
            <pxb-channel-value value="60" units="hours"></pxb-channel-value>
        </pxb-hero>
    `,
})
class TestChannelValue {}

@Component({
    template: `
        <pxb-hero label="Duration">
            <div pxb-primary id="test-primary-icon">Icon</div>
        </pxb-hero>
    `,
})
class TestPrimaryIcon {}

@Component({
    template: `
        <pxb-hero label="Duration" value="60" units="hours">
            <div pxb-secondary id="test-secondary-icon">Icon</div>
        </pxb-hero>
    `,
})
class TestSecondaryIcon {}

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;
    let component: HeroComponent;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [TestChannelValue, TestPrimaryIcon, TestSecondaryIcon],
            imports: [HeroModule, ChannelValueModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render a label', () => {
        component.label = 'Test Label';
        fixture.detectChanges();
        const label = fixture.nativeElement.querySelector('.pxb-hero-label');
        void expect(label.innerHTML).toBe('Test Label');
    });

    it('should create and render a pxb-channel-value', () => {
        component.label = 'Temp';
        component.value = '80';
        component.units = 'C';
        fixture.detectChanges();
        const value = fixture.nativeElement.querySelector('.pxb-channel-value-value');
        const units = fixture.nativeElement.querySelector('.pxb-channel-value-units');
        void expect(value.innerHTML).toBe('80');
        void expect(units.innerHTML).toBe('C');
    });

    it('should accept and project a pxb-channel-value', () => {
        const channelValueFixture = TestBed.createComponent(TestChannelValue);
        channelValueFixture.detectChanges();
        const value = channelValueFixture.nativeElement.querySelector('.pxb-channel-value-value');
        const units = channelValueFixture.nativeElement.querySelector('.pxb-channel-value-units');
        void expect(value.innerHTML).toBe('60');
        void expect(units.innerHTML).toBe('hours');
    });

    it('should render an icon', () => {
        const iconFixture = TestBed.createComponent(TestPrimaryIcon);
        iconFixture.detectChanges();
        const icon = iconFixture.nativeElement.querySelector('#test-primary-icon');
        void expect(icon).toBeTruthy();
    });

    it('should render a secondary icon', () => {
        const iconFixture = TestBed.createComponent(TestSecondaryIcon);
        iconFixture.detectChanges();
        const icon = iconFixture.nativeElement.querySelector('#test-secondary-icon');
        void expect(icon).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        const classList = [
            '.pxb-hero-content',
            '.pxb-hero-primary-wrapper',
            '.pxb-hero-channel-value-wrapper',
            '.pxb-hero-label',
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
