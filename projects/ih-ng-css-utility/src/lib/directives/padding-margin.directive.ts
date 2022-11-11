import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { PaddingMarginValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihPM]' })
export class PaddingMarginDirective implements AfterViewInit {
  // Input for padding
  @Input() pValue!: PaddingMarginValueType;
  // Input for margin
  @Input() mValue!: PaddingMarginValueType;

  /**
   * Creates an instance of PMDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting padding if padding value is provided
    if (this.pValue) this.elementRef.nativeElement.style.padding = this.pValue;

    // Setting margin if margin value is provided
    if (this.mValue) this.elementRef.nativeElement.style.margin = this.mValue;
  }
}
