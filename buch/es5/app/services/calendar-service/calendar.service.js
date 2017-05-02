(function (app) {
  app.CalendarService = ng.core.
  Class({
    constructor: [ng.http.Http, function (http) {
      this.http = http;
    }],
    getCalendarEntry: function () {
      return this.http.get('app/services/calendar-service/entry.json')
        .map(function (res) {
           return res.json();
        });
    }
  });
})(window.app || (window.app = {}));
