import {enableProdMode, NgModule} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {BrowserModule} from '@angular/platform-browser';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
