import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FontSizeValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihFS]' })
export class FontSizeDirective implements AfterViewInit, OnChanges {
  // Input for font size
  @Input() ihFS!: FontSizeValueType;

  /**
   * Creates an instance of FontSizeDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting the font size if value is changed dynamically
   * @author IDNAN.HAIDER
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ihFS']) this.setFontSize();
  }

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting font size if font size value is provided
    this.setFontSize();
  }

  /**
   * @description
   * @author IDNAN.HAIDER
   * @private
   */
  private setFontSize() {
    if (this.ihFS) this.elementRef.nativeElement.style.fontSize = this.ihFS;
  }
}
