import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FontWeightValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihFW]' })
export class FontWeightDirective implements AfterViewInit, OnChanges {
  // Input for font-weight
  @Input() ihFW!: FontWeightValueType;

  /**
   * Creates an instance of FontWeightDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description  setting the font-weight if value is changed dynamically
   * @author IDNAN.HAIDER
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ihFW']) this.setFontWeight();
  }

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting font weight if font weight value is provided
    this.setFontWeight();
  }

  /**
   * @description
   * @author IDNAN.HAIDER
   * @private
   */
  private setFontWeight() {
    if (this.ihFW) this.elementRef.nativeElement.style.fontWeight = this.ihFW;
  }
}
