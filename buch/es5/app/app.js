(function (app) {
  document.addEventListener('DOMContentLoaded', function () {
    var AppModule = ng.core.NgModule({
      imports: [ng.http.HttpModule, ng.platformBrowser.BrowserModule],
      providers: [
        app.CalendarService
      ],
      declarations: [app.TimePickerComponent],
      bootstrap: [app.CalendarComponent]
    })
    .Class({
      constructor:  function() {}
    });
    ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);
  })
})(window.app || (window.app = {}));

