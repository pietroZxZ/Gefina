import { InvoiceStatus } from "./invoiceType";

export function statusLabel(status: InvoiceStatus): string {
    return status === 'paid' ? 'Paga' : 'Pendente';
}