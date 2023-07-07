import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/templates/dashboard/dashboard.component';
import { BluiSurfacesComponent } from './pages/blui/surfaces/surfaces.component';
import { BluiDisplayComponent } from './pages/blui/data-display/display.component';
import { MatDisplayComponent } from './pages/mat/data-display/display.component';
import { MatFeedackComponent } from './pages/mat/feedback/feedback.component';
import { MatInputsComponent } from './pages/mat/inputs/inputs.component';
import { MatNavigationComponent } from './pages/mat/navigation/navigation.component';
import { MatSurfacesComponent } from './pages/mat/surfaces/surfaces.component';
import { BluiNavigationComponent } from './pages/blui/navigation/navigation.component';
import { AlarmsComponent } from './pages/templates/alarms/alarms.component';
import { SettingsComponent } from './pages/templates/settings/settings.component';
import { BluiTypographyComponent } from './pages/blui/typography.component';

const routes: Routes = [
    { path: '', redirectTo: 'templates/dashboard', pathMatch: 'full' },
    { path: 'blui-components/surface-components', component: BluiSurfacesComponent },
    { path: 'blui-components/data-display-components', component: BluiDisplayComponent },
    { path: 'blui-components/navigation-components', component: BluiNavigationComponent },
    { path: 'blui-components/typography', component: BluiTypographyComponent },
    { path: 'material-components/data-display-components', component: MatDisplayComponent },
    { path: 'material-components/feedback-components', component: MatFeedackComponent },
    { path: 'material-components/input-components', component: MatInputsComponent },
    { path: 'material-components/navigation-components', component: MatNavigationComponent },
    { path: 'material-components/surface-components', component: MatSurfacesComponent },
    { path: 'templates/alarms', component: AlarmsComponent },
    { path: 'templates/dashboard', component: DashboardComponent },
    { path: 'templates/settings', component: SettingsComponent },
];
// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
