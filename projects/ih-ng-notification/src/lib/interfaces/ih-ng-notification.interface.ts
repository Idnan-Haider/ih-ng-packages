/**
 * @description This interface is for custom notification action button config
 * @author IDNAN.HAIDER
 * @export
 * @interface CustomActionInterface
 */
export interface CustomActionInterface {
  icon: string;
  tooltip: string;
  cb: Function;
}

/**
 * @description This interface is for notification data
 * @author IDNAN.HAIDER
 * @export
 * @interface NotificationDataInterface
 */
export interface NotificationDataInterface {
  heading?: string;
  message: string;
  icon: string;
  closeable?: boolean;
  action?: CustomActionInterface;
}

export type NotificationType = 'success' | 'error' | 'warning' | 'info';
