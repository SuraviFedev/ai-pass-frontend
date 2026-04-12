export interface AgentItem {
  id: string;
  name: string;
  role: string;
  description: string;
  skills: string[];
  status: 'Available' | 'Training' | 'Beta';
  owner: string;
  lastUpdated: string;
}