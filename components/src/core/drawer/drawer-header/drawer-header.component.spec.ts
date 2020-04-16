import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerHeaderComponent } from './drawer-header.component';
import { DrawerHeaderModule } from './drawer-header.module';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <pxb-drawer-header></pxb-drawer-header>
    `,
})
class TestDrawerHeader {}

@Component({
    template: `
        <pxb-drawer-header>
            <div titleContent id="test-title-content">test title content</div>
        </pxb-drawer-header>
    `,
})
class TestDrawerHeaderWithTitleContent {}

describe('DrawerHeaderComponent', () => {
    let component: DrawerHeaderComponent;
    let fixture: ComponentFixture<DrawerHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestDrawerHeader, TestDrawerHeaderWithTitleContent],
            imports: [DrawerHeaderModule, MatIconModule],
        }).compileComponents();
        fixture = TestBed.createComponent(DrawerHeaderComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        component.title = 'test title';
        fixture.detectChanges();
        const title = fixture.debugElement.query(By.css('.pxb-drawer-header-title'));
        expect(title.nativeElement.innerHTML.trim()).toBe('test title');
    });

    it('should render subtitle', () => {
        component.subtitle = 'test subtitle';
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.pxb-drawer-header-subtitle'));
        expect(subtitle.nativeElement.innerHTML.trim()).toBe('test subtitle');
    });

    it('should render titleContent', () => {
        const customFixture = TestBed.createComponent(TestDrawerHeaderWithTitleContent);
        customFixture.detectChanges();
        const content: HTMLElement = customFixture.nativeElement.querySelector('#test-title-content');
        expect(content.innerHTML).toBe('test title content');
    });

    it('should render mat-icon-button icon', () => {
        component.icon = 'home';
        fixture.detectChanges();
        const icon = fixture.debugElement.query(By.css('.pxb-drawer-header-icon-button'));
        expect(icon.nativeElement.innerText).toBe('home');
        expect(icon.nativeElement.classList).toContain('mat-icon-button');

    });

    it('should render passive icon', () => {
        component.passiveIcon = 'work';
        fixture.detectChanges();
        const passiveIcon = fixture.debugElement.query(By.css('.pxb-drawer-header-non-clickable-icon'));
        expect(passiveIcon.nativeElement.innerText).toBe('work');
        expect(passiveIcon.nativeElement.innerHTML).toEqual('<mat-icon class="mat-icon notranslate material-icons mat-icon-no-color" role="img" aria-hidden="true">work</mat-icon>');
    })

    // it('should emit onIconClick when icon-button is pressed', () => {

    // });
    
});
