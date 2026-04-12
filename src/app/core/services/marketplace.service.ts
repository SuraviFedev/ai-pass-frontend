import { Injectable } from '@angular/core';
import { AiApp } from '../models/ai-app.model';
import { AI_APPS } from '../mock-data/ai-apps.mock';

@Injectable({ providedIn: 'root' })
export class MarketplaceService {
  getApps(): AiApp[] {
    return AI_APPS;
  }
}