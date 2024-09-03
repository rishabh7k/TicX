export enum TicketStatusEnum {
  IN_P = "In Progress",
  PEN = "Pending",
  RES = "Resolved",
}

export interface TicketModel {
  ticket_id: string;
  client_name: string;
  phone: string;
  address: string;
  device: string;
  ticket_status: TicketStatusEnum;
  issue_description: string;
  bill_id: string | null;
  issue_title: string;
}
export interface TicketListModel {
  page: number;
  pageSize: number;
  totalPages: number;
  totalTickets: number;
  data: TicketModel[];
}
