import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

type MessageRole = 'user' | 'assistant';

interface ChatMessage {
  id: number;
  role: MessageRole;
  content: string;
  time: string;
  status?: 'sent' | 'thinking' | 'done';
}

@Component({
  selector: 'app-workspace-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workspace-dashboard.component.html',
  styleUrl: './workspace-dashboard.component.scss',
})
export class WorkspaceDashboardComponent implements AfterViewChecked {
  @ViewChild('messagesContainer')
  messagesContainer?: ElementRef<HTMLDivElement>;

  @ViewChild('composerTextarea')
  composerTextarea?: ElementRef<HTMLTextAreaElement>;

  userPrompt = '';
  isLoading = false;

  quickPrompts: string[] = [
    'Summarize this document in bullet points',
    'Write a professional email reply',
    'Explain Angular routing simply',
    'Generate interview questions for AI engineer',
  ];

  messages: ChatMessage[] = [
    {
      id: 1,
      role: 'assistant',
      content:
        'Hi — I’m your AI assistant. Ask me anything, and I’ll help you draft, explain, summarize, and create content.',
      time: this.getCurrentTime(),
      status: 'done',
    },
  ];

  private readonly starterReplies = [
    'I can help with that. Tell me whether you want a concise answer, detailed explanation, or a ready-to-use draft.',
    'Understood. I can turn that into a polished result quickly. Add any constraints like tone, format, or length.',
    'That’s a good prompt. I can break it down step by step, summarize it, or generate a complete version for you.',
    'I can help you with that request. Share a bit more context and I can make the output more precise.',
  ];

  usePrompt(prompt: string): void {
    this.userPrompt = prompt;
    setTimeout(() => this.focusComposer(), 0);
  }

  clearInput(): void {
    this.userPrompt = '';
    this.resizeTextarea();
    this.focusComposer();
  }

  clearChat(): void {
    this.messages = [
      {
        id: Date.now(),
        role: 'assistant',
        content:
          'Chat cleared. Ask a new question whenever you are ready.',
        time: this.getCurrentTime(),
        status: 'done',
      },
    ];
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.handleAsk();
    }
  }

  handleAsk(): void {
    const prompt = this.userPrompt.trim();

    if (!prompt || this.isLoading) {
      return;
    }

    this.messages.push({
      id: Date.now(),
      role: 'user',
      content: prompt,
      time: this.getCurrentTime(),
      status: 'sent',
    });

    this.userPrompt = '';
    this.isLoading = true;
    this.resizeTextarea();

    window.setTimeout(() => {
      this.messages.push({
        id: Date.now() + 1,
        role: 'assistant',
        content: this.generateReply(prompt),
        time: this.getCurrentTime(),
        status: 'done',
      });

      this.isLoading = false;
      this.focusComposer();
    }, 900);
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  onTextareaInput(): void {
    this.resizeTextarea();
  }

  trackByMessageId(_: number, message: ChatMessage): number {
    return message.id;
  }

  private generateReply(prompt: string): string {
    const normalized = prompt.toLowerCase();

    if (normalized.includes('angular')) {
      return 'Angular uses components, templates, dependency injection, and routing to structure applications. If you want, I can generate standalone components, route configs, services, or a complete UI flow for your app.';
    }

    if (normalized.includes('email')) {
      return 'I can draft the email. Send me the recipient, purpose, tone, and any points that must be included, and I will turn it into a clean professional message.';
    }

    if (normalized.includes('summarize') || normalized.includes('summary')) {
      return 'I can summarize content into bullets, executive summary, or key takeaways. Paste the text or connect it to a real backend source for production use.';
    }

    if (normalized.includes('interview')) {
      return 'I can generate interview questions by role and difficulty. For example: frontend Angular, backend Node, AI/ML, system design, or behavioral rounds.';
    }

    if (normalized.includes('hello') || normalized.includes('hi')) {
      return 'Hello. What would you like to build, write, analyze, or improve today?';
    }

    const randomReply =
      this.starterReplies[
        Math.floor(Math.random() * this.starterReplies.length)
      ];

    return `${randomReply}\n\nYour prompt was: “${prompt}”\n\nThis response is currently mocked in the frontend. The next step is wiring this UI to your backend or AI API so replies are generated live.`;
  }

  private getCurrentTime(): string {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  private scrollToBottom(): void {
    const el = this.messagesContainer?.nativeElement;
    if (!el) {
      return;
    }

    el.scrollTop = el.scrollHeight;
  }

  private resizeTextarea(): void {
    const textarea = this.composerTextarea?.nativeElement;
    if (!textarea) {
      return;
    }

    textarea.style.height = '0px';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;
  }

  private focusComposer(): void {
    this.composerTextarea?.nativeElement.focus();
  }
}