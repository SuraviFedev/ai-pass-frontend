import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { InvoiceService } from '../../../core/services/invoice.service';
import { PageTitleComponent } from '../../../shared/components/page-title/page-title.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';

@Component({
  selector: 'app-invoice-ai',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, SectionCardComponent],
  templateUrl: './invoice-ai.component.html',
  styleUrls: ['./invoice-ai.component.scss'],
})
export class InvoiceAiComponent {
  private readonly invoiceService = inject(InvoiceService);

  readonly invoice = this.invoiceService.getInvoice();
}