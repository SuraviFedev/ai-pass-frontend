import { AgentItem } from '../models/agent.model';

export const AGENTS: AgentItem[] = [
  {
    id: 'finance-copilot',
    name: 'Finance Copilot',
    role: 'Finance',
    description:
      'Supports invoice review, exception handling, and financial document interpretation.',
    skills: ['Invoice validation', 'VAT review', 'Risk flagging'],
    status: 'Available',
    owner: 'Finance Ops',
    lastUpdated: '2 hours ago',
  },
  {
    id: 'hr-assistant',
    name: 'HR Assistant',
    role: 'HR',
    description:
      'Assists with employee intake, document completeness checks, and workflow guidance.',
    skills: ['Employee onboarding', 'Document checks', 'Policy guidance'],
    status: 'Available',
    owner: 'HR Operations',
    lastUpdated: '1 day ago',
  },
  {
    id: 'compliance-analyst',
    name: 'Compliance Analyst',
    role: 'Compliance',
    description:
      'Reviews workflow signals and identifies policy-sensitive events for audit review.',
    skills: ['Policy checks', 'Audit support', 'Risk analysis'],
    status: 'Beta',
    owner: 'Compliance Team',
    lastUpdated: '4 hours ago',
  },
  {
    id: 'ops-coordinator',
    name: 'Ops Coordinator',
    role: 'Operations',
    description:
      'Coordinates operational tasks, summarizes status updates, and assists with workflow routing.',
    skills: ['Task routing', 'Operational summaries', 'Queue support'],
    status: 'Training',
    owner: 'Operations Team',
    lastUpdated: '30 min ago',
  },
];