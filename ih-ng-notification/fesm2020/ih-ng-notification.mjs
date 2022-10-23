import * as i0 from '@angular/core';
import { Component, Inject, Injectable, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1 from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import * as i3 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i4 from '@angular/flex-layout/flex';

class IHNotificationComponent {
    constructor(snackBarRef, notificationData) {
        this.snackBarRef = snackBarRef;
        this.notificationData = notificationData;
    }
    ngOnInit() { }
    /**
     * This method is to close or invoke call back
     *
     */
    customAction() {
        if (this.notificationData.closeable) {
            this.snackBarRef.dismiss();
        }
        else if (this.notificationData.action) {
            this.notificationData.action.cb();
        }
    }
}
IHNotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationComponent, deps: [{ token: i1.MatSnackBarRef }, { token: MAT_SNACK_BAR_DATA }], target: i0.ɵɵFactoryTarget.Component });
IHNotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.7", type: IHNotificationComponent, selector: "ih-ng-notification", ngImport: i0, template: "<div fxLayout=\"column\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div\r\n      fxFlex\r\n      fxLayout=\"row\"\r\n      fxLayoutAlign=\"start center\"\r\n      fxLayoutGap=\"0.5rem\"\r\n    >\r\n      <!-- Icon -->\r\n      <mat-icon class=\"icon-notification\">{{ notificationData.icon }}</mat-icon>\r\n\r\n      <div fxFlex fxLayout=\"column\">\r\n        <!-- Heading here HTMLsupport available -->\r\n        <div\r\n          *ngIf=\"notificationData.heading\"\r\n          [innerHTML]=\"notificationData.message\"\r\n        ></div>\r\n\r\n        <!-- Message here HTMLsupport available -->\r\n        <div [innerHTML]=\"notificationData.message\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-icon\r\n      matTooltip=\"{{ notificationData.action?.tooltip }}\"\r\n      fxFlex=\"5\"\r\n      class=\"icon-cursor-pointer\"\r\n      (click)=\"customAction()\"\r\n      >{{\r\n        notificationData.closeable ? \"close\" : notificationData.action?.icon\r\n      }}</mat-icon\r\n    >\r\n  </div>\r\n</div>\r\n", styles: ["::ng-deep .success-notification{color:#fff!important;background-color:#00a800!important;min-height:2.4rem}::ng-deep .error-notification{color:#fff!important;background-color:#d70b00!important;min-height:2.4rem}::ng-deep .warning-notification{color:#000!important;background-color:#ec8c33!important;min-height:2.4rem}::ng-deep .info-notification{color:#000!important;background-color:#8adef8!important;min-height:2.4rem}icon-cursor-pointer{cursor:pointer}\n"], dependencies: [{ kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i4.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { kind: "directive", type: i4.DefaultLayoutGapDirective, selector: "  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]", inputs: ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"] }, { kind: "directive", type: i4.DefaultLayoutAlignDirective, selector: "  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]", inputs: ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"] }, { kind: "directive", type: i4.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ih-ng-notification', template: "<div fxLayout=\"column\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div\r\n      fxFlex\r\n      fxLayout=\"row\"\r\n      fxLayoutAlign=\"start center\"\r\n      fxLayoutGap=\"0.5rem\"\r\n    >\r\n      <!-- Icon -->\r\n      <mat-icon class=\"icon-notification\">{{ notificationData.icon }}</mat-icon>\r\n\r\n      <div fxFlex fxLayout=\"column\">\r\n        <!-- Heading here HTMLsupport available -->\r\n        <div\r\n          *ngIf=\"notificationData.heading\"\r\n          [innerHTML]=\"notificationData.message\"\r\n        ></div>\r\n\r\n        <!-- Message here HTMLsupport available -->\r\n        <div [innerHTML]=\"notificationData.message\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-icon\r\n      matTooltip=\"{{ notificationData.action?.tooltip }}\"\r\n      fxFlex=\"5\"\r\n      class=\"icon-cursor-pointer\"\r\n      (click)=\"customAction()\"\r\n      >{{\r\n        notificationData.closeable ? \"close\" : notificationData.action?.icon\r\n      }}</mat-icon\r\n    >\r\n  </div>\r\n</div>\r\n", styles: ["::ng-deep .success-notification{color:#fff!important;background-color:#00a800!important;min-height:2.4rem}::ng-deep .error-notification{color:#fff!important;background-color:#d70b00!important;min-height:2.4rem}::ng-deep .warning-notification{color:#000!important;background-color:#ec8c33!important;min-height:2.4rem}::ng-deep .info-notification{color:#000!important;background-color:#8adef8!important;min-height:2.4rem}icon-cursor-pointer{cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatSnackBarRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_SNACK_BAR_DATA]
                }] }]; } });

class IHNotificationService {
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

const module = [
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    TranslateModule,
];
// Default Snackbar configuration
const DEFAULT_SNACK_BAR_CONFIG = {
    duration: 6000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
};
class IHNotificationModule {
}
IHNotificationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IHNotificationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationModule, declarations: [IHNotificationComponent], imports: [MatSnackBarModule,
        MatIconModule,
        MatTooltipModule,
        FlexLayoutModule,
        TranslateModule], exports: [IHNotificationComponent] });
IHNotificationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationModule, providers: [
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: DEFAULT_SNACK_BAR_CONFIG,
        },
        IHNotificationService,
    ], imports: [module] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: IHNotificationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [IHNotificationComponent],
                    imports: [...module],
                    providers: [
                        {
                            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
                            useValue: DEFAULT_SNACK_BAR_CONFIG,
                        },
                        IHNotificationService,
                    ],
                    exports: [IHNotificationComponent],
                }]
        }] });

/*
 * Public API Surface of ih-ng-notification
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_SNACK_BAR_CONFIG, IHNotificationComponent, IHNotificationModule, IHNotificationService };
//# sourceMappingURL=ih-ng-notification.mjs.map
