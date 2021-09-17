import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMenuModule } from './user-menu.module';
import { UserMenuComponent } from './user-menu.component';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { count } from '../../utils/test-utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Test component that contains an MatButton. */
@Component({
    selector: 'test-app',
    template: `
        <pxb-user-menu avatarValue="HA" [open]="true">
            <div pxb-menu-header>
                <div id="custom-header-test"></div>
            </div>
        </pxb-user-menu>
    `,
})
class UserMenuCustomHeaderTest {}

/** Test component that contains an MatButton. */
@Component({
    selector: 'test-app',
    template: `
        <pxb-user-menu avatarValue="HA" [open]="true">
            <mat-nav-list pxb-menu-body>
                <mat-list-item id="list-item-test">List Item 1</mat-list-item>
            </mat-nav-list>
        </pxb-user-menu>
    `,
})
class UserMenuNavItemsTest {}

describe('UserMenuComponent', () => {
    let component: UserMenuComponent;
    let fixture: ComponentFixture<UserMenuComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            declarations: [UserMenuNavItemsTest, UserMenuCustomHeaderTest],
            imports: [UserMenuModule, MatListModule, BrowserAnimationsModule],
        }).compileComponents();
        fixture = TestBed.createComponent(UserMenuComponent);
        component = fixture.componentInstance;
        spyOn(component, 'checkScreenSize').and.stub();
    });

    it('should initialize', () => {
        fixture.detectChanges();
        void expect(component).toBeTruthy();
    });

    it('should render text in the avatar', () => {
        component.avatarValue = 'HA';
        fixture.detectChanges();
        const avatar = fixture.nativeElement.querySelector('.pxb-user-menu-avatar');
        void expect(avatar.innerText).toBe('HA');
    });

    it('should render the menu open is true', () => {
        fixture.detectChanges();
        let menu = document.getElementsByClassName('.pxb-user-menu-overlay');
        void expect(menu).toBeTruthy();
        component.open = true;
        component.isMenuOpen = true;
        component.useBottomSheet = false;
        fixture.detectChanges();
        menu = document.getElementsByClassName('.pxb-user-menu-overlay');
        void expect(menu).toBeTruthy();
    });

    it('should render the title', () => {
        component.menuTitle = 'Sample Title';
        component.open = true;
        component.isMenuOpen = true;
        component.useBottomSheet = false;
        fixture.detectChanges();
        const title = document.getElementsByClassName('pxb-user-menu-header-title')[0] as HTMLElement;
        void expect(title.innerText).toBe('Sample Title');
    });

    it('should render the subtitle', () => {
        component.menuTitle = 'Sample Title';
        component.menuSubtitle = 'Sample Subtitle';
        component.open = true;
        component.isMenuOpen = true;
        component.useBottomSheet = false;
        fixture.detectChanges();
        const title = document.getElementsByClassName('pxb-user-menu-header-subtitle')[0] as HTMLElement;
        void expect(title.innerText).toBe('Sample Subtitle');
    });

    it('should render the custom header', () => {
        const headerFixture = TestBed.createComponent(UserMenuCustomHeaderTest);
        headerFixture.detectChanges();
        const header = document.getElementById('custom-header-test');
        void expect(header).toBeTruthy();
    });

    it('should render the nav items', () => {
        const listFixture = TestBed.createComponent(UserMenuNavItemsTest);
        listFixture.detectChanges();
        const listItem = document.getElementById('list-item-test');
        void expect(listItem).toBeTruthy();
    });

    it('should enforce class naming conventions', () => {
        component.avatarValue = 'EM';
        component.open = true;
        component.isMenuOpen = true;
        component.useBottomSheet = false;
        component.menuTitle = 'Title';
        fixture.detectChanges();
        const fixtureClassList = ['.pxb-user-menu-avatar', '.pxb-user-menu-text-avatar'];
        const menuOverlayClassList = [
            'pxb-user-menu-overlay-backdrop',
            'pxb-user-menu-overlay',
            'pxb-user-menu-header',
            'pxb-user-menu-header-avatar',
        ];
        const bottomSheetClassList = ['pxb-user-menu-bottomsheet', 'pxb-user-menu-bottomsheet-backdrop'];
        for (const className of fixtureClassList) {
            count(fixture, className);
        }
        for (const className of menuOverlayClassList) {
            void expect(document.getElementsByClassName(className).length).toBe(1);
        }
        for (const className of bottomSheetClassList) {
            void expect(document.getElementsByClassName(className).length).toBe(0);
        }
        component.useBottomSheet = true;
        component.isMenuOpen = false;
        component.openMenu();
        for (const className of bottomSheetClassList) {
            void expect(document.getElementsByClassName(className).length).toBe(1);
        }
    });
});
