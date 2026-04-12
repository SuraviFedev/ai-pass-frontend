import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly toastService = inject(ToastService);

  showNotifications = false;

  readonly notifications = [
    {
      title: 'Invoice processed successfully',
      time: '2 min ago',
      type: 'success',
    },
    {
      title: 'Analysis completed for ChatGPT',
      time: '18 min ago',
      type: 'info',
    },
    {
      title: 'Usage has reached 64% of monthly credits',
      time: '1 hour ago',
      type: 'warning',
    },
  ];

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  closeNotifications(): void {
    this.showNotifications = false;
  }

  onUpgradeClick(): void {
    this.toastService.info('Upgrade workflow can be completed from the Usage page.');
  }
}