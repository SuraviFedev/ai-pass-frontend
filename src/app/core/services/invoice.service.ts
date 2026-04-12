import { Injectable } from '@angular/core';
import { InvoiceData } from '../models/invoice.model';
import { MOCK_INVOICE } from '../mock-data/invoice.mock';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  getInvoice(): InvoiceData {
    return MOCK_INVOICE;
  }
}