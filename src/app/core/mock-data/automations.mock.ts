import { AutomationItem } from '../models/automation.model';

export const AUTOMATIONS: AutomationItem[] = [
  {
    id: 'invoice-review',
    name: 'Invoice Review Flow',
    description: 'Automatically sends flagged invoices to review after extraction.',
    trigger: 'Invoice uploaded',
    action: 'Route to finance review queue',
    status: 'Active',
    lastRun: '10 min ago',
    owner: 'Finance Ops',
  },
  {
    id: 'compliance-check',
    name: 'Compliance Check Flow',
    description: 'Runs a compliance validation when sensitive workflow events occur.',
    trigger: 'Policy-sensitive event detected',
    action: 'Create compliance review task',
    status: 'Active',
    lastRun: '32 min ago',
    owner: 'Compliance Team',
  },
  {
    id: 'hr-intake',
    name: 'HR Intake Flow',
    description: 'Processes employee intake forms and forwards missing documents.',
    trigger: 'New intake submission',
    action: 'Notify HR operations',
    status: 'Draft',
    lastRun: 'Not run yet',
    owner: 'HR Operations',
  },
  {
    id: 'usage-summary',
    name: 'Daily Usage Summary',
    description: 'Generates a daily summary of credit usage and app activity.',
    trigger: 'Every day at 6 PM',
    action: 'Send workspace summary report',
    status: 'Paused',
    lastRun: 'Yesterday, 6:00 PM',
    owner: 'Workspace Admin',
  },
];