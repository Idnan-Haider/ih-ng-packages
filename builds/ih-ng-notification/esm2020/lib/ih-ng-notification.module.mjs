import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IHNotificationService } from './ih-ng-notification.service';
import { IHNotificationComponent } from './ih-ng-notification/ih-ng-notification.component';
import * as i0 from "@angular/core";
const module = [
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    TranslateModule,
];
// Default Snackbar configuration
export const DEFAULT_SNACK_BAR_CONFIG = {
    duration: 6000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
};
export class IHNotificationModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWgtbmctbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2loLW5nLW5vdGlmaWNhdGlvbi9zcmMvbGliL2loLW5nLW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsNkJBQTZCLEdBQzlCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7O0FBRTVGLE1BQU0sTUFBTSxHQUFHO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7SUFFaEIsZ0JBQWdCO0lBRWhCLGVBQWU7Q0FDaEIsQ0FBQztBQUVGLGlDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBc0I7SUFDekQsUUFBUSxFQUFFLElBQUk7SUFDZCxrQkFBa0IsRUFBRSxPQUFPO0lBQzNCLGdCQUFnQixFQUFFLEtBQUs7Q0FDeEIsQ0FBQztBQWNGLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFYaEIsdUJBQXVCLGFBakJ0QyxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGdCQUFnQjtRQUVoQixnQkFBZ0I7UUFFaEIsZUFBZSxhQW9CTCx1QkFBdUI7a0hBRXRCLG9CQUFvQixhQVRwQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLDZCQUE2QjtZQUN0QyxRQUFRLEVBQUUsd0JBQXdCO1NBQ25DO1FBQ0QscUJBQXFCO0tBQ3RCLFlBUFksTUFBTTsyRkFVUixvQkFBb0I7a0JBWmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO29CQUNwQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLDZCQUE2Qjs0QkFDdEMsUUFBUSxFQUFFLHdCQUF3Qjt5QkFDbkM7d0JBQ0QscUJBQXFCO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHtcclxuICBNYXRTbmFja0JhckNvbmZpZyxcclxuICBNYXRTbmFja0Jhck1vZHVsZSxcclxuICBNQVRfU05BQ0tfQkFSX0RFRkFVTFRfT1BUSU9OUyxcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcblxyXG5pbXBvcnQgeyBJSE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2loLW5nLW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSUhOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2loLW5nLW5vdGlmaWNhdGlvbi9paC1uZy1ub3RpZmljYXRpb24uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IG1vZHVsZSA9IFtcclxuICBNYXRTbmFja0Jhck1vZHVsZSxcclxuICBNYXRJY29uTW9kdWxlLFxyXG4gIE1hdFRvb2x0aXBNb2R1bGUsXHJcblxyXG4gIEZsZXhMYXlvdXRNb2R1bGUsXHJcblxyXG4gIFRyYW5zbGF0ZU1vZHVsZSxcclxuXTtcclxuXHJcbi8vIERlZmF1bHQgU25hY2tiYXIgY29uZmlndXJhdGlvblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TTkFDS19CQVJfQ09ORklHOiBNYXRTbmFja0JhckNvbmZpZyA9IHtcclxuICBkdXJhdGlvbjogNjAwMCxcclxuICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcbiAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXHJcbn07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0lITm90aWZpY2F0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbLi4ubW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTUFUX1NOQUNLX0JBUl9ERUZBVUxUX09QVElPTlMsXHJcbiAgICAgIHVzZVZhbHVlOiBERUZBVUxUX1NOQUNLX0JBUl9DT05GSUcsXHJcbiAgICB9LFxyXG4gICAgSUhOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0lITm90aWZpY2F0aW9uQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIElITm90aWZpY2F0aW9uTW9kdWxlIHt9XHJcbiJdfQ==