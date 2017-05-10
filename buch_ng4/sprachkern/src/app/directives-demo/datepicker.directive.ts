import { Input, ElementRef, Output, Directive, EventEmitter, OnChanges, OnDestroy, HostListener } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[hmiDatePicker]'
})
export class DatePickerDirective implements OnChanges, OnDestroy {
  datePickerRef: any;
  @Input() date: string;
  @Output() dateChange = new EventEmitter();

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
        this.date = dateText;
        this.notifyChange(dateText);
      }
    });
  }
  // Wenn der Benutzer direkt im Input-Feld editiert, wird onSelect nicht aufgerufen
  // Deshalb muss auch onChange behandelt werden
  @HostListener('change', ['$event']) onChange($event) {
    const aDate = this.datePickerRef.datepicker('getDate');
    this.setDate(aDate);
  }
  // Wird aufgerufen, wenn eine gebundene Variable geändert wird und der Datumswert
  // sich auch ändern soll
  ngOnChanges() {
    this.datePickerRef.datepicker('setDate', this.date);
  }
  ngOnDestroy() {
    this.datePickerRef.datepicker('destroy');
  }
  // Informiert die Listener über Änderungen
  notifyChange(date: string) {
    this.dateChange.emit(date);
  }
  setDate(aDate: Date | string): void;
  setDate(aDate): void {
    if (typeof aDate === 'string') {
      this.date = aDate;
    } else {
      this.date = aDate != null ? aDate.toLocaleDateString() : '';
    }
    this.notifyChange(this.date);
  }
}
