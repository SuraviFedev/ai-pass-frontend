import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgentItem } from '../../../core/models/agent.model';
import { AgentService } from '../../../core/services/agent.service';
import { ToastService } from '../../../core/services/toast.service';
import { PageTitleComponent } from '../../../shared/components/page-title/page-title.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [CommonModule, FormsModule, PageTitleComponent, SectionCardComponent],
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent {
  private readonly agentService = inject(AgentService);
  private readonly toastService = inject(ToastService);

  readonly agents = signal<AgentItem[]>(this.agentService.getAgents());

  searchTerm = '';
  selectedStatus = 'All';
  selectedRole = 'All';
  expandedAgentId: string | null = null;

  readonly statuses = ['All', 'Available', 'Training', 'Beta'];

  get roles(): string[] {
    const roleList = this.agents().map((agent) => agent.role);
    return ['All', ...new Set(roleList)];
  }

  readonly filteredAgents = computed(() => {
    return this.agents().filter((agent) => {
      const matchesSearch =
        !this.searchTerm ||
        agent.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        agent.owner.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        agent.role.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' || agent.status === this.selectedStatus;

      const matchesRole =
        this.selectedRole === 'All' || agent.role === this.selectedRole;

      return matchesSearch && matchesStatus && matchesRole;
    });
  });

  get totalAgents(): number {
    return this.agents().length;
  }

  get availableAgents(): number {
    return this.agents().filter((agent) => agent.status === 'Available').length;
  }

  get inProgressAgents(): number {
    return this.agents().filter((agent) => agent.status !== 'Available').length;
  }

  toggleExpand(id: string): void {
    this.expandedAgentId = this.expandedAgentId === id ? null : id;
  }

  assignAgent(agent: AgentItem): void {
    this.toastService.success(`${agent.name} assigned successfully.`);
  }

  runSkillCheck(agent: AgentItem): void {
    this.toastService.info(`Skill check started for ${agent.name}.`);
  }
}