export interface InvoiceData {
  vendor: string;
  amount: string;
  vat: string;
  date: string;
  decision: 'PASS' | 'REVIEW' | 'FAIL';
  explanation: string;
}