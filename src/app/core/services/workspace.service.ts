import { Injectable } from '@angular/core';
import { RECENT_ACTIVITY } from '../mock-data/activity.mock';
import { QUICK_ACTIONS } from '../mock-data/quick-actions.mock';
import { ActivityItem } from '../models/activity.model';
import { QuickAction } from '../models/quick-action.model';

@Injectable({ providedIn: 'root' })
export class WorkspaceService {
  getRecentActivity(): ActivityItem[] {
    return RECENT_ACTIVITY;
  }

  getQuickActions(): QuickAction[] {
    return QUICK_ACTIONS;
  }
}