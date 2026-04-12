import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AiApp } from '../../../core/models/ai-app.model';
import { MarketplaceService } from '../../../core/services/marketplace.service';
import { AppCardComponent } from '../../../shared/components/app-card/app-card.component';
import { PageTitleComponent } from '../../../shared/components/page-title/page-title.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageTitleComponent,
    SectionCardComponent,
    AppCardComponent,
  ],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent {
  private readonly marketplaceService = inject(MarketplaceService);
  private readonly router = inject(Router);

  readonly apps = this.marketplaceService.getApps();

  searchTerm = '';
  selectedStatus = 'All';
  selectedCategory = 'All';

  readonly statuses = ['All', 'Live', 'Coming Soon'];

  get categories(): string[] {
    const allCategories = this.apps.map((app) => app.category);
    return ['All', ...new Set(allCategories)];
  }

  get filteredApps(): AiApp[] {
    return this.apps.filter((app) => {
      const matchesSearch =
        !this.searchTerm ||
        app.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        app.category.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus =
        this.selectedStatus === 'All' || app.status === this.selectedStatus;

      const matchesCategory =
        this.selectedCategory === 'All' || app.category === this.selectedCategory;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }

  onAppAction(app: AiApp): void {
    if (app.actionLabel === 'Open' && app.route) {
      this.router.navigate([app.route]);
      return;
    }

    this.router.navigate(['/analysis'], {
      queryParams: { tool: app.name },
    });
  }
}