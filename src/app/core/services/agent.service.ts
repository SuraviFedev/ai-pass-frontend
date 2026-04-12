import { Injectable } from '@angular/core';
import { AgentItem } from '../models/agent.model';
import { AGENTS } from '../mock-data/agents.mock';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  getAgents(): AgentItem[] {
    return structuredClone(AGENTS);
  }
}