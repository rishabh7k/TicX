export enum DeviceVendors {
  APPLE = "Apple",
  SAMSUNG = "Samsung",
}

export enum TicketStatus {
  IN_P = "In Progress",
  PEN = "Pending",
  RES = "Resolved",
}

export interface Ticket {
  ticket_id: string | null;
  client_name: string;
  phone: string;
  address: string;
  device: DeviceVendors;
  ticket_status: TicketStatus | null;
  issue_title: string;
  issue_description: string;
  bill_id: string | null;
  created_at: Date | null;
}
