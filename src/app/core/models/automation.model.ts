export interface AutomationItem {
  id: string;
  name: string;
  description: string;
  trigger: string;
  action: string;
  status: 'Active' | 'Draft' | 'Paused';
  lastRun: string;
  owner: string;
}