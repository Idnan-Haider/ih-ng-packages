import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import {
  AlignContentType,
  AlignItemsType,
  FlexDirectionType,
  FlexFlowType,
  FlexWrapType,
  GapType,
  JustifyContentType,
} from '../Interfaces/flex.interface';

@Directive({ selector: '[ihFlex]' })
export class FlexDirective implements AfterViewInit {
  /**
   * @description This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept.
   * Think of flex items as primarily laying out either in horizontal rows or vertical columns.
   * @author IDNAN.HAIDER
   */
  @Input() flexDirection!: FlexDirectionType;

  /**
   * @description This is a shorthand for the flex-direction and flex-wrap properties,
   * which together define the flex container’s main and cross axes. The default value is row nowrap.
   * @author IDNAN.HAIDER
   */
  @Input() flexFlow!: FlexFlowType;

  /**
   * @description By default, flex items will all try to fit onto one line.
   * You can change that and allow the items to wrap as needed with this property.
   * @author IDNAN.HAIDER
   */
  @Input() flexWrap!: FlexWrapType;

  /**
   * @description This defines the alignment along the main axis.
   * It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size.
   * It also exerts some control over the alignment of items when they overflow the line.
   *
   * @author IDNAN.HAIDER
   */
  @Input() justifyContent!: JustifyContentType;

  /**
   * @description This defines the default behavior for how flex items are laid out along the cross axis on the current line.
   * Think of nit as the justify-content version for the cross-axis (perpendicular to the main-axis).
   *
   * @author IDNAN.HAIDER
   */
  @Input() alignItems!: AlignItemsType;

  /**
   * @description This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
   *
   * Note: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse).
   * A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.
   * @author IDNAN.HAIDER
   */
  @Input() alignContent!: AlignContentType;

  /**
   * @description The gap property explicitly controls the space between flex items.
   * It applies that spacing only between items not on the outer edges.
   * The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.
   * It is not exclusively for flex-box, gap works in grid and multi-column layout as well.
   * @author IDNAN.HAIDER
   */
  @Input() gap!: GapType;

  /**
   * Creates an instance of FlexDirective.
   * @author IDNAN.HAIDER
   * @param elementRef
   */
  constructor(private readonly elementRef: ElementRef) {}

  /**
   * @description setting css after view init
   * @author IDNAN.HAIDER
   */
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.style.flexDirection =
      this.flexDirection || 'row';
    this.setProperties();
  }

  /**
   * @description This method is to set given input properties
   * @author IDNAN.HAIDER
   * @private
   */
  private setProperties() {
    if (this.flexFlow)
      this.elementRef.nativeElement.style.flexFlow = this.flexFlow;
    if (this.flexWrap)
      this.elementRef.nativeElement.style.flexWrap = this.flexWrap;
    if (this.justifyContent)
      this.elementRef.nativeElement.style.justifyContent = this.justifyContent;
    if (this.alignItems)
      this.elementRef.nativeElement.style.alignItems = this.alignItems;
    if (this.alignContent)
      this.elementRef.nativeElement.style.alignContent = this.alignContent;
    if (this.gap) this.elementRef.nativeElement.style.gap = this.gap;
  }
}
