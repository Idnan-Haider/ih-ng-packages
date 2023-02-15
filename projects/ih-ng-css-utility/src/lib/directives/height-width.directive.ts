import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HeightWidthValueType } from '../Interfaces/utility.interface';

@Directive({ selector: '[ihHW]' })
export class HeightWidthDirective implements AfterViewInit, OnChanges {
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
   * @description  setting the height or width if value is changed dynamically
   * @author IDNAN.HAIDER
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hValue'] || changes['wValue']) this.setHeightWidth();
  }

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    this.setHeightWidth();
  }

  /**
   * @description
   * @author IDNAN.HAIDER
   * @private
   */
  private setHeightWidth() {
    // Setting height if height value is provided
    if (this.hValue) this.elementRef.nativeElement.style.height = this.hValue;

    // Setting width if width value is provided
    if (this.wValue) this.elementRef.nativeElement.style.width = this.wValue;
  }
}
