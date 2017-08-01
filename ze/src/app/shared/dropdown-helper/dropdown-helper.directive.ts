import { HostListener, ElementRef, Renderer2, Directive } from '@angular/core';

@Directive({
  selector: '[zeDropdownHelper]'
})
export class DropdownHelperDirective {
  isOpen = false; // store state

  @HostListener('click', ['$event']) onClick($event) {
    this.toggleDropdown();
    this.setClass();
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave($event) {
    this.isOpen = false;
    this.setClass();
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  private toggleDropdown() {
    const bool = this.isOpen;
    this.isOpen = bool === false ? true : false;
  }
  private setClass() {
    if (this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }
}
