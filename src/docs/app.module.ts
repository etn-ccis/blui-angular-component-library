/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//brightlayer-ui modules
import { DrawerModule, EmptyStateModule } from '@brightlayer-ui/angular-components';

//material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';

// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavigationComponent } from './navigation/navigation.component';
import { ComponentDocsModule } from './pages/component-docs/component-docs.module';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { environment } from '../environments/environment';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

@NgModule({
    declarations: [AppComponent, NavigationComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ComponentDocsModule,
        CommonModule,
        DrawerModule,
        EmptyStateModule,
        FormsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule,
        MatChipsModule,
        NgxGoogleAnalyticsModule.forRoot(environment.ga),
        NgxGoogleAnalyticsRouterModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
