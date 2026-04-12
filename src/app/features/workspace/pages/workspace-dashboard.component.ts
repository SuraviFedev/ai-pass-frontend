import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActionCardComponent } from '../../../shared/components/action-card/action-card.component';
import { PageTitleComponent } from '../../../shared/components/page-title/page-title.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';
import { WorkspaceService } from '../../../core/services/workspace.service';

@Component({
  selector: 'app-workspace-dashboard',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, ActionCardComponent, SectionCardComponent],
  templateUrl: './workspace-dashboard.component.html',
  styleUrl: './workspace-dashboard.component.scss',
})
export class WorkspaceDashboardComponent {
  private readonly workspaceService = inject(WorkspaceService);
  readonly actions = this.workspaceService.getQuickActions();
  readonly activity = this.workspaceService.getRecentActivity();
}