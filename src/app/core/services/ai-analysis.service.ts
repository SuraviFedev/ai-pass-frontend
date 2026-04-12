import { Injectable } from '@angular/core';
import { AnalysisResult } from '../models/analysis-result.model';
import { DEFAULT_ANALYSIS } from '../mock-data/analysis.mock';

@Injectable({
  providedIn: 'root',
})
export class AiAnalysisService {
  analyzeTool(toolName: string): AnalysisResult {
    const normalizedTool = toolName?.trim() || 'ChatGPT';
    const value = normalizedTool.toLowerCase();

    if (value.includes('chatgpt')) {
      return {
        summary:
          'ChatGPT is a conversational AI assistant used for writing, ideation, coding, and general problem-solving.',
        useCases: [
          'Content drafting',
          'Research assistance',
          'Code generation',
          'Customer support workflows',
        ],
        strengths: [
          'Fast responses',
          'Broad knowledge coverage',
          'Strong support for iterative tasks',
        ],
        limitations: [
          'May hallucinate facts',
          'Needs clear prompting',
          'Requires human review for accuracy-critical use cases',
        ],
        recommendation:
          'Best for teams that need fast text generation, ideation, research support, and productivity assistance with review in place.',
      };
    }

    if (value.includes('midjourney')) {
      return {
        summary:
          'Midjourney is an AI image generation tool focused on high-quality visual concept creation and creative exploration.',
        useCases: [
          'Concept art',
          'Marketing visuals',
          'Moodboards',
          'Creative ideation',
        ],
        strengths: [
          'Strong visual quality',
          'Fast concept generation',
          'Great for stylistic exploration',
        ],
        limitations: [
          'Less suited for exact design control',
          'Requires prompt experimentation',
          'Not a full end-to-end design workflow tool',
        ],
        recommendation:
          'Ideal for creative and marketing teams generating early-stage visual concepts and inspiration assets.',
      };
    }

    if (value.includes('claude')) {
      return {
        summary:
          'Claude is an AI assistant designed for writing, analysis, summarization, and structured reasoning tasks.',
        useCases: [
          'Document summarization',
          'Structured writing',
          'Reasoning support',
          'Internal knowledge assistance',
        ],
        strengths: [
          'Strong long-form reasoning',
          'Clear writing support',
          'Useful for structured business tasks',
        ],
        limitations: [
          'Still requires verification',
          'Output quality depends on prompt clarity',
          'Not a substitute for expert review in high-stakes tasks',
        ],
        recommendation:
          'A strong fit for teams that need document-heavy support, structured writing, and careful reasoning assistance.',
      };
    }

    if (value.includes('notion ai')) {
      return {
        summary:
          'Notion AI is a productivity assistant embedded in workspace and documentation flows, helping teams write, summarize, and organize content.',
        useCases: [
          'Meeting summaries',
          'Internal documentation',
          'Task drafting',
          'Workspace productivity support',
        ],
        strengths: [
          'Integrated into documentation workflows',
          'Good for summarization',
          'Helpful for fast content drafting',
        ],
        limitations: [
          'Best within the Notion ecosystem',
          'Less flexible than dedicated AI tools',
          'Requires human review for final content quality',
        ],
        recommendation:
          'Best for teams already working heavily in documentation tools and looking to improve internal productivity.',
      };
    }

    if (value.includes('hr ai')) {
      return {
        summary:
          'HR AI supports hiring workflows, onboarding, employee document review, and internal HR process assistance.',
        useCases: [
          'Candidate screening',
          'Onboarding support',
          'Policy Q&A',
          'Employee document validation',
        ],
        strengths: [
          'Reduces manual HR admin',
          'Speeds up document checks',
          'Scales repetitive people-operations workflows',
        ],
        limitations: [
          'Needs policy validation',
          'Should not replace human HR judgment',
          'Sensitive employee data requires careful handling',
        ],
        recommendation:
          'Best for HR teams looking to automate repetitive intake, onboarding, and policy-support workflows with human oversight.',
      };
    }

    if (value.includes('supply chain ai')) {
      return {
        summary:
          'Supply Chain AI helps monitor logistics activity, identify bottlenecks, and support planning decisions across operational workflows.',
        useCases: [
          'Delivery tracking',
          'Inventory planning',
          'Bottleneck detection',
          'Operational forecasting support',
        ],
        strengths: [
          'Improves visibility across operations',
          'Highlights potential delays early',
          'Supports faster planning decisions',
        ],
        limitations: [
          'Depends on accurate operational data',
          'May require system integration for full value',
          'Forecasting outputs still need business review',
        ],
        recommendation:
          'Well suited for operations teams that need better visibility, early issue detection, and decision support across logistics workflows.',
      };
    }

    if (value.includes('compliance ai')) {
      return {
        summary:
          'Compliance AI helps identify policy-sensitive events, flag risky workflow patterns, and support internal review processes.',
        useCases: [
          'Policy checks',
          'Risk flagging',
          'Workflow monitoring',
          'Audit preparation support',
        ],
        strengths: [
          'Improves consistency in rule-based review',
          'Surfaces issues earlier in the process',
          'Supports audit and governance workflows',
        ],
        limitations: [
          'Requires clearly defined policy logic',
          'Can generate false positives without tuning',
          'Needs human review for final decisions',
        ],
        recommendation:
          'Best for compliance and governance teams that want faster identification of policy risks while keeping human decision-makers in control.',
      };
    }

    if (value.includes('presence audit')) {
      return {
        summary:
          'Presence Audit reviews attendance, activity, or operational presence signals to help teams monitor compliance and workforce visibility.',
        useCases: [
          'Attendance auditing',
          'Operational presence checks',
          'Shift verification',
          'Activity review support',
        ],
        strengths: [
          'Provides structured visibility into presence signals',
          'Supports audit-style review workflows',
          'Helps standardize monitoring processes',
        ],
        limitations: [
          'Signal quality depends on source systems',
          'May not capture full operational context',
          'Requires careful governance for workplace monitoring use',
        ],
        recommendation:
          'Useful for operations and audit teams that need structured review of attendance or presence-related signals with clear policy boundaries.',
      };
    }

    return {
      ...DEFAULT_ANALYSIS,
      summary: `${normalizedTool} is an AI tool that can support automation, productivity, and decision workflows depending on implementation.`,
      recommendation: `Useful for teams exploring ${normalizedTool} as part of an AI adoption workflow. Human validation is recommended before production rollout.`,
    };
  }
}