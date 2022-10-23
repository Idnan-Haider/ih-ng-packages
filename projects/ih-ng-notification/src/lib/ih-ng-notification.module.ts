import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { MatIconModule } from '@angular/material/icon';
import {
  MatSnackBarConfig,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IHNotificationService } from './ih-ng-notification.service';
import { IHNotificationComponent } from './ih-ng-notification/ih-ng-notification.component';

/**
 * @type {*}
 */
const module = [
  MatSnackBarModule,
  MatIconModule,
  MatTooltipModule,

  FlexLayoutModule,

  TranslateModule,
];

// Default Snackbar configuration
export const DEFAULT_SNACK_BAR_CONFIG: MatSnackBarConfig = {
  duration: 6000,
  horizontalPosition: 'right',
  verticalPosition: 'top',
};

@NgModule({
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
})
export class IHNotificationModule {}
