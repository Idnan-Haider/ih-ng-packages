import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { TextEllipse } from './text-ellipse.directive';

@Component({
  standalone: true,
  imports: [TextEllipse],
  template: `<p [ihTextEllipse]="multi()" [lines]="lines()">Long text</p>`,
})
class TextEllipseHostComponent {
  readonly multi = signal(false);
  readonly lines = signal(2);
}

describe('TextEllipse', () => {
  let fixture: ComponentFixture<TextEllipseHostComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEllipseHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextEllipseHostComponent);
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('p');
  });

  it('applies single-line ellipsis styles by default', () => {
    expect(element.style.display).toBe('block');
    expect(element.style.overflow).toBe('hidden');
    expect(element.style.textOverflow).toBe('ellipsis');
    expect(element.style.whiteSpace).toBe('nowrap');
  });

  it('applies multi-line clamp styles when enabled', () => {
    fixture.componentInstance.multi.set(true);
    fixture.componentInstance.lines.set(3);
    fixture.detectChanges();

    expect(element.style.display).toBe('-webkit-box');
    expect(element.style.whiteSpace).toBe('normal');
    expect(element.style.webkitLineClamp).toBe('3');
    expect(element.style.webkitBoxOrient).toBe('vertical');
  });
});
