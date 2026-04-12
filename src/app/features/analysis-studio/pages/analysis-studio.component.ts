import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AnalysisResult } from '../../../core/models/analysis-result.model';
import { AiAnalysisService } from '../../../core/services/ai-analysis.service';
import { ToastService } from '../../../core/services/toast.service';
import { PageTitleComponent } from '../../../shared/components/page-title/page-title.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';

@Component({
  selector: 'app-analysis-studio',
  standalone: true,
  imports: [CommonModule, FormsModule, PageTitleComponent, SectionCardComponent],
  templateUrl: './analysis-studio.component.html',
  styleUrls: ['./analysis-studio.component.scss'],
})
export class AnalysisStudioComponent implements OnInit {
  private readonly analysisService = inject(AiAnalysisService);
  private readonly route = inject(ActivatedRoute);
  private readonly toastService = inject(ToastService);

  toolName = '';
  result: AnalysisResult | null = null;
  isLoading = false;

  readonly suggestedTools = [
    'ChatGPT',
    'Midjourney',
    'Claude',
    'Notion AI',
    'HR AI',
    'Supply Chain AI',
    'Compliance AI',
    'Presence Audit',
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const tool = params['tool'];
      if (tool) {
        this.toolName = tool;
        this.analyze();
      }
    });
  }

  setSuggestedTool(tool: string): void {
    this.toolName = tool;
    this.analyze();
  }

  analyze(): void {
    const selectedTool = this.toolName.trim() || 'ChatGPT';

    if (!this.toolName.trim()) {
      this.toolName = selectedTool;
    }

    this.isLoading = true;
    this.result = null;

    setTimeout(() => {
      this.result = this.analysisService.analyzeTool(selectedTool);
      this.isLoading = false;
      this.toastService.success(`Analysis generated for ${selectedTool}`);
    }, 900);
  }
}