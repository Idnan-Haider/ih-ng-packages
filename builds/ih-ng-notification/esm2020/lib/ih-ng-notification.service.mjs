import { Injectable } from '@angular/core';
import { IHNotificationComponent } from './ih-ng-notification/ih-ng-notification.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export class IHNotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.icons = {
            error: 'error',
            warning: 'warning',
            success: 'check_circle',
            info: 'info',
        };
    }
    /**
     * @description This method is to show notification of error type
     * @author IDNAN.HAIDER
     * @param message
     * @param [heading]
     * @param [closeable=false]
     * @param [config={}]
     */
    error(message, heading, closeable = false, config = {}) {
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
    success(message, heading, closeable = false, config = {}) {
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
    warning(message, heading, closeable = false, config = {}) {
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
    info(message, heading, closeable = false, config = {}) {
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
    show(message, type, heading, closeable = false, config = {}) {
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
    showNotificationWithCustomActionIcon(message, type, action, heading, config = {}) {
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
    getNotificationConfig(message, messageType, heading, closeButton = true, action) {
        const notificationData = {
            data: {
                heading,
                message,
                closeable: closeButton,
                icon: this.icons[messageType],
            },
            panelClass: `${messageType}-notification`,
            direction: 'ltr', // TODO will add directional support,
        };
        if (action) {
            notificationData.data['action'] = action;
        }
        return notificationData;
    }
}
IHNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationService, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Injectable });
IHNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.MatSnackBar }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWgtbmctbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9paC1uZy1ub3RpZmljYXRpb24vc3JjL2xpYi9paC1uZy1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFHNUYsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRWxDLFVBQUssR0FBRztZQUNiLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDO0lBUDBDLENBQUM7SUFTN0M7Ozs7Ozs7T0FPRztJQUNJLEtBQUssQ0FDVixPQUFlLEVBQ2YsT0FBZ0IsRUFDaEIsWUFBcUIsS0FBSyxFQUMxQixTQUE0QixFQUFFO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksT0FBTyxDQUNaLE9BQWUsRUFDZixPQUFnQixFQUNoQixZQUFxQixLQUFLLEVBQzFCLFNBQTRCLEVBQUU7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxPQUFPLENBQ1osT0FBZSxFQUNmLE9BQWdCLEVBQ2hCLFlBQXFCLEtBQUssRUFDMUIsU0FBNEIsRUFBRTtRQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLElBQUksQ0FDVCxPQUFlLEVBQ2YsT0FBZ0IsRUFDaEIsWUFBcUIsS0FBSyxFQUMxQixTQUE0QixFQUFFO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSyxJQUFJLENBQ1YsT0FBZSxFQUNmLElBQXNCLEVBQ3RCLE9BQWdCLEVBQ2hCLFlBQXFCLEtBQUssRUFDMUIsU0FBNEIsRUFBRTtRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFO1lBQ3ZELEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztZQUNoRSxHQUFHLE1BQU07U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksb0NBQW9DLENBQ3pDLE9BQWUsRUFDZixJQUFzQixFQUN0QixNQUE2QixFQUM3QixPQUFnQixFQUNoQixTQUE0QixFQUFFO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLEVBQUU7WUFDdkQsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztZQUNwRSxHQUFHLE1BQU07U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNLLHFCQUFxQixDQUMzQixPQUFlLEVBQ2YsV0FBNkIsRUFDN0IsT0FBZ0IsRUFDaEIsY0FBdUIsSUFBSSxFQUMzQixNQUE4QjtRQUU5QixNQUFNLGdCQUFnQixHQUFzQjtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osT0FBTztnQkFDUCxPQUFPO2dCQUNQLFNBQVMsRUFBRSxXQUFXO2dCQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDRDtZQUM5QixVQUFVLEVBQUUsR0FBRyxXQUFXLGVBQWU7WUFDekMsU0FBUyxFQUFFLEtBQUssRUFBRSxxQ0FBcUM7U0FDeEQsQ0FBQztRQUNGLElBQUksTUFBTSxFQUFFO1lBQ1YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUMxQztRQUNELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQzs7a0hBNUpVLHFCQUFxQjtzSEFBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIEN1c3RvbUFjdGlvbkludGVyZmFjZSxcclxuICBOb3RpZmljYXRpb25UeXBlLFxyXG4gIE5vdGlmaWNhdGlvbkRhdGFJbnRlcmZhY2UsXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2VzL2loLW5nLW5vdGlmaWNhdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJSE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vaWgtbmctbm90aWZpY2F0aW9uL2loLW5nLW5vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSUhOb3RpZmljYXRpb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cclxuXHJcbiAgcHVibGljIGljb25zID0ge1xyXG4gICAgZXJyb3I6ICdlcnJvcicsXHJcbiAgICB3YXJuaW5nOiAnd2FybmluZycsXHJcbiAgICBzdWNjZXNzOiAnY2hlY2tfY2lyY2xlJyxcclxuICAgIGluZm86ICdpbmZvJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgaXMgdG8gc2hvdyBub3RpZmljYXRpb24gb2YgZXJyb3IgdHlwZVxyXG4gICAqIEBhdXRob3IgSUROQU4uSEFJREVSXHJcbiAgICogQHBhcmFtIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gW2hlYWRpbmddXHJcbiAgICogQHBhcmFtIFtjbG9zZWFibGU9ZmFsc2VdXHJcbiAgICogQHBhcmFtIFtjb25maWc9e31dXHJcbiAgICovXHJcbiAgcHVibGljIGVycm9yKFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgaGVhZGluZz86IHN0cmluZyxcclxuICAgIGNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgY29uZmlnOiBNYXRTbmFja0JhckNvbmZpZyA9IHt9XHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3cobWVzc2FnZSwgJ2Vycm9yJywgaGVhZGluZywgY2xvc2VhYmxlLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIGlzIHRvIHNob3cgbm90aWZpY2F0aW9uIG9mIHN1Y2Nlc3MgdHlwZVxyXG4gICAqIEBhdXRob3IgSUROQU4uSEFJREVSXHJcbiAgICogQHBhcmFtIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gW2hlYWRpbmddXHJcbiAgICogQHBhcmFtIFtjbG9zZWFibGU9ZmFsc2VdXHJcbiAgICogQHBhcmFtIFtjb25maWc9e31dXHJcbiAgICovXHJcbiAgcHVibGljIHN1Y2Nlc3MoXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBoZWFkaW5nPzogc3RyaW5nLFxyXG4gICAgY2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICBjb25maWc6IE1hdFNuYWNrQmFyQ29uZmlnID0ge31cclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvdyhtZXNzYWdlLCAnc3VjY2VzcycsIGhlYWRpbmcsIGNsb3NlYWJsZSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIG1ldGhvZCBpcyB0byBzaG93IG5vdGlmaWNhdGlvbiBvZiB3YXJuaW5nIHR5cGVcclxuICAgKiBAYXV0aG9yIElETkFOLkhBSURFUlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlXHJcbiAgICogQHBhcmFtIFtoZWFkaW5nXVxyXG4gICAqIEBwYXJhbSBbY2xvc2VhYmxlPWZhbHNlXVxyXG4gICAqIEBwYXJhbSBbY29uZmlnPXt9XVxyXG4gICAqL1xyXG4gIHB1YmxpYyB3YXJuaW5nKFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgaGVhZGluZz86IHN0cmluZyxcclxuICAgIGNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgY29uZmlnOiBNYXRTbmFja0JhckNvbmZpZyA9IHt9XHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3cobWVzc2FnZSwgJ3dhcm5pbmcnLCBoZWFkaW5nLCBjbG9zZWFibGUsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgaXMgdG8gc2hvdyBub3RpZmljYXRpb24gb2YgaW5mbyB0eXBlXHJcbiAgICogQGF1dGhvciBJRE5BTi5IQUlERVJcclxuICAgKiBAcGFyYW0gbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBbaGVhZGluZ11cclxuICAgKiBAcGFyYW0gW2Nsb3NlYWJsZT1mYWxzZV1cclxuICAgKiBAcGFyYW0gW2NvbmZpZz17fV1cclxuICAgKi9cclxuICBwdWJsaWMgaW5mbyhcclxuICAgIG1lc3NhZ2U6IHN0cmluZyxcclxuICAgIGhlYWRpbmc/OiBzdHJpbmcsXHJcbiAgICBjbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIGNvbmZpZzogTWF0U25hY2tCYXJDb25maWcgPSB7fVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93KG1lc3NhZ2UsICdpbmZvJywgaGVhZGluZywgY2xvc2VhYmxlLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIGlzIHRvIHNob3cgbm90aWZpY2F0aW9uIG9mIGdpdmVuIHR5cGVcclxuICAgKiBAYXV0aG9yIElETkFOLkhBSURFUlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gdHlwZVxyXG4gICAqIEBwYXJhbSBbaGVhZGluZ11cclxuICAgKiBAcGFyYW0gW2Nsb3NlYWJsZT1mYWxzZV1cclxuICAgKiBAcGFyYW0gW2NvbmZpZz17fV1cclxuICAgKi9cclxuICBwcml2YXRlIHNob3coXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLFxyXG4gICAgaGVhZGluZz86IHN0cmluZyxcclxuICAgIGNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgY29uZmlnOiBNYXRTbmFja0JhckNvbmZpZyA9IHt9XHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KElITm90aWZpY2F0aW9uQ29tcG9uZW50LCB7XHJcbiAgICAgIC4uLnRoaXMuZ2V0Tm90aWZpY2F0aW9uQ29uZmlnKG1lc3NhZ2UsIHR5cGUsIGhlYWRpbmcsIGNsb3NlYWJsZSksXHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgbWV0aG9kIGlzIHRvIHNob3cgbm90aWZpY2F0aW9uIG9mIGdpdmVuIHR5cGUgd2l0aCBjdXN0b20gY2FsbCBiYWNrIHN1cHBvcnRcclxuICAgKiBPbmx5IG1hdC1pY29uIG5hbWUgaXMgc3VwcG9ydGVkXHJcbiAgICogQGF1dGhvciBJRE5BTi5IQUlERVJcclxuICAgKiBAcGFyYW0gbWVzc2FnZVxyXG4gICAqIEBwYXJhbSB0eXBlXHJcbiAgICogQHBhcmFtIGFjdGlvblxyXG4gICAqIEBwYXJhbSBbaGVhZGluZ11cclxuICAgKiBAcGFyYW0gW2NvbmZpZz17fV1cclxuICAgKi9cclxuICBwdWJsaWMgc2hvd05vdGlmaWNhdGlvbldpdGhDdXN0b21BY3Rpb25JY29uKFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZSxcclxuICAgIGFjdGlvbjogQ3VzdG9tQWN0aW9uSW50ZXJmYWNlLFxyXG4gICAgaGVhZGluZz86IHN0cmluZyxcclxuICAgIGNvbmZpZzogTWF0U25hY2tCYXJDb25maWcgPSB7fVxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChJSE5vdGlmaWNhdGlvbkNvbXBvbmVudCwge1xyXG4gICAgICAuLi50aGlzLmdldE5vdGlmaWNhdGlvbkNvbmZpZyhtZXNzYWdlLCB0eXBlLCBoZWFkaW5nLCBmYWxzZSwgYWN0aW9uKSxcclxuICAgICAgLi4uY29uZmlnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgaXMgdG8gZ2V0IGNvbmZpZ3VyYXRpb25hbCBkYXRhIGZvciBzbmFja2JhciBjdXN0b20gY29tcG9uZW50XHJcbiAgICogQGF1dGhvciBJRE5BTi5IQUlERVJcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBwYXJhbSBtZXNzYWdlXHJcbiAgICogQHBhcmFtIG1lc3NhZ2VUeXBlXHJcbiAgICogQHBhcmFtIFtoZWFkaW5nXVxyXG4gICAqIEBwYXJhbSBbY2xvc2VCdXR0b249dHJ1ZV1cclxuICAgKiBAcGFyYW0gW2FjdGlvbl1cclxuICAgKiBAcmV0dXJuIHsqfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Tm90aWZpY2F0aW9uQ29uZmlnKFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZVR5cGU6IE5vdGlmaWNhdGlvblR5cGUsXHJcbiAgICBoZWFkaW5nPzogc3RyaW5nLFxyXG4gICAgY2xvc2VCdXR0b246IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgYWN0aW9uPzogQ3VzdG9tQWN0aW9uSW50ZXJmYWNlXHJcbiAgKTogTWF0U25hY2tCYXJDb25maWcge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uRGF0YTogTWF0U25hY2tCYXJDb25maWcgPSB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBoZWFkaW5nLFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgY2xvc2VhYmxlOiBjbG9zZUJ1dHRvbixcclxuICAgICAgICBpY29uOiB0aGlzLmljb25zW21lc3NhZ2VUeXBlXSxcclxuICAgICAgfSBhcyBOb3RpZmljYXRpb25EYXRhSW50ZXJmYWNlLFxyXG4gICAgICBwYW5lbENsYXNzOiBgJHttZXNzYWdlVHlwZX0tbm90aWZpY2F0aW9uYCxcclxuICAgICAgZGlyZWN0aW9uOiAnbHRyJywgLy8gVE9ETyB3aWxsIGFkZCBkaXJlY3Rpb25hbCBzdXBwb3J0LFxyXG4gICAgfTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgbm90aWZpY2F0aW9uRGF0YS5kYXRhWydhY3Rpb24nXSA9IGFjdGlvbjtcclxuICAgIH1cclxuICAgIHJldHVybiBub3RpZmljYXRpb25EYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=