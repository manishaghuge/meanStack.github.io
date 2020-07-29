import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimpleStyle]',
})
export class SimpleStyleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // elementRef.nativeElement.style.color = 'red';
    // renderer.setStyle(elementRef.nativeElement, 'background', 'pink');
    this.setBgColor('1px solid orange', '1px 1px 2px gray');
  }

  setBgColor(color: string, shadow: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', color);
    this.renderer.setStyle(this.elementRef.nativeElement, 'boxShadow', shadow);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('1px solid #e91e63 ', ' 1px 4px 7px #15141475');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('1px solid orange', '1px 1px 2px gray');
  }
}
