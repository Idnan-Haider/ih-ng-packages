import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { BorderRadiusValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihBR]' })
export class BorderRadiusDirective implements AfterViewInit {
  // Input for border radius
  @Input() ihBR!: BorderRadiusValueType;

  /**
   * Creates an instance of BorderRadiusDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting border radius if border radius value is provided
    if (this.ihBR) this.elementRef.nativeElement.style.borderRadius = this.ihBR;
  }
}
