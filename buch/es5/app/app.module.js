(function (app) {
  app.AppModule = ng.core.NgModule({
    imports: [ng.http.HttpModule,
              ng.platformBrowser.BrowserModule],
    providers: [
      app.CalendarService
    ],
    declarations: [app.CalendarComponent, app.TimePickerComponent],
    bootstrap: [app.CalendarComponent]
  })
  .Class({ constructor:  function() {} });
})(window.app || (window.app = {}));
