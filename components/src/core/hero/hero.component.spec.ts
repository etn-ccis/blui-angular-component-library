import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { count } from '../../utils/test-utils';
import { HeroComponent } from './hero.component';
import { HeroModule } from './hero.module';

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HeroModule],
        }).compileComponents();
        fixture = TestBed.createComponent(HeroComponent);
    }));

    it('should enforce class naming conventions', () => {
        const classList = ['.pxb-root', '.pxb-primary-wrapper', '.pxb-channel-value-wrapper', '.pxb-label'];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
