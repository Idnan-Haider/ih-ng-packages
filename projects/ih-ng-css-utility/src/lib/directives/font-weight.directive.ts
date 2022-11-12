import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { FontWeightValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihFW]' })
export class FontWeightDirective implements AfterViewInit {
  // Input for border radius
  @Input() ihFW!: FontWeightValueType;

  /**
   * Creates an instance of FontWeightDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting font weight if font weight value is provided
    if (this.ihFW) this.elementRef.nativeElement.style.fontWeight = this.ihFW;
  }
}
