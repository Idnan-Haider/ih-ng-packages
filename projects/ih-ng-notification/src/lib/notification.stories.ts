import { Meta, StoryObj, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { Component, Input, inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { IHNotificationModule } from './ih-ng-notification.module';
import { IHNotificationService } from './ih-ng-notification.service';

@Component({
    selector: 'notification-showcase',
    standalone: true,
    imports: [MatButtonModule],
    template: `
    <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 2rem; justify-content: center;">
      <button mat-raised-button color="primary" (click)="show('success')">Success Notification</button>
      <button mat-raised-button color="warn" (click)="show('error')">Error Notification</button>
      <button mat-raised-button (click)="show('warning')" style="background-color: #ffa000; color: white;">Warning Notification</button>
      <button mat-raised-button color="accent" (click)="show('info')">Info Notification</button>
      <button mat-stroked-button (click)="showCustom()">Custom Action</button>
    </div>
  `,
})
class NotificationShowcaseComponent {
    @Input() heading = 'Notification Heading';
    @Input() message = 'This is a beautiful plug-and-play notification message.';
    @Input() closeable = true;

    private notificationService = inject(IHNotificationService);

    show(type: 'success' | 'error' | 'warning' | 'info') {
        this.notificationService[type](this.message, this.heading, this.closeable);
    }

    showCustom() {
        this.notificationService.showNotificationWithCustomActionIcon(
            this.message,
            'info',
            {
                icon: 'home',
                tooltip: 'Home Action',
                cb: () => alert('Custom callback executed from notification action!'),
            },
            this.heading
        );
    }
}

const meta: Meta<NotificationShowcaseComponent> = {
    title: 'IH Notification/Service API',
    component: NotificationShowcaseComponent,
    decorators: [
        moduleMetadata({
            imports: [IHNotificationModule, BrowserAnimationsModule],
        }),
        componentWrapperDecorator((story) => `
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          ${story}
        `),
    ],
    parameters: {
        docs: {
            description: {
                component: 'This showcase demonstrates how the `IHNotificationService` behaves. Use the controls below to change the text and behavior, then click the buttons above to trigger the snackbar.',
            },
            source: { type: 'dynamic' },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NotificationShowcaseComponent>;

export const InteractivePlayground: Story = {
    args: {
        heading: 'Dynamic Title',
        message: 'Modify these values in the Controls tab and click the buttons!',
        closeable: true,
    },
};

export const PersistantNotification: Story = {
    args: {
        closeable: false,
        message: 'This notification does not show the close button.',
    },
};