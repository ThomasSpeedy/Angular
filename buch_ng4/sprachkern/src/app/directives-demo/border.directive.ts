import {Directive, ElementRef, Renderer, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[chBorder]'
})

export class BorderDirective implements OnChanges{
  @Input() chBorder = 1;
  constructor(private elementRef: ElementRef,
              private renderer: Renderer) {
  }
  ngOnChanges(change: any) {
    this.renderer.setElementStyle(this.elementRef.nativeElement,
      'border',
      `solid ${this.chBorder}px`);
  }
}
