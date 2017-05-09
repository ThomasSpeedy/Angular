import { Input, ElementRef, Output, Directive, EventEmitter, OnChanges } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[chJQueryDatePicker]'
})
export class JQueryDatePickerDirective implements OnChanges {
  datePickerRef: any;
  @Input() date: string;
  @Output() onSelectDate = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this.datePickerRef = jQuery(this.elementRef.nativeElement).datepicker({
      prevText: '&#x3c;Zurück', prevStatus: '',
      prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
      nextText: 'Vor&#x3e;', nextStatus: '',
      nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
      currentText: 'Heute', currentStatus: '',
      todayText: 'Heute', todayStatus: '',
      clearText: '-', clearStatus: '',
      closeText: 'Schließen', closeStatus: '',
      monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
        'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      showMonthAfterYear: false,
      showOn: 'both',
//      buttonImage: 'media/img/calendar.png',
//      buttonImageOnly: true,
      dateFormat: 'dd.mm.yy',
      onSelect: (dateText, datePickerInst) => {
        console.log(dateText);
        //this.date = dateText;
        this.onSelectDate.emit(dateText);
      }
    });
  }
  ngOnChanges() {
    this.datePickerRef.datepicker('setDate', this.date);
  }
}
