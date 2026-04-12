import { Injectable } from '@angular/core';
import { AutomationItem } from '../models/automation.model';
import { AUTOMATIONS } from '../mock-data/automations.mock';

@Injectable({
  providedIn: 'root',
})
export class AutomationService {
  getAutomations(): AutomationItem[] {
    return structuredClone(AUTOMATIONS);
  }
}