import { InvoiceData } from '../models/invoice.model';

export const MOCK_INVOICE: InvoiceData = {
  vendor: 'Acme Supply Ltd.',
  amount: '€4,820.00',
  vat: '€915.80',
  date: '2026-04-10',
  decision: 'REVIEW',
  explanation:
    'VAT and total amount are valid, but vendor bank details do not match previously approved supplier records. Manual verification is recommended before payment approval.',
};