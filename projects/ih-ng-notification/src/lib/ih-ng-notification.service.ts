import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import {
  CustomActionInterface,
  NotificationType,
  NotificationDataInterface,
} from './interfaces/ih-ng-notification.interface';
import { IHNotificationComponent } from './ih-ng-notification/ih-ng-notification.component';

@Injectable()
export class IHNotificationService {
  /**
   * Creates an instance of IHNotificationService.
   * @author IDNAN.HAIDER
   * @param snackBar
   */
  constructor(private snackBar: MatSnackBar) {}

  public icons = {
    error: 'error',
    warning: 'warning',
    success: 'check_circle',
    info: 'info',
  };

  /**
   * @description This method is to show notification of error type
   * @author IDNAN.HAIDER
   * @param message
   * @param [heading]
   * @param [closeable=false]
   * @param [config={}]
   */
  public error(
    message: string,
    heading?: string,
    closeable: boolean = false,
    config: MatSnackBarConfig = {}
  ): void {
    this.show(message, 'error', heading, closeable, config);
  }

  /**
   * @description This method is to show notification of success type
   * @author IDNAN.HAIDER
   * @param message
   * @param [heading]
   * @param [closeable=false]
   * @param [config={}]
   */
  public success(
    message: string,
    heading?: string,
    closeable: boolean = false,
    config: MatSnackBarConfig = {}
  ): void {
    this.show(message, 'success', heading, closeable, config);
  }

  /**
   * @description This method is to show notification of warning type
   * @author IDNAN.HAIDER
   * @param message
   * @param [heading]
   * @param [closeable=false]
   * @param [config={}]
   */
  public warning(
    message: string,
    heading?: string,
    closeable: boolean = false,
    config: MatSnackBarConfig = {}
  ): void {
    this.show(message, 'warning', heading, closeable, config);
  }

  /**
   * @description This method is to show notification of info type
   * @author IDNAN.HAIDER
   * @param message
   * @param [heading]
   * @param [closeable=false]
   * @param [config={}]
   */
  public info(
    message: string,
    heading?: string,
    closeable: boolean = false,
    config: MatSnackBarConfig = {}
  ): void {
    this.show(message, 'info', heading, closeable, config);
  }

  /**
   * @description This method is to show notification of given type
   * @author IDNAN.HAIDER
   * @private
   * @param message
   * @param type
   * @param [heading]
   * @param [closeable=false]
   * @param [config={}]
   */
  private show(
    message: string,
    type: NotificationType,
    heading?: string,
    closeable: boolean = false,
    config: MatSnackBarConfig = {}
  ): void {
    this.snackBar.openFromComponent(IHNotificationComponent, {
      ...this.getNotificationConfig(message, type, heading, closeable),
      ...config,
    });
  }

  /**
   * @description This method is to show notification of given type with custom call back support
   * Only mat-icon name is supported
   * @author IDNAN.HAIDER
   * @param message
   * @param type
   * @param action
   * @param [heading]
   * @param [config={}]
   */
  public showNotificationWithCustomActionIcon(
    message: string,
    type: NotificationType,
    action: CustomActionInterface,
    heading?: string,
    config: MatSnackBarConfig = {}
  ): void {
    this.snackBar.openFromComponent(IHNotificationComponent, {
      ...this.getNotificationConfig(message, type, heading, false, action),
      ...config,
    });
  }

  /**
   * @description This method is to get configurational data for snackbar custom component
   * @author IDNAN.HAIDER
   * @private
   * @param message
   * @param messageType
   * @param [heading]
   * @param [closeButton=true]
   * @param [action]
   * @return {*}
   */
  private getNotificationConfig(
    message: string,
    messageType: NotificationType,
    heading?: string,
    closeButton: boolean = true,
    action?: CustomActionInterface
  ): MatSnackBarConfig {
    const notificationData: MatSnackBarConfig = {
      data: {
        heading,
        message,
        closeable: closeButton,
        icon: this.icons[messageType],
      } as NotificationDataInterface,
      panelClass: `${messageType}-notification`,
      direction: 'ltr', // TODO will add directional support,
    };
    if (action) {
      notificationData.data['action'] = action;
    }
    return notificationData;
  }
}
