(function (app) {
  app.TimePickerComponent = ng.core.Component({
    selector: 'ch-time-picker',
    templateUrl: 'app/time-picker/time-picker.component.html',
    styleUrls: ['app/time-picker/time-picker.component.css'],
    encapsulation: ng.core.ViewEncapsulation.Native,
    inputs: ['timeString: time'],
    outputs: ['changeEvent: timeChange']
  })
  .Class({

    constructor: function () {
      this.changeEvent = new ng.core.EventEmitter();
    },

    ngOnChanges: function (change) {
      if (!this.timeString) {
        return;
      }
      var timeParts = this.timeString.split(":");
      if (timeParts.length === 3) {
        this.time = {
          hours: parseInt(timeParts[0]),
          minutes: parseInt(timeParts[1]),
          seconds: parseInt(timeParts[2])
        };
      }
    },
    emitTimeChange: function () {
      this.changeEvent.emit(this.getTime());
    },

    changeTime: function (field, inputValue, maxValue) {
      var value = Math.max(inputValue, 0);
      value = Math.min(value, maxValue);
      this.time[field] = value;
      this.emitTimeChange();
    },

    getHours: function () {
      return this.time.hours;
    },
    reset: function () {
      this.time = {
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      this.emitTimeChange();
    },

    decrementTime: function (field, maxValue) {
      if (this.time[field] == 0) {
        this.time[field] = maxValue
      } else {
        this.time[field] = this.time[field] - 1;
      }
      this.emitTimeChange();
    },

    incrementTime: function (field, maxValue) {
      this.time[field] = (this.time[field] + 1) % (maxValue + 1);
      this.emitTimeChange();
    },

    fillUpZeros: function (value) {
      return ('0' + value).slice(-2);
    },

    getTime: function () {
      if (!this.time) {
        return;
      }
      var hours = this.fillUpZeros(this.time.hours);
      var minutes = this.fillUpZeros(this.time.minutes);
      var seconds = this.fillUpZeros(this.time.seconds);
      return hours + ':' + minutes + ':' + seconds;
    }
  });
})(window.app || (window.app = {}));
