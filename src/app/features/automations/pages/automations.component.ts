import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutomationItem } from '../../../core/models/automation.model';
import { AutomationService } from '../../../core/services/automation.service';
import { ToastService } from '../../../core/services/toast.service';
import { PageTitleComponent } from '../../../shared/components/page-title/page-title.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';

@Component({
  selector: 'app-automations',
  standalone: true,
  imports: [CommonModule, FormsModule, PageTitleComponent, SectionCardComponent],
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.scss'],
})
export class AutomationsComponent {
  private readonly automationService = inject(AutomationService);
  private readonly toastService = inject(ToastService);

  readonly automations = signal<AutomationItem[]>(
    this.automationService.getAutomations(),
  );

  searchTerm = '';
  selectedStatus = 'All';
  expandedAutomationId: string | null = null;

  readonly statuses = ['All', 'Active', 'Draft', 'Paused'];

  readonly filteredAutomations = computed(() => {
    return this.automations().filter((automation) => {
      const matchesSearch =
        !this.searchTerm ||
        automation.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        automation.description
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        automation.owner.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' ||
        automation.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  });

  get totalCount(): number {
    return this.automations().length;
  }

  get activeCount(): number {
    return this.automations().filter((a) => a.status === 'Active').length;
  }

  get nonActiveCount(): number {
    return this.automations().filter((a) => a.status !== 'Active').length;
  }

  toggleExpand(id: string): void {
    this.expandedAutomationId =
      this.expandedAutomationId === id ? null : id;
  }

  runNow(item: AutomationItem): void {
    const updated = this.automations().map((automation) =>
      automation.id === item.id
        ? { ...automation, lastRun: 'Just now' }
        : automation,
    );

    this.automations.set(updated);
    this.toastService.success(`${item.name} executed successfully.`);
  }

  toggleStatus(item: AutomationItem): void {
    let nextStatus: AutomationItem['status'] = item.status;

    if (item.status === 'Active') {
      nextStatus = 'Paused';
    } else if (item.status === 'Paused' || item.status === 'Draft') {
      nextStatus = 'Active';
    }

    const updated = this.automations().map((automation) =>
      automation.id === item.id
        ? { ...automation, status: nextStatus }
        : automation,
    );

    this.automations.set(updated);
    this.toastService.info(`${item.name} is now ${nextStatus}.`);
  }
}