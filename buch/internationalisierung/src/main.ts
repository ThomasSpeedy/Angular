import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode, LOCALE_ID, TRANSLATIONS_FORMAT, TRANSLATIONS} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/';

if (environment.production) {
  enableProdMode();
}

function makeRequest (method, url, done) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function () {
    done(null, xhr.response);
  };
  xhr.onerror = function () {
    done(xhr.response);
  };
  xhr.send();
}

const locale = (<any>document).locale;

makeRequest('GET', `assets/locales/messages.${locale}.xlf`, (err, translations) => {

  platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [
      {provide: TRANSLATIONS, useValue: translations},
      {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
      {provide: LOCALE_ID, useValue: locale}]

  });

});

