import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BorderRadiusValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihBR]' })
export class BorderRadiusDirective implements AfterViewInit, OnChanges {
  // Input for border radius
  @Input() ihBR!: BorderRadiusValueType;

  /**
   * Creates an instance of BorderRadiusDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting the border radius if value is changed dynamically
   * @author IDNAN.HAIDER
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ihBR']) this.setBorderRadius();
  }

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting border radius if border radius value is provided
    this.setBorderRadius();
  }

  /**
   * @description
   * @author IDNAN.HAIDER
   * @private
   */
  private setBorderRadius() {
    if (this.ihBR) this.elementRef.nativeElement.style.borderRadius = this.ihBR;
  }
}
