import { Directive, input, HostListener, ElementRef, inject, effect } from '@angular/core';

@Directive({
  selector: 'input[ihMasking]',
  standalone: true
})
export class Masking {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  /** The mask pattern (e.g., '(000) 000-0000'). '0' represents a digit. */
  public readonly mask = input.required<string>({ alias: 'ihMasking' });

  constructor() {
    effect(() => {
      // Automatically re-mask the current value if the mask pattern changes
      this.applyMask();
    });
  }

  @HostListener('input')
  protected onInput(): void {
    this.applyMask(true);
  }

  private applyMask(preserveCursor = false): void {
    const input = this.el.nativeElement;
    const pattern = this.mask();
    const digitsBeforeCursor = preserveCursor
      ? this.getDigitCountBeforeCursor(input.value, input.selectionStart ?? 0)
      : null;
    const digits = input.value.replace(/\D/g, '');
    const maskedValue = this.buildMaskedValue(digits, pattern);

    if (input.value === maskedValue) {
      return;
    }

    input.value = maskedValue;

    if (preserveCursor && digitsBeforeCursor !== null) {
      const cursor = this.getCursorPosition(maskedValue, pattern, digitsBeforeCursor);
      input.setSelectionRange(cursor, cursor);
    }

    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private buildMaskedValue(digits: string, pattern: string): string {
    let maskedValue = '';
    let valueIdx = 0;

    for (let i = 0; i < pattern.length && valueIdx < digits.length; i++) {
      if (pattern[i] === '0') {
        maskedValue += digits[valueIdx++];
      } else {
        maskedValue += pattern[i];
      }
    }

    return maskedValue;
  }

  private getDigitCountBeforeCursor(value: string, cursor: number): number {
    return value.slice(0, cursor).replace(/\D/g, '').length;
  }

  private getCursorPosition(maskedValue: string, pattern: string, digitCount: number): number {
    if (digitCount <= 0) {
      return 0;
    }

    let digitsSeen = 0;
    for (let i = 0; i < maskedValue.length; i++) {
      if (pattern[i] === '0') {
        digitsSeen++;
        if (digitsSeen >= digitCount) {
          return i + 1;
        }
      }
    }

    return maskedValue.length;
  }
}