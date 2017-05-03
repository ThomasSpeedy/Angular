var HelloComponent = ng.core.Component({
  selector: 'hello',
  template: 'Hello {{greet}}!'
}).Class({
  constructor: function () {
    this.greet = 'ECMAScript 5';
  }
});

var AppModule = ng.core.NgModule({
  imports: [ng.platformBrowser.BrowserModule],
  declarations: [HelloComponent],
  bootstrap: [HelloComponent]
}).Class({
  constructor:  function() {
  }
});

document.addEventListener('DOMContentLoaded', function () {
  ng.platformBrowserDynamic.platformBrowserDynamic()
    .bootstrapModule(AppModule);
});
