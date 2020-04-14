import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelValueComponent } from './channel-value.component';
import {count} from "../../utils/test-utils";
import {ChannelValueModule} from "./channel-value.module";

describe('ChannelValueComponent', () => {
    let component: ChannelValueComponent;
    let fixture: ComponentFixture<ChannelValueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ChannelValueModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChannelValueComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        component.value = '123';
        component.units = 'hz';
        fixture.detectChanges();
        const classList = [
            '.pxb-channel-value',
            '.pxb-channel-value-units',
            '.pxb-channel-value-icon',
            '.pxb-channel-value-value'
        ];
        for (const className of classList) {
            count(fixture, className);
        }
        count(fixture, '.pxb-channel-value-text', 2);
    });
});
