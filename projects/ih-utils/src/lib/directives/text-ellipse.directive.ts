import { Directive, input, booleanAttribute } from '@angular/core';

/**
 * Directive that automatically applies ellipsis styles.
 * 
 * Usage:
 * <div ihTextEllipse>Single line ellipsis</div>
 * <div [ihTextEllipse]="true" [lines]="3">Multi-line ellipsis</div>
 */
@Directive({
  selector: '[ihTextEllipse]',
  standalone: true,
  host: {
    // Inline styles applied directly to the host to ensure the directive is self-contained
    '[style.display]': 'multi() ? "-webkit-box" : "block"',
    '[style.overflow]': '"hidden"',
    '[style.text-overflow]': 'multi() ? null : "ellipsis"',
    '[style.white-space]': 'multi() ? "normal" : "nowrap"',
    '[style.-webkit-box-orient]': 'multi() ? "vertical" : null',
    '[style.-webkit-line-clamp]': 'multi() ? lines() : null',
  }
})
export class TextEllipse {
  /** Whether to use multi-line ellipsis. Defaults to false. */
  multi = input(false, { alias: 'ihTextEllipse', transform: booleanAttribute });

  /** Number of lines for the multi-line clamp. */
  lines = input<number>(2);
}