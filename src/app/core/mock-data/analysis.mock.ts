import { AnalysisResult } from '../models/analysis-result.model';

export const DEFAULT_ANALYSIS: AnalysisResult = {
  summary:
    'This AI tool supports productivity and workflow acceleration through automation and content generation.',
  useCases: ['Operations support', 'Knowledge work', 'Workflow acceleration'],
  strengths: ['Fast turnaround', 'Scalable assistance', 'Reduced manual effort'],
  limitations: ['Needs validation', 'Dependent on prompt quality', 'May require domain tuning'],
  recommendation:
    'Best for teams evaluating AI adoption in low-risk, high-volume workflows with human review.',
};