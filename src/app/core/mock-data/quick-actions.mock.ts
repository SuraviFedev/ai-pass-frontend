import { QuickAction } from '../models/quick-action.model';

export const QUICK_ACTIONS: QuickAction[] = [
  {
    title: 'Run AI Task',
    description: 'Start a new AI-supported workflow.',
    route: '/analysis',
  },
  {
    title: 'Open Invoice AI',
    description: 'Review extracted invoice fields and decisions.',
    route: '/invoice-ai',
  },
  {
    title: 'Analyze Tool',
    description: 'Evaluate an AI app and get structured insights.',
    route: '/analysis',
  },
  {
    title: 'View Usage',
    description: 'Track credits, plan, and app usage.',
    route: '/usage',
  },
];