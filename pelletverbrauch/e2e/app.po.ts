import { browser, element, by } from 'protractor';

export class TestprojPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hmi-root h1')).getText();
  }
}
