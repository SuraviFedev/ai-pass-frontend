import { Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

import { WorkspaceDashboardComponent } from './features/workspace/pages/workspace-dashboard.component';
import { MarketplaceComponent } from './features/marketplace/pages/marketplace.component';
import { AnalysisStudioComponent } from './features/analysis-studio/pages/analysis-studio.component';
import { InvoiceAiComponent } from './features/invoice-ai/pages/invoice-ai.component';
import { UsageComponent } from './features/usage/pages/usage.component';


import { AutomationsComponent } from './features/automations/pages/automations.component';
import { AgentsComponent } from './features/agents/pages/agents.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: WorkspaceDashboardComponent },

      
      { path: 'apps', component: MarketplaceComponent },
      { path: 'analysis', component: AnalysisStudioComponent },
      { path: 'invoice-ai', component: InvoiceAiComponent },
      { path: 'usage', component: UsageComponent },

      
      { path: 'automations', component: AutomationsComponent },
      { path: 'agents', component: AgentsComponent },

      
      { path: '**', redirectTo: '' },
    ],
  },
];