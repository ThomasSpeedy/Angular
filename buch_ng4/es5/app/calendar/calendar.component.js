(function (app) {

app.CalendarComponent = ng.core.Component({
  selector: 'ch-calendar',
  templateUrl: 'app/calendar/calendar.component.html',
  styleUrls: ['app/calendar/calendar.component.css'],
  queries : {
    timePicker : new ng.core.ViewChild(app.TimePickerComponent)
  }
})
.Class({
  constructor: [app.CalendarService, function(calendarService) {
    this.calendarEntry =  {
      startTime: '23:12:55'
    };

    var self = this;
    calendarService.getCalendarEntry()
      .subscribe(function(entry) {
        self.calendarEntry = entry;
        console.log(self.calendarEntry);
      });
  }],
  ngAfterViewInit: function() {
    console.log('Ausgewählte Zeit: ' + this.timePicker.getTime());
  }
});

})(window.app || (window.app = {}));