import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { FontSizeValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihFZ]' })
export class FontSizeDirective implements AfterViewInit {
  // Input for border radius
  @Input() ihFZ!: FontSizeValueType;

  /**
   * Creates an instance of FontSizeDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting font size if font size value is provided
    if (this.ihFZ) this.elementRef.nativeElement.style.fontSize = this.ihFZ;
  }
}
