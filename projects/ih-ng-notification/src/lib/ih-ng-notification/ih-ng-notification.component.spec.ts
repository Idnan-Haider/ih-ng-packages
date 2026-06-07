import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IHNotificationComponent } from './ih-ng-notification.component';

describe('IHNotificationComponent', () => {
  let fixture: ComponentFixture<IHNotificationComponent>;

  const setup = (data: {
    message: string;
    icon: string;
    closeable?: boolean;
    action?: { icon: string; tooltip: string; cb: () => void };
  }) => {
    TestBed.configureTestingModule({
      declarations: [IHNotificationComponent],
      imports: [MatIconModule, MatTooltipModule],
      providers: [
        { provide: MatSnackBarRef, useValue: { dismiss: jasmine.createSpy('dismiss') } },
        { provide: MAT_SNACK_BAR_DATA, useValue: data },
      ],
    });

    fixture = TestBed.createComponent(IHNotificationComponent);
    fixture.detectChanges();
  };

  it('hides the action icon when closeable is false and no action is provided', () => {
    setup({
      message: 'Persisted message',
      icon: 'info',
      closeable: false,
    });

    const icons = fixture.nativeElement.querySelectorAll('mat-icon');
    expect(icons.length).toBe(1);
    expect(icons[0].textContent?.trim()).toBe('info');
  });

  it('shows the close icon when closeable is true', () => {
    setup({
      message: 'Closable message',
      icon: 'success',
      closeable: true,
    });

    const icons = fixture.nativeElement.querySelectorAll('mat-icon');
    expect(icons.length).toBe(2);
    expect(icons[1].textContent?.trim()).toBe('close');
  });

  it('shows the custom action icon when an action is provided', () => {
    setup({
      message: 'Action message',
      icon: 'info',
      closeable: false,
      action: {
        icon: 'home',
        tooltip: 'Go home',
        cb: () => undefined,
      },
    });

    const icons = fixture.nativeElement.querySelectorAll('mat-icon');
    expect(icons.length).toBe(2);
    expect(icons[1].textContent?.trim()).toBe('home');
  });
});
