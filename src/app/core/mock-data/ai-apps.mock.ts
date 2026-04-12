import { AiApp } from '../models/ai-app.model';

export const AI_APPS: AiApp[] = [
  {
    id: 'invoice-ai',
    name: 'Invoice AI',
    description: 'Extracts and validates invoice data for review workflows.',
    category: 'Finance',
    status: 'Live',
    actionLabel: 'Open',
    route: '/invoice-ai',
  },
  {
    id: 'supply-chain-ai',
    name: 'Supply Chain AI',
    description: 'Monitors logistics and identifies delivery bottlenecks.',
    category: 'Operations',
    status: 'Coming Soon',
    actionLabel: 'Analyze',
  },
  {
    id: 'hr-ai',
    name: 'HR AI',
    description: 'Supports hiring workflows and employee document review.',
    category: 'HR',
    status: 'Coming Soon',
    actionLabel: 'Analyze',
  },
  {
    id: 'presence-audit',
    name: 'Presence Audit',
    description: 'Audits time, attendance, and operational presence signals.',
    category: 'Audit',
    status: 'Live',
    actionLabel: 'Analyze',
  },
  {
    id: 'analysis-studio',
    name: 'Analysis Studio',
    description: 'Analyzes AI tools and provides structured recommendations.',
    category: 'Insights',
    status: 'Live',
    actionLabel: 'Analyze',
    route: '/analysis',
  },
  {
    id: 'compliance-ai',
    name: 'Compliance AI',
    description: 'Flags risky workflow patterns and policy exceptions.',
    category: 'Compliance',
    status: 'Coming Soon',
    actionLabel: 'Analyze',
  },
];