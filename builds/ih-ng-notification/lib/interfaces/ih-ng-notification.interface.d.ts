export declare type NotificationType = 'success' | 'error' | 'warning' | 'info';
/**
 * This interface is for custom notification action button config
 *
 * @export
 * @interface CustomActionInterface
 */
export interface CustomActionInterface {
    icon: string;
    tooltip: string;
    cb: Function;
}
/**
 * This interface is for notification data
 *
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
