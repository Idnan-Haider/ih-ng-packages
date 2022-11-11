import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { HeightWidthValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihHW]' })
export class HeightWidthDirective implements AfterViewInit {
  // Input for padding
  @Input() hValue!: HeightWidthValueType;
  // Input for margin
  @Input() wValue!: HeightWidthValueType;

  /**
   * Creates an instance of HeightWidthDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    // Setting height if height value is provided
    if (this.hValue) this.elementRef.nativeElement.style.height = this.hValue;

    // Setting width if width value is provided
    if (this.wValue) this.elementRef.nativeElement.style.width = this.wValue;
  }
}
