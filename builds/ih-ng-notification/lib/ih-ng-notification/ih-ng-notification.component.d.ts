import { OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationDataInterface } from '../interfaces/ih-ng-notification.interface';
import * as i0 from "@angular/core";
export declare class IHNotificationComponent implements OnInit {
    private snackBarRef;
    notificationData: NotificationDataInterface;
    constructor(snackBarRef: MatSnackBarRef<IHNotificationComponent>, notificationData: NotificationDataInterface);
    ngOnInit(): void;
    /**
     * This method is to close or invoke call back
     *
     */
    customAction(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IHNotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IHNotificationComponent, "ih-ng-notification", never, {}, {}, never, never, false>;
}
