import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ToastService } from '../../../core/services/toast.service';
import { UsageService } from '../../../core/services/usage.service';
import { PageTitleComponent } from '../../../shared/components/page-title/page-title.component';
import { ProgressBarComponent } from '../../../shared/components/progress-bar/progress-bar.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';

interface BillingItem {
  id: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending';
}

interface PlanOption {
  name: string;
  credits: string;
  price: string;
  description: string;
}

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [
    CommonModule,
    PageTitleComponent,
    SectionCardComponent,
    ProgressBarComponent,
    StatCardComponent,
  ],
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
})
export class UsageComponent {
  private readonly usageService = inject(UsageService);
  private readonly toastService = inject(ToastService);

  readonly usage = this.usageService.getUsage();

  showBillingModal = false;
  showUpgradeModal = false;
  selectedPlan = 'Pro Team';

  readonly billingHistory: BillingItem[] = [
    {
      id: 'INV-1003',
      date: '2026-04-01',
      amount: '$49',
      status: 'Paid',
    },
    {
      id: 'INV-1002',
      date: '2026-03-01',
      amount: '$49',
      status: 'Paid',
    },
    {
      id: 'INV-1001',
      date: '2026-02-01',
      amount: '$49',
      status: 'Paid',
    },
  ];

  readonly plans: PlanOption[] = [
    {
      name: 'Starter',
      credits: '1,000 credits / month',
      price: '$0',
      description: 'Best for exploration and lightweight internal usage.',
    },
    {
      name: 'Pro Team',
      credits: '10,000 credits / month',
      price: '$49',
      description: 'Designed for active teams running AI workflows every day.',
    },
    {
      name: 'Enterprise',
      credits: 'Custom credits / unlimited scale',
      price: 'Custom',
      description: 'Built for advanced governance, scale, and production teams.',
    },
  ];

  get usagePercent(): number {
    return (this.usage.usedCredits / this.usage.monthlyCredits) * 100;
  }

  openBillingModal(): void {
    this.showBillingModal = true;
  }

  closeBillingModal(): void {
    this.showBillingModal = false;
  }

  openUpgradeModal(): void {
    this.showUpgradeModal = true;
  }

  closeUpgradeModal(): void {
    this.showUpgradeModal = false;
  }

  choosePlan(planName: string): void {
    this.selectedPlan = planName;
    this.toastService.success(`Selected plan: ${planName} (mock action)`);
  }
}