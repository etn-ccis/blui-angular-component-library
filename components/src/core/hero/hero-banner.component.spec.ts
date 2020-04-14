import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeroBannerComponent } from './hero-banner.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { count } from '../../utils/test-utils';

describe('HeroBannerComponent', () => {
    let fixture: ComponentFixture<HeroBannerComponent>;
    let component: HeroBannerComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroBannerComponent],
            imports: [BrowserModule, MatDividerModule, MatIconModule, HttpClientModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroBannerComponent);
        component = fixture.componentInstance;
    });

    it('should initialize', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        component.divider = true;
        fixture.detectChanges();
        const classList = ['.pxb-hero-banner', '.pxb-hero-banner-divider'];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
