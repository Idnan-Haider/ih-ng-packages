import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { beforeEach, describe, expect, it } from 'vitest';

import { Masking } from './masking.directive';

@Component({
  standalone: true,
  imports: [Masking, FormsModule],
  template: `<input type="text" [ihMasking]="mask()" [(ngModel)]="phone" />`,
})
class MaskingHostComponent {
  readonly mask = signal('(000) 000-0000');
  phone = '';
}

describe('Masking', () => {
  let fixture: ComponentFixture<MaskingHostComponent>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskingHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaskingHostComponent);
    fixture.detectChanges();
    input = fixture.nativeElement.querySelector('input');
  });

  it('formats digits according to the mask pattern', () => {
    input.value = '1234567890';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(input.value).toBe('(123) 456-7890');
  });

  it('syncs the masked value with ngModel', () => {
    input.value = '5551234567';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(fixture.componentInstance.phone).toBe('(555) 123-4567');
  });

  it('preserves cursor position relative to entered digits', () => {
    input.value = '(12) 456-7890';
    input.setSelectionRange(3, 3);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    expect(input.value).toBe('(124) 567-890');
    expect(input.selectionStart).toBe(3);
  });
});
