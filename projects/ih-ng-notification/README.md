# IH NG Notification

This is like plug-and-play lib no need to add any customization to your project just install the lib and import its module in your desired module and start using IHNotificationService for your beautiful web notifications/toasters.

## Features

- No viewContainer or bootstrap required
- Component inheritance for custom notification UI
- Angular Material Supported for notification/toast position including ltr and rtl support
- Mat Icon supported
- Translation supported
- For Heading and Message HTML format support
- On click Custom Action Callback support

## Images

![Warning](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-notification/assets/success.png)
![Error](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-notification/assets/error.png)
![Warning](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-notification/assets/warning.png)
![Warning](https://github.com/Idnan-Haider/ih-ng-packages/blob/main/projects/ih-ng-notification/assets/info.png)

## Dependencies

- Angular Material
- ngx-translate/core (TODO)

## How to Install

`npm i ih-ng-notification` or `pnpm add ih-ng-notification`

## Setup

```
import { IHNotificationModule } from 'ih-ng-notification';

@NgModule({
  imports: [
    ...,

    IHNotificationModule,
  ],
  ...
})
class YourModule {}
```

## How to Use

```
import { IHNotificationService } from 'ih-ng-notification';

@Component({...})
export class YourComponent {
  constructor(private readonly notificationService: IHNotificationService) {}

  public showSuccess() {
    this.notificationService.
        success('MESSAGE', 'HEADING', true, { ...custom config });
  }

  public showError() {
    this.notificationService.
        error('MESSAGE', 'HEADING', true, { ...custom config });
  }

  public showWarning() {
    this.notificationService.
        warning('MESSAGE', 'HEADING', true, { ...custom config });
  }

  public showInformation() {
    this.notificationService.
        info('MESSAGE', 'HEADING', true, { ...custom config });
  }

  public showWithCustomActionButtonAndCallBack() {
    this.notificationService.
        showNotificationWithCustomActionIcon('MESSAGE', 'NOTIFICATION_TYPE', { icon: 'home', tooltip: 'text',
         cb: ()=> {
            ....
          }
        }, 'HEADING', { ...custom config });
  }
}
```

## Options

For now you can see all the options available in `IHNotificationService` service doc. we'll add detailed doc in here too.

For the reference you can see Interface here

```
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
```

## Reach me out

- [LinkedIn](https://www.linkedin.com/in/adnanhaider-sse/)
- [GitHub](https://github.com/Idnan-Haider)
