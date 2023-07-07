import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AppModule } from './app.module';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    const eventSubject = new ReplaySubject<RouterEvent>(1);

    const routerMock = {
        navigate: jasmine.createSpy('navigate'),
        events: eventSubject.asObservable(),
        url: 'test/url',
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [{ provide: Router, useValue: routerMock }],
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create the app', () => {
        const app = fixture.debugElement.componentInstance;
        void expect(app).toBeTruthy();
    });

    it('should display title Dashboard in toolbar', () => {
        eventSubject.next(new NavigationEnd(1, '/templates/dashboard', '/templates/dashboard'));
        void expect(component.title).toBe('Dashboard');
    });

    it('should display title Brightlayer UI Data Display in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(1, '/blui-components/data-display-components', '/blui-components/data-display-components')
        );
        void expect(component.title).toBe('Brightlayer UI Data Display');
    });

    it('should display title Brightlayer UI Navigation in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(1, '/blui-components/navigation-components', '/blui-components/navigation-components')
        );
        void expect(component.title).toBe('Brightlayer UI Navigation');
    });

    it('should display title Brightlayer UI Surfaces in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(1, '/blui-components/surface-components', '/blui-components/surface-components')
        );
        void expect(component.title).toBe('Brightlayer UI Surfaces');
    });

    it('should display title Material Data Display in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(
                1,
                '/material-components/data-display-components',
                '/material-components/data-display-components'
            )
        );
        void expect(component.title).toBe('Material Data Display');
    });

    it('should display title Material Feedback in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(1, '/material-components/feedback-components', '/material-components/feedback-components')
        );
        void expect(component.title).toBe('Material Feedback');
    });

    it('should display title Material Inputs in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(1, '/material-components/input-components', '/material-components/input-components')
        );
        void expect(component.title).toBe('Material Inputs');
    });

    it('should display title Material Navigation in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(
                1,
                '/material-components/navigation-components',
                '/material-components/navigation-components'
            )
        );
        void expect(component.title).toBe('Material Navigation');
    });

    it('should display title Material Surfaces in toolbar', () => {
        eventSubject.next(
            new NavigationEnd(1, '/material-components/surface-components', '/material-components/surface-components')
        );
        void expect(component.title).toBe('Material Surfaces');
    });

    it('should display title Alarms in toolbar', () => {
        eventSubject.next(new NavigationEnd(1, '/templates/alarms', '/templates/alarms'));
        void expect(component.title).toBe('Alarms');
    });

    it('should display title Settings in toolbar', () => {
        eventSubject.next(new NavigationEnd(1, '/templates/settings', '/templates/settings'));
        void expect(component.title).toBe('Settings');
    });

    it('should return isMobile', () => {
        const isMobile = component.isMobile();
        void expect(isMobile).toBe(false);
    });

    it('should return persistent variant for desktop', () => {
        const variant = component.getVariant();
        void expect(variant).toBe('persistent');
    });

    it('should toggle theme', () => {
        fixture.detectChanges();
        const toggleThemeBtn = fixture.debugElement.query(By.css('.toggle-theme'));
        const toggleThemeSpy = spyOn(component, 'toggleTheme').and.stub();
        toggleThemeBtn.triggerEventHandler('click', undefined);
        fixture.detectChanges();
        void expect(toggleThemeSpy).toHaveBeenCalledTimes(1);
    });

    it('should toggle theme to dark mode', () => {
        fixture.detectChanges();
        const toggleThemeBtn = fixture.debugElement.query(By.css('.toggle-theme'));
        toggleThemeBtn.triggerEventHandler('click', undefined);
        fixture.detectChanges();
        void expect(component.isDarkMode()).toBe(true);
    });

    it('should toggle rtl to ltr', () => {
        fixture.detectChanges();
        component.isRtl = true;
        const toggleDirectionBtn = fixture.debugElement.query(By.css('.toggle-direction'));
        toggleDirectionBtn.triggerEventHandler('click', undefined);
        fixture.detectChanges();
        void expect(component.isRtl).toBe(false);
    });

    it('should toggle ltr to rtl', () => {
        fixture.detectChanges();
        component.isRtl = false;
        const toggleDirectionBtn = fixture.debugElement.query(By.css('.toggle-direction'));
        toggleDirectionBtn.triggerEventHandler('click', undefined);
        fixture.detectChanges();
        void expect(component.isRtl).toBe(true);
    });
});
