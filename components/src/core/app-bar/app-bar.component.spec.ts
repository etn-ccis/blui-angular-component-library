import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppBarModule} from "./app-bar.module";
import {AppBarComponent} from "./app-bar.component";
import {count} from "../../utils/test-utils";

describe('AppBarComponent', () => {
    let component: AppBarComponent;
    let fixture: ComponentFixture<AppBarComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [],
            imports: [AppBarModule],
        }).compileComponents();
        fixture = TestBed.createComponent(AppBarComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        fixture.detectChanges();
        const classList = [
            '.pxb-app-bar',
            '.pxb-app-bar-content',
            '.pxb-app-bar-collapsed'
        ];
        for (const className of classList) {
            count(fixture, className);
        }
    });
});
