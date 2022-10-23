import { Component, Inject } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

import { NotificationDataInterface } from '../interfaces/ih-ng-notification.interface';

@Component({
  selector: 'ih-ng-notification',
  templateUrl: './ih-ng-notification.component.html',
  styleUrls: ['./ih-ng-notification.component.scss'],
})
export class IHNotificationComponent {
  /**
   * Creates an instance of IHNotificationComponent.
   * @author IDNAN.HAIDER
   * @param snackBarRef
   * @param notificationData
   */
  constructor(
    private snackBarRef: MatSnackBarRef<IHNotificationComponent>,
    @Inject(MAT_SNACK_BAR_DATA)
    public notificationData: NotificationDataInterface
  ) {}

  /**
   * This method is to close or invoke call back
   *
   */
  customAction() {
    if (this.notificationData.closeable) {
      this.snackBarRef.dismiss();
    } else if (this.notificationData.action) {
      this.notificationData.action.cb();
    }
  }
}
