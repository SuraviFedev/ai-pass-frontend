import { Injectable } from '@angular/core';
import { UsageData } from '../models/usage.model';
import { MOCK_USAGE } from '../mock-data/usage.mock';

@Injectable({ providedIn: 'root' })
export class UsageService {
  getUsage(): UsageData {
    return MOCK_USAGE;
  }
}