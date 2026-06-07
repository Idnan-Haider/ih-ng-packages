import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { IHNotificationService } from './ih-ng-notification.service';
import { IHNotificationComponent } from './ih-ng-notification/ih-ng-notification.component';

describe('IHNotificationService', () => {
  let service: IHNotificationService;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    snackBar = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);

    TestBed.configureTestingModule({
      providers: [
        IHNotificationService,
        { provide: MatSnackBar, useValue: snackBar },
      ],
    });

    service = TestBed.inject(IHNotificationService);
  });

  it('opens snackbar with error notification config', () => {
    service.error('Something failed', 'Error', true);

    expect(snackBar.openFromComponent).toHaveBeenCalledWith(
      IHNotificationComponent,
      jasmine.objectContaining({
        data: jasmine.objectContaining({
          message: 'Something failed',
          heading: 'Error',
          closeable: true,
          icon: 'error',
        }),
        panelClass: 'error-notification',
      })
    );
  });

  it('opens snackbar with custom action data', () => {
    const action = {
      icon: 'undo',
      tooltip: 'Undo',
      cb: () => undefined,
    };

    service.showNotificationWithCustomActionIcon('Undone', 'info', action, 'Info');

    expect(snackBar.openFromComponent).toHaveBeenCalledWith(
      IHNotificationComponent,
      jasmine.objectContaining({
        data: jasmine.objectContaining({
          message: 'Undone',
          heading: 'Info',
          closeable: false,
          icon: 'info',
          action,
        }),
      })
    );
  });
});
