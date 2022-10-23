import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomActionInterface, NotificationType } from './interfaces/ih-ng-notification.interface';
import * as i0 from "@angular/core";
export declare class IHNotificationService {
    private snackBar;
    constructor(snackBar: MatSnackBar);
    icons: {
        error: string;
        warning: string;
        success: string;
        info: string;
    };
    /**
     * @description This method is to show notification of error type
     * @author IDNAN.HAIDER
     * @param message
     * @param [heading]
     * @param [closeable=false]
     * @param [config={}]
     */
    error(message: string, heading?: string, closeable?: boolean, config?: MatSnackBarConfig): void;
    /**
     * @description This method is to show notification of success type
     * @author IDNAN.HAIDER
     * @param message
     * @param [heading]
     * @param [closeable=false]
     * @param [config={}]
     */
    success(message: string, heading?: string, closeable?: boolean, config?: MatSnackBarConfig): void;
    /**
     * @description This method is to show notification of warning type
     * @author IDNAN.HAIDER
     * @param message
     * @param [heading]
     * @param [closeable=false]
     * @param [config={}]
     */
    warning(message: string, heading?: string, closeable?: boolean, config?: MatSnackBarConfig): void;
    /**
     * @description This method is to show notification of info type
     * @author IDNAN.HAIDER
     * @param message
     * @param [heading]
     * @param [closeable=false]
     * @param [config={}]
     */
    info(message: string, heading?: string, closeable?: boolean, config?: MatSnackBarConfig): void;
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
    private show;
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
    showNotificationWithCustomActionIcon(message: string, type: NotificationType, action: CustomActionInterface, heading?: string, config?: MatSnackBarConfig): void;
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
    private getNotificationConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<IHNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IHNotificationService>;
}
