import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { StateService } from '../services/state.service';
import { AppModule } from '../app.module';

describe('DrawerComponent', () => {
    let component: DrawerComponent;
    let fixture: ComponentFixture<DrawerComponent>;

    const eventSubject = new ReplaySubject<RouterEvent>(1);

    const routerMock = {
        navigate: jasmine.createSpy('navigate'),
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
        events: eventSubject.asObservable(),
        url: 'test/url',
    };

    const StateServiceMock = {
        setDrawerOpen: jasmine.createSpy('setDrawerOpen'),
        getDrawerOpen: jasmine.createSpy('getDrawerOpen'),
        drawerOpen: true,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                { provide: Router, useValue: routerMock },
                { provide: StateService, useValue: StateServiceMock },
            ],
        });

        fixture = TestBed.createComponent(DrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    describe('navigation', () => {
        it('should set correct selectedItemId on navigation', () => {
            eventSubject.next(new NavigationEnd(1, '/templates/dashboard', '/templates/dashboard'));
            fixture.detectChanges();
            void expect(component.selectedItemId).toBe('Page TemplatesDashboard');
        });

        it('should navigate to BLUI Data Display page', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuData'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            void expect(navigateSpy).toHaveBeenCalledWith('/blui-components/data-display-components');
        });

        it('should navigate to BLUI Navigation Components page', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuNavigation'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            void expect(navigateSpy).toHaveBeenCalledWith('/blui-components/navigation-components');
        });

        it('should navigate to BLUI Surface Components page', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuSurfaces'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            void expect(navigateSpy).toHaveBeenCalledWith('/blui-components/surface-components');
        });

        it('should navigate to Mat Feedback Components page', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuFeedback'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            fixture.detectChanges();
            void expect(navigateSpy).toHaveBeenCalledWith('/material-components/feedback-components');
        });

        it('should navigate to Mat Input Components page', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuInputs'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            void expect(navigateSpy).toHaveBeenCalledWith('/material-components/input-components');
        });

        it('should navigate to Alarms template', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuAlarms'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            void expect(navigateSpy).toHaveBeenCalledWith('/templates/alarms');
        });

        it('should navigate to Dashboard template', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuDashboard'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            void expect(navigateSpy).toHaveBeenCalledWith('/templates/dashboard');
        });

        it('should navigate to Settings template', () => {
            fixture.detectChanges();
            const navMenuItem = fixture.debugElement.query(By.css('.nav-menuSettings'));
            const navigateSpy = spyOn(component, 'navigate').and.stub();
            navMenuItem.triggerEventHandler('select', undefined);
            void expect(navigateSpy).toHaveBeenCalledWith('/templates/settings');
        });
    });

    describe('nav group expansion', () => {
        it('should expand BLUI components nav group', () => {
            fixture.detectChanges();
            component.navItems[0].expanded = false;
            component.determineRoute('/blui-components/data-display-components');
            void expect(component.navItems[0].expanded).toBe(true);
            component.navItems[0].expanded = false;
            component.determineRoute('/blui-components/navigation-components');
            void expect(component.navItems[0].expanded).toBe(true);
            component.navItems[0].expanded = false;
            component.determineRoute('/blui-components/surface-components');
            void expect(component.navItems[0].expanded).toBe(true);
        });
        it('should expand material components nav group', () => {
            fixture.detectChanges();
            component.navItems[0].expanded = false;
            component.determineRoute('/material-components/data-display-components');
            void expect(component.navItems[1].expanded).toBe(true);
            component.navItems[1].expanded = false;
            component.determineRoute('/material-components/feedback-components');
            void expect(component.navItems[1].expanded).toBe(true);
            component.navItems[1].expanded = false;
            component.determineRoute('/material-components/input-components');
            void expect(component.navItems[1].expanded).toBe(true);
            component.navItems[1].expanded = false;
            component.determineRoute('/material-components/navigation-components');
            void expect(component.navItems[1].expanded).toBe(true);
            component.navItems[1].expanded = false;
            component.determineRoute('/material-components/surface-components');
            void expect(component.navItems[1].expanded).toBe(true);
            component.navItems[1].expanded = false;
        });
        it('should expand material components nav group', () => {
            fixture.detectChanges();
            component.navItems[0].expanded = false;
            component.determineRoute('/templates/alarms');
            void expect(component.navItems[2].expanded).toBe(true);
            component.navItems[2].expanded = false;
            component.determineRoute('/templates/dashboard');
            void expect(component.navItems[2].expanded).toBe(true);
            component.navItems[2].expanded = false;
            component.determineRoute('/templates/settings');
            void expect(component.navItems[2].expanded).toBe(true);
            component.navItems[2].expanded = false;
        });
    });
});
